const btns = document.querySelectorAll('.js-btn');

btns.forEach((item) => {
    item.addEventListener('click', (e) => {
        // console.log(1);
        let btn = e.target;
        // console.log('btn: ', btn);
        btn.classList.add('play');
        setTimeout( () => btn.classList.remove('play'), 200);


        let sound = document.getElementById(btn.dataset.sound);
        sound.play();


    });
});