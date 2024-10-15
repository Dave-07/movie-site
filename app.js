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


let player = document.querySelector('.myPlayer');
let playButtons = document.querySelectorAll('.movie-list-item-button, .featured-button');
// oid=-218222949&id=456239102&hash=a4efd51477ace647
// let queryDelimeter = "?";
// let parameterSeparator = "&";
let oid = "-218222949";
let id = "456239102";
let hash = "a4efd51477ace647";
let url = `https://vk.com/video_ext.php`;
let autoplay = '1';
let body = document.querySelector('body');
let overlay = document.querySelector('.darken');
playButtons = Array.from(playButtons);





function openPlayer(event){
    let parent = event.target.parentElement;
        let img = parent.querySelector('img');
        let src = img.getAttribute('src');
    
        player.style.transform = "translate(-50%, -50%)";
        player.style.opacity = 1;
        id = 'dJTU48_yghs';
        overlay.classList.add('overlay')
        player.setAttribute('src', `${url}?oid=${oid}&id=${id}&hash=${hash}&autoplay=${autoplay}`);
       

        setTimeout(function(){
            player.style.transition = 'transform 0s';
        }, 1000);
       

        // console.log(src);

}

function closePlayer(event) {
    let targetClass = event.target.className;
    let overlayClass = 'darken overlay';

    if (targetClass == overlayClass) {
        player.style.transition = 'transform 1s';
        overlay.classList.remove('overlay');
        player.style.transform = 'translateX(1000%)';
        setTimeout(function(){
            player.setAttribute('src', "");
        }, 500);
    }
}


playButtons.forEach(el => {
    el.addEventListener('click', openPlayer);
});


body.addEventListener('click', closePlayer);



