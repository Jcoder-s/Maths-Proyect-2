
function autoGoHome() {
    setTimeout(() => {
        window.location.href = '../Start-geometry-page/index.html';
    }, 300);
}

let startBtn = document.getElementById('start-btn');
let startSection = document.querySelector('.start-section');
startBtn.addEventListener('click', ()=>{
    startSection.style.display = 'none';
})


