import './less/index.less'

// Your code goes here!

let funBusLogo = document.querySelector('.logo-heading');
funBusLogo.addEventListener('mouseover', event => {
    event.target.style.backgroundColor = 'green';
});

let funBusIntro = document.querySelector('.intro');
funBusIntro.addEventListener('dblclick', event => {
    alert('YOU HAVE CLICKED!');
});

let letsGoImg = document.querySelector('.img-content');
letsGoImg.addEventListener('keydown', escKey);
function escKey(event) {
    if(event.key === 'Escape') {
        [img-content].classList.add('off');
    }
}