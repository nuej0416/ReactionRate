// 반응속도 테스트

const screen = document.querySelector('#screen');
let startTime;
let endTime;
let recode = [];
let timeOut;

screen.addEventListener('click', function() {
    if(screen.classList.contains('waiting')) {
        screen.classList.remove('waiting');
        screen.classList.add('ready');
        screen.textContent = '초록색이 되면 클릭하세요.';
        timeOut = setTimeout(function () {
            startTime = new Date();
            screen.click();
        }, Math.floor(Math.random() * 1000) + 2000);        
    } else if (screen.classList.contains('ready')) {
        if (!startTime) {
            clearTimeout(timeOut);
            screen.classList.remove('ready');
            screen.classList.add('waiting');
            screen.textContent = '너무 성급하시군요!';
        } else {
            screen.classList.remove('ready');
            screen.classList.add('now');
            screen.textContent = '클릭하세요!';
        }
    } else if (screen.classList.contains('now')) {
        endTime = new Date();
        console.log('반응속도', endTime - startTime, 'ms');
        recode.push(endTime-startTime);
        startTime = null;
        endTime = null;
        screen.classList.remove('now');
        screen.classList.add('waiting');
        screen.textContent = '클릭해서 시작하세요.';
    }
});