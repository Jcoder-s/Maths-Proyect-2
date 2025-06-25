const containers = document.querySelectorAll('.section')
let currentContainer = 0

const documentButton = document.getElementById('check-btn')


function nextContainer(){
    if (currentContainer == containers.length - 1) {
        return
    }
    containers[currentContainer].classList.remove('active')
    currentContainer++
    containers[currentContainer].classList.add('active')
}

documentButton.addEventListener('click', nextContainer)