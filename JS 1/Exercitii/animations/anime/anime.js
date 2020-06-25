anime({
    targets: document.querySelectorAll('div.square'),
    // poate sa fie si un singur TARGET ---- target: document.querySelectorAll('div.square'),
    translateX: 500,
    duration: 3000,
    loop: true,
    direction: 'alternate',
    delay: anime.stagger(100)
})