const bars = document.querySelector('.menu');
const navUl = document.querySelector('.nav-sp');

bars.addEventListener("click", () =>{
    navUl.classList.toggle('show')
    console.log(navUl)
});
