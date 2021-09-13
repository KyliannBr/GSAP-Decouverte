const titreSpans = document.querySelectorAll('h2 span');
const titreHr = document.querySelector('.container-titre hr');
const media = document.querySelectorAll('.media-container a');
const logo = document.querySelector('.logo img');
const aside = document.querySelectorAll('aside a');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');


window.addEventListener('load', () => {
    const TL = gsap.timeline({paused: true});
    
    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3)
    .from(titreHr, 1, {width: 0, ease:"power2.in-out"}, '-=1')
    .staggerFrom(media, 1, {opacity: 0, ease: "power2.out"}, 0.3, "-=1")
    .from(l1, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width: 0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform: 'scale(0)', ease: "power2.out"}, '-=2')
    .staggerFrom(aside, 1, {right: -200, ease: "power2.out"}, 0.3, '-=2');

    TL.play();
})