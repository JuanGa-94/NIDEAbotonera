document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.play-but');
    const stopBtn = document.getElementById('stop-btn');
    const allAudios = document.querySelectorAll('audio.fx');

    function stopAll() {
        allAudios.forEach(audio => {
            audio.pause();
            audio.currentTime = 0;
        });
    }

    stopBtn.addEventListener('click', stopAll);

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const fx = boton.nextElementSibling;
            if (fx && fx.className === 'fx') {
                stopAll();
                fx.play();
            }
        });
    });
});
