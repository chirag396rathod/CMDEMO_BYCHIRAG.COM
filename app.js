const open = document.querySelector('.manu');
// const close = document.querySelector('.close');
const togglewindow = document.querySelector('.Link')
const backdrop = document.querySelector('.backdrop')
const close = document.querySelector('.close');

open.addEventListener('click', function () {
    const visiblity = togglewindow.getAttribute('data-visiblity');
    const backd = backdrop.getAttribute('data-visiblity');


    if (visiblity === "false" || backd === "false") {
        togglewindow.setAttribute('data-visiblity', true)
        backdrop.setAttribute('data-visiblity', true)
    }
});

close.addEventListener('click', function () {
    const visiblity = togglewindow.getAttribute('data-visiblity');
    const backd = backdrop.getAttribute('data-visiblity');
    if (visiblity === "true" || backd === "true") {
        togglewindow.setAttribute('data-visiblity', false)
        backdrop.setAttribute('data-visiblity', false)
    }
});

