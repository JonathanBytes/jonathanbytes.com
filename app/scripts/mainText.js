import Typed from 'https://cdn.jsdelivr.net/npm/typed.js@2.0.15/+esm';

var options = {
    strings: [
        'Code &#x1F4BB;',
        'Música &#x1F3B8;',
        'Astronomía &#x1F680;',
        'Naturaleza &#127807; &#x1F343;',
        'Tryhard &#x1F525;'
    ],
    typeSpeed: 100,
    backSpeed: 30,
    backDelay: 1500,
    loop: true,
};

var typed = new Typed('.main-text .alt-text', options);
