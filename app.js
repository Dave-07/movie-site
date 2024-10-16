
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
playButtons = Array.from(playButtons);

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
        "videoUrl": "https://vk.com/video_ext.php?oid=-110645251&id=456239468&hash=76faa5c1c1761eae"
    },
    {
        "title": "Впритык",
        "src": "10.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-220018529&id=456239739&hash=61bcbce72f9ff234"
    },
    {
        "title": "Пипец 2",
        "src": "11.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-121910473&id=456239820&hash=a1c87b6d9e2e4602"
    },
    {
        "title": "Эмоджи ",
        "src": "12.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-170685099&id=456240825&hash=982ac06eb500a62f"
    },
    {
        "title": "Зло возвращается",
        "src": "13.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-83600764&id=456244113&hash=3a4150982bf4053d"
    },
    {
        "title": "Тропы славы",
        "src": "14.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-176189699&id=456239048&hash=423f4004d90323da"
    },
    {
        "title": "Лего Бэтмен",
        "src": "15.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=465765428&id=456239531&hash=ead0c642ee7ff11f"
    },
    {
        "title": "1920 Лондон",
        "src": "16.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-31106704&id=456239129&hash=0f296767f2e599b1"
    },
    {
        "title": "АКВАМЕН ",
        "src": "17.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-176294899&id=456247886&hash=43c8c58b07c6806a"
    },
    {
        "title": "Человек-паук",
        "src": "19.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-217081635&id=456240066&hash=f8f163dfbfd8fdd1"
    },
    {
        "title": "Тьма",
        "src": "f-t-2.png",
        "videoUrl": "https://vk.com/video_ext.php?oid=-169276975&id=456242351&hash=1b97ab40c127cfed"
    },
    {
        "title": "Терминатор Зеро",
        "src": "s1.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-206317404&id=456239368&hash=622ed7a91ef977c7"
    },
    {
        "title": "Синяя тюрьма",
        "src": "s2.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-204399920&id=456241280&hash=662d056b7f90d602"
    },
    {
        "title": "Текен",
        "src": "s3.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-189724571&id=456254496&hash=33d74327ec131382"
    },
    {
        "title": "Киберпанк",
        "src": "s4.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-43444&id=456239748&hash=cdb6be7dbc0145fe"
    },
    {
        "title": "Пузырь ",
        "src": "s5.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-207691718&id=456246039&hash=db9e4abdbd3a6942"
    },
    {
        "title": "Летнее время",
        "src": "s6.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-185087421&id=456240709&hash=33b516e2e6977926"
    },
    {
        "title": "Суперзлодеи",
        "src": "s7.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-34748216&id=456260855&hash=cc67031728e5631b"
    },
    {
        "title": "Ая и ведьма",
        "src": "s8.jpg",
        "videoUrl": "https://vk.com/video_ext.php?oid=-207691718&id=456244818&hash=7f795fc8aba29e04"
    },
    {
        "title": "Игра престолов",
        "src": "a1.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-111951438&id=456242802&hash=96cc0b9ee098cf24"
    },
    {
        "title": "Во все тяжкие",
        "src": "a2.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=431766008&id=456241070&hash=0c3e91695d47bf03"
    },
    {
        "title": "Сопрано",
        "src": "a3.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-226750210&id=456239200&hash=568c750fa48566d2"
    },
    {
        "title": "Друзья ",
        "src": "a4.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-212294367&id=456241577&hash=94628a835114943f"
    },
    {
        "title": "Звоните Солу",
        "src": "a5.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=795782575&id=456239086&hash=db14110cccfb3e36"
    },
    {
        "title": "Офис ",
        "src": "a6.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-80021931&id=456244900&hash=30a9f8cede0cbaff"
    },
    {
        "title": "Тед Лассо",
        "src": "a7.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=818433616&id=456239061&hash=aca23828907f535e"
    },
    {
        "title": "Доктор Хаус",
        "src": "a8.webp",
        "videoUrl": "https://vk.com/video_ext.php?oid=-80021931&id=456244812&hash=562f767a94f79330"
    }
]);
let obj = JSON.parse(rawObj);
let body = document.querySelector('body');
let overlay = document.querySelector('.darken');


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


async function playerFullscreen(){
    
    await player.requestFullscreen();
    
    if ('wakeLock' in navigator) {
        try {
            const wakeLock = await navigator.wakeLock.request('screen');
            console.log('Wake Lock is active');
        } catch (err) {
            console.error(`Failed to acquire wake lock: ${err.name}, ${err.message}`);
        }
    }
}

body.addEventListener('click', closePlayer);

playButtons.forEach(el => {
    el.addEventListener('click', openPlayer);
    el.addEventListener('click', playerFullscreen);
});

