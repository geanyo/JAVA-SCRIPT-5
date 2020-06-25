anime({
    targets: document.querySelectorAll('div.square'),
    // poate sa fie si un singur TARGET ---- target: document.querySelectorAll('div.square'),
    translateX: 500,
    duration: 3000,
    loop: true,
    direction: 'alternate',
    delay: anime.stagger(100)
});

anime({
    targets: 'path',
    duration: 2000,
    strokeDashoffset: [anime.setDashoffset, 0],
    delay: function(el, i) { return i * 250 },
    //    i     este indexul elementului din lista de cai-path
    easing: 'easeInOutSine',
    direction: 'alternate',
    loop: true

});