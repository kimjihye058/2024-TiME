// JavaScript 코드
var stTime = 0;
var endTime = 0;
var timerStart;

var min;
var sec;
var milisec;

var startBtn = document.getElementById('testStartBtn');
var stopBtn = document.getElementById('testStopBtn');

const charactergif = document.getElementById('character-gif');
const character = document.getElementById('character');

startBtn.addEventListener('click', function() {	
    if(!stTime) {		
        stTime = Date.now(); // 처음 시작할 때	
    } 
    else {		
        stTime += (Date.now() - endTime); // 재시작할 때	
    }		
    
    timerStart = setInterval(function() {		
        var nowTime = new Date(Date.now() - stTime); 		
        min = addZero(nowTime.getMinutes());		
        sec = addZero(nowTime.getSeconds());		
        milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10)); 		
        document.getElementById('postTestMin').innerText = min;		
        document.getElementById('postTestSec').innerText = sec;		
    }, 1);

    character.style.display = "none";  // character를 숨김
    charactergif.style.display = "block";  // gif를 표시
}); 
    
stopBtn.addEventListener('click', function() {	
    if(timerStart) {		
        clearInterval(timerStart);		
        endTime = Date.now();	// STOP 시점의 시간 저장

        // 정지 시간을 서버로 전송
        const stopTime = {
            minutes: min,
            seconds: sec,
            milliseconds: milisec,
            timestamp: endTime
        };

        fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ stopTime }),
        })
        .then(response => response.json())
        .then(data => {
            console.log('서버 응답:', data.message);
        })
        .catch((error) => {
            console.error('서버 전송 중 오류 발생:', error);
        });
    }

    character.style.display = "block";  // character를 표시
    charactergif.style.display = "none";  // gif를 숨김
}); 
        
function addZero(num) {	
    return (num < 10 ? '0' + num : '' + num);
}