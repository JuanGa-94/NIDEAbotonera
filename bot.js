document.addEventListener('DOMContentLoaded', () => {
    const botones = document.querySelectorAll('.play-but');

    botones.forEach(boton => {
        boton.addEventListener('click', () => {
            const fx = boton.nextElementSibling;
            if (fx && fx.className === 'fx') {
                fx.play();
            }
        });
    });
});
