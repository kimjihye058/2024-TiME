const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();

const USER_COOKIE_KEY = 'USER';
const USERS_JSON_FILENAME = 'users.json';
const JWT_SECRET = 'secret';

// DATABASE
async function fetchAllUsers() {
    const data = await fs.readFile(USERS_JSON_FILENAME);
    const users = JSON.parse(data.toString());
    return users;
}

async function fetchUser(username) {
    const users = await fetchAllUsers();
    const user = users.find((user) => user.username === username);
    return user;
}

async function createUser(newUser) {
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    const users = await fetchAllUsers();
    users.push({
        ...newUser,
        password: hashedPassword,
    });
    await fs.writeFile(USERS_JSON_FILENAME, JSON.stringify(users));
}

async function removeUser(username) {
    const users = await fetchAllUsers();   
    const index = users.findIndex(u => u.username === username);
    users.splice(index, 1);
    await fs.writeFile(USERS_JSON_FILENAME, JSON.stringify(users));
}

// TOKEN
function generateToken(username) {
    const token = jwt.sign({
        username,
        exp: Date.now() + 1000 * 60,
    }, JWT_SECRET);

    return token;
}

function verifyToken(token) {
    const decoded = jwt.verify(token, JWT_SECRET);
    
    // exp가 현재 시간 이전인 경우(만료된 토큰)
    if (decoded.exp < Date.now()) {
        return null;
    }
    return decoded.username;
}

// MIDDLEWARES
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// Auth Middleware
app.use((req, res, next) => {    
    const token = req.cookies[USER_COOKIE_KEY];
    if (token) {
        const username = verifyToken(token);
        if (username !== null) {
            req.username = username;
        }
    }
    next();
});

// ROUTERS
app.get('/', async (req, res) => {
    // 로그인이 되어 req.username이 존재한다면
    if (req.username) {
        // users.json에서 사용자 정보를 가져온다
        const user = await fetchUser(req.username);
        // 사용자가 존재한다면
        if (user) {
            // JS 객체로 변환된 user 데이터에서 username, name, password를 추출하여 클라이언트에 렌더링
            res.status(200).send(`
                <a href="/logout">Log Out</a>
                <a href="/withdraw">Withdraw</a>
                <h1>id: ${user.username}, name: ${user.name}, password: ${user.password}</h1>
            `);
            return;
        }
    }

    // 쿠키가 존재하지 않는 경우, 로그인 되지 않은 것으로 간주
    res.status(200).send(`
        <a href="/login.html">Log In</a>
        <a href="/signup.html">Sign Up</a>
        <h1>Not Logged In</h1>
    `);
});

app.post('/signup', async (req, res) => {
    const { username, name, password } = req.body;
    const user = await fetchUser(username);

    // 이미 존재하는 username일 경우 회원 가입 실패
    if (user) {
        res.status(400).send(`duplicate username: ${username}`);
        return;
    }

    // 아직 가입되지 않은 username인 경우 db에 저장
    // KEY = username, VALUE = { name, password }
    const newUser = {
        username,
        name,
        password,
    };
    await createUser({
        username,
        name,
        password,
    });

    // username을 Payload로 갖는 토큰 생성
    const token = generateToken(newUser.username);
    // 토큰을 쿠키에 저장
    res.cookie(USER_COOKIE_KEY, token);
    // 가입 완료 후, 루트 페이지로 이동
    res.redirect('/');
});



app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = await fetchUser(username);
    // 가입 안 된 username인 경우
    if (!user) {
        res.status(400).send(`not registered username: ${username}`);
        return;
    }
    // 비밀번호가 틀렸을 경우
    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
        res.status(400).send('incorrect password');
        return;
    }

    // username을 Payload로 갖는 토큰 생성
    const token = generateToken(user.username);
    // 토큰을 쿠키에 저장
    res.cookie(USER_COOKIE_KEY, token);
    // 로그인 후, 루트 페이지로 이동
    res.redirect('/');
});

app.get('/withdraw', async (req, res) => {
    // 로그인이 되어 있는 경우만 회원 탈퇴 가능
    if (req.username) {
        const user = await fetchUser(req.username);
        await removeUser(user.username, user.password);
        res.clearCookie(USER_COOKIE_KEY);
        res.redirect('/');
    }
});

app.get('/logout', (req, res) => {
    // 쿠키 삭제 후 루트 페이지로 이동
    res.clearCookie(USER_COOKIE_KEY);
    res.redirect('/');
});

app.listen(3000, () => {
    console.log('server is running at 3000');
});