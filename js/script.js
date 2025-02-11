setTimeout(() => {
    document.getElementById('scrolling-text').style.display = 'none';
    document.getElementById('main-content').classList.remove('hidden');
    startHeartAnimation();
}, 30000);

document.getElementById('yes-btn').addEventListener('click', function() {
    let funnyImg = document.getElementById('funny-img');
    let loveText = document.getElementById('love-text');
    
    funnyImg.src = 'https://i.pinimg.com/736x/a8/c3/95/a8c395ab6e9f3ca01c7c2d9ffc33bb86.jpg';
    funnyImg.classList.remove('hidden');

    let mainContent = document.getElementById('main-content');
    mainContent.style.display = 'flex';
    mainContent.style.flexDirection = 'column';
    mainContent.style.alignItems = 'center';
    mainContent.style.justifyContent = 'center';

    document.getElementById('buttons').style.display = 'none';
    document.getElementById('title-container').style.display = 'none';

    setTimeout(() => {
        loveText.classList.remove('hidden');
        loveText.classList.add('animated-text');
    }, 3000);


    let loveSong = document.getElementById('love-song');
    loveSong.play();
});

let noBtn = document.getElementById('no-btn');
noBtn.addEventListener('mouseover', function() {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 150);
    noBtn.style.position = 'absolute';
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
    console.log(x, y);
});

function createHeart(){
    let heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 3000);
}

function startHeartAnimation() {
    setInterval(createHeart, 500);
}