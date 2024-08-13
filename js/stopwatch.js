var stTime = 0
var endTime = 0
var timerStart 

var min
var sec
var milisec 

var startBtn = document.getElementById('testStartBtn')
var stopBtn = document.getElementById('testStopBtn')


const charactergif = document.getElementById('character-gif');
const character = document.getElementById('character');

startBtn.addEventListener('click', function() {	
    if(!stTime) {		
        stTime = Date.now()	// 처음 시작할 때	
    } 
    else {		
        stTime += (Date.now() - endTime)	// 재시작할 때	
    }		
    
    timerStart = setInterval(function() {		
        var nowTime = new Date(Date.now() - stTime) 		
        min = addZero(nowTime.getMinutes())		
        sec = addZero(nowTime.getSeconds())		
        milisec = addZero(Math.floor(nowTime.getMilliseconds() / 10)) 		
        document.getElementById('postTestMin').innerText = min		
        document.getElementById('postTestSec').innerText = sec		
    }, 1)

    character.style.display = "none";  // character를 숨김
    charactergif.style.display = "block";  // gif를 표시
}) 
    
stopBtn.addEventListener('click', function() {	
    if(timerStart) {		
        clearInterval(timerStart)		
        endTime = Date.now()	// STOP시점의 시간 저장	
    }

    character.style.display = "block";  // character를 표시
    charactergif.style.display = "none";  // gif를 숨김
}) 
        
function addZero(num) {	
    return (num < 10 ? '0' + num : '' + num)
}
