
/*slider funcionality*/
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

/*dark and light mode switching fnctionality*/
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


/*player functionality*/

/*script to retrieve data from element
    playButtons.forEach(el => {
    let parent = el.parentElement;
    let titleEl = parent.querySelector(`.movie-list-item-title`);
    let img = parent.querySelector('img');
    let imgSrc = img.src.split('/').splice(-1).join('');
    let tName = titleEl?.textContent ?? 'custom';
    arr.push({title: tName, src: imgSrc, videoUrl: ""});
    console.log(imgSrc);
   });
*/

// console.log(obj);
// let queryDelimeter = "?";
// let parameterSeparator = "&";

// let oid = "-25468809";
// let id = "456239566";
// let hash = "68d547f91a459e87";
// let url = `https://vk.com/video_ext.php`;
// let autoplay = '1';

let player = document.querySelector('.myPlayer');
let playButtons = document.querySelectorAll('.movie-list-item-button, .featured-button');
let rawObj = JSON.stringify([
    {
        "title": "Джанго",
        "src": "f-t-1.png",
        "videoUrl": "https://vk.com/video_ext.php?oid=-210693593&id=456239019&hash=cfada1edf85f0cd7"
    },
    {
        "title": "Она",
        "src": "1.jpeg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-25468809&id=456239566&hash=68d547f91a459e87"
    },
    {
        "title": "Звёздные войны",
        "src": "2.jpeg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-209477587&id=456245628&hash=362f626d8bc9f192"
    },
    {
        "title": "Дежавю",
        "src": "3.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-212730940&id=456239064&hash=9ed15f521aece716"
    },
    {
        "title": "1917",
        "src": "4.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-218222949&id=456239102&hash=a4efd51477ace647"
    },
    {
        "title": "Мстители",
        "src": "5.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-214045512&id=456243994&hash=4997248e9a00fd80"
    },
    {
        "title": "Рэмпейдж",
        "src": "6.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-176294899&id=456248919&hash=4f0d6471fe8a89b6"
    },
    {
        "title": "Игра Эндера",
        "src": "7.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-220018529&id=456240498&hash=ff874820c06166b4"
    },
    {
        "title": "Обливион",
        "src": "8.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-220018529&id=456240377&hash=6f14983078500fe4"
    },
    {
        "title": "Субстанция",
        "src": "20.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-219402587&id=456239053&hash=f07eb63393e77e50"
    },
    {
        "title": "Ужасающий 3 ",
        "src": "21.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-196534124&id=456239614&hash=645772434970c9af"
    },
    {
        "title": "Хоббит",
        "src": "9.jpg",
        "videoUrl": ""
    },
    {
        "title": "Впритык",
        "src": "10.jpg",
        "videoUrl": ""
    },
    {
        "title": "Пипец 2",
        "src": "11.jpg",
        "videoUrl": ""
    },
    {
        "title": "Эмоджи ",
        "src": "12.jpg",
        "videoUrl": ""
    },
    {
        "title": "Зло возвращается",
        "src": "13.jpg",
        "videoUrl": ""
    },
    {
        "title": "Тропы славы",
        "src": "14.jpg",
        "videoUrl": ""
    },
    {
        "title": "Лего Бэтмен",
        "src": "15.jpg",
        "videoUrl": ""
    },
    {
        "title": "1920 Лондон",
        "src": "16.jpg",
        "videoUrl": ""
    },
    {
        "title": "АКВАМЕН ",
        "src": "17.jpg",
        "videoUrl": ""
    },
    {
        "title": "Человек-паук",
        "src": "19.jpg",
        "videoUrl": ""
    },
    {
        "title": "Тьма",
        "src": "f-t-2.png",
        "videoUrl": ""
    },
    {
        "title": "Терминатор Зеро",
        "src": "s1.webp",
        "videoUrl": ""
    },
    {
        "title": "Синяя тюрьма",
        "src": "s2.webp",
        "videoUrl": ""
    },
    {
        "title": "Текен",
        "src": "s3.webp",
        "videoUrl": ""
    },
    {
        "title": "Киберпанк",
        "src": "s4.webp",
        "videoUrl": ""
    },
    {
        "title": "Пузырь ",
        "src": "s5.webp",
        "videoUrl": ""
    },
    {
        "title": "Летнее время",
        "src": "s6.jpg",
        "videoUrl": ""
    },
    {
        "title": "Суперзлодеи",
        "src": "s7.jpg",
        "videoUrl": ""
    },
    {
        "title": "Ая и ведьма",
        "src": "s8.jpg",
        "videoUrl": ""
    },
    {
        "title": "Игра престолов",
        "src": "a1.webp",
        "videoUrl": ""
    },
    {
        "title": "Во все тяжкие",
        "src": "a2.webp",
        "videoUrl": ""
    },
    {
        "title": "Сопрано",
        "src": "a3.webp",
        "videoUrl": ""
    },
    {
        "title": "Друзья ",
        "src": "a4.webp",
        "videoUrl": ""
    },
    {
        "title": "Звоните Солу",
        "src": "a5.webp",
        "videoUrl": ""
    },
    {
        "title": "Офис ",
        "src": "a6.webp",
        "videoUrl": ""
    },
    {
        "title": "Тед Лассо",
        "src": "a7.webp",
        "videoUrl": ""
    },
    {
        "title": "Доктор Хаус",
        "src": "a8.webp",
        "videoUrl": ""
    }
]);
let obj = JSON.parse(rawObj);

let body = document.querySelector('body');
let overlay = document.querySelector('.darken');
playButtons = Array.from(playButtons);


function openPlayer(event){
        let parent = event.target.parentElement;
        let img = parent.querySelector('img');
        let src = img.getAttribute('src').split('/').splice(-1).join('');
        
        let matchObj = obj.filter(el => el.src === src)[0];
        let url = matchObj.videoUrl;
        
        player.style.transform = "translate(-50%, -50%)";
        player.style.opacity = 1;
        player.setAttribute('src', `${url}&autoplay=1`);
        overlay.classList.add('overlay');

        // console.log(matchObj.videoUrl);
        // console.log(player);
        // console.log(`${url}&autoplay=1`);

        setTimeout(function(){
            player.style.transition = 'transform 0s';
        }, 1000);
}


function closePlayer(event) {
    let targetClass = event.target.className;
    let overlayClass = Array.from(overlay.classList).join(" ");

    if (targetClass == overlayClass) {
        player.style.transition = 'transform 1s';
        overlay.classList.remove('overlay');
        player.style.transform = 'translateX(1000%)';

        setTimeout(function(){
            player.setAttribute('src', "");
        }, 500);
    }
}


body.addEventListener('click', closePlayer);

player.addEventListener('onload', function(e){
    player.requestFullscreen().catch(err => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
    });
})

playButtons.forEach(el => {
    el.addEventListener('click', openPlayer);
});

