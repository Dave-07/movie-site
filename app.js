const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll('.movie-list');

arrows.forEach((arrow, i) => {
    
    const len = movieLists[i].querySelectorAll("img").length;
    let countClick = 0;

    arrow.addEventListener('click', () => {
        const ratio = Math.floor(window.innerWidth / 300);
        countClick++;
        if (len - (6 + countClick) + (6 - ratio) >= 0){
            let calculatedX = movieLists[i].computedStyleMap().get('transform')[0].x.value - 300;
            movieLists[i].style.transform = `translateX(${calculatedX}px)`;
        }else {
            movieLists[i].style.transform = "translateX(0)";
            countClick = 0;
        }
    });

   
});


const ball = document.querySelector('.toggle-ball');
const items = document.querySelectorAll('.container, .arrow, .movie-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle');
const sDark = document.querySelectorAll('.dark');
sDark[1].classList.add('second-dark');

ball.addEventListener('click', () => {
    items.forEach(item => {
        item.classList.toggle('active');
    });

    ball.classList.toggle('active');
});





