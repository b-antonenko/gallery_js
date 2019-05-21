'use strict';

const lgImg = document.querySelector('#largeImg');
const thumbs = document.querySelector('#thumbs');

thumbs.addEventListener('click', function(e) {
    lgImg.src = e.target.src;
    lgImg.alt = e.target.alt;
});

