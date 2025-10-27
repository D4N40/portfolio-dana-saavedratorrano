gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
    gsap.from('.signature', {
        y: 100,
        opacity: 0,
        delay: 0.5,
        duration: 1.5,
        stagger: {
            each: 0.3
        }
    });
    gsap.from('.ligne', {
        opacity: 0,
        delay: 3,
        duration: 1
    });

    gsap.from('.lien', {
        opacity: 0,
        delay: 4
    });

});


gsap.from('.carrousel', {
    y: 100,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: '.carrousel',
        markers: true
    }
});