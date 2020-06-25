anime({
    targets: document.querySelectorAll('div.square'),
    // poate sa fie si un singur TARGET ---- target: document.querySelectorAll('div.square'),
    translateX: 250,
    duration: 3000,
    loop: true,
    direction: 'alternate',
    delay: anime.stagger(100)
})