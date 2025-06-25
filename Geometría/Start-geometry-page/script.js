document.addEventListener('DOMContentLoaded', () => {
  const completedLessons = JSON.parse(localStorage.getItem('completedLessons')) || [];

  completedLessons.forEach(lessonId => {
    const lessonElement = document.querySelector(`[data-lesson-id="${lessonId}"]`);
    if (lessonElement) {
      lessonElement.classList.add('completed');
      lessonElement.querySelector('.lesson-status').innerHTML = '<i class="fas fa-check"></i>';
    }
  });
});


const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  if (window.scrollY > window.innerHeight * 0.65) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});




//==========
// Side bar |
//==========


const $hamburgerIcon = document.querySelector('.hamburger')
const $sideBar = document.querySelector('.side-bar')
$hamburgerIcon.addEventListener('click', ()=>{
  $sideBar.classList.toggle('active')
})

//Estilos para la seccion activa del side bar

$sideBar.addEventListener('click', (e) => {
  if (e.target.matches('.side-bar-rel')) {
    document.querySelectorAll('.side-bar-rel.active').forEach(el =>
      el.classList.remove('active')
    );
    e.target.classList.add('active');
  }
});

