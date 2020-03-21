'use strict'
const slider__img_1 = document.getElementById('slider__img-1');
const slider__img_2 = document.getElementById('slider__img-2');

const slider__imges = document.getElementById('slider__images');
let slider_moveEnd = true;

function slider__screen_show(id_img) {
    if (window.getComputedStyle(document.getElementById(id_img)).opacity == 1)
        document.getElementById(id_img).style.opacity = 0;
    else document.getElementById(id_img).style.opacity = 1;

}

function slider_leftMovement() {
    if (slider_moveEnd) {
        slider_moveEnd = false;
        document.querySelectorAll('.slider__screen').forEach((img) => img.hidden = true);
        document.querySelectorAll('.slider__button').forEach((img) => img.hidden = true);
        if (slider__img_1.style.left === '-100%')
            slider__img_1.style.left = '100%';
        if (slider__img_2.style.left === '-200%')
            slider__img_2.style.left = '0%';
        let count = 0;
        let interval = setInterval(function() {
            document.querySelectorAll('.slider__img').forEach((img) => {
                img.style.left = +img.style.left.substring(0, img.style.left.length - 1) - 2 + "%";
                count++;
                if (count === 100) {
                    clearInterval(interval);
                    if (slider__img_1.style.left === '0%') {
                        document.querySelectorAll('.slider__screen').forEach((img) => img.hidden = false);
                        document.querySelectorAll('.slider__button').forEach((img) => img.hidden = false);
                    }
                    slider_moveEnd = true;
                    return;

                }
            });
        }, 10);

    }


}

function slider_rightMovement() {
    if (slider_moveEnd) {
        slider_moveEnd = false;
        document.querySelectorAll('.slider__screen').forEach((img) => img.hidden = true);
        document.querySelectorAll('.slider__button').forEach((img) => img.hidden = true);
        if (slider__img_1.style.left === '0%' || slider__img_1.style.left === '')
            slider__img_2.style.left = '-200%';
        if (slider__img_2.style.left === '-100%')
            slider__img_1.style.left = '-100%';
        let count = 0;
        let interval = setInterval(function() {
            document.querySelectorAll('.slider__img').forEach((img) => {
                img.style.left = +img.style.left.substring(0, img.style.left.length - 1) + 2 + "%";
                count++;
                if (count === 100) {
                    clearInterval(interval);
                    if (slider__img_1.style.left === '0%') {
                        document.querySelectorAll('.slider__screen').forEach((img) => img.hidden = false);
                        document.querySelectorAll('.slider__button').forEach((img) => img.hidden = false);
                    }
                    slider_moveEnd = true;
                    return;

                }
            });
        }, 10);

    }

}



/*
const menu = document.getElementById('header_menu');
menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('header_active'));
    event.target.classList.add('header_active');
});






*/
const buttons = document.getElementById('portfolio__buttons');
buttons.addEventListener('click', (e) => {
    if (e.target.type == 'submit') {
        document.querySelectorAll('.portfolio__item ').forEach(el => el.style.order = Math.floor(Math.random() * 20));
        buttons.querySelectorAll('button').forEach(el => el.classList.remove('portfolio__button_active'));
        e.target.classList.add('portfolio__button_active');
    }
});
const portfolio_img_border = document.getElementById('portfilio__container');
portfolio_img_border.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if (e.target.tagName === 'IMG') {
        portfolio_img_border.querySelectorAll('.portfolio__item').forEach(el => el.classList.remove('portfolio__img_border'));
        e.target.parentElement.classList.add('portfolio__img_border');
        e.target.nextElementSibling.style.opacity = 1;
        e.target.nextElementSibling.innerHTML = e.target.parentElement.style.order;
        let timerId = setTimeout(() => {
            e.target.nextElementSibling.style.opacity = 0;
            e.target.nextElementSibling.innerHTML = "";
        }, 2000);


    }
});

/*
function picture_replacement(id_element) {

    if (window.getComputedStyle(document.getElementById(id_element)).backgroundImage.split('/').pop().split('"')[0] == 'slider-1.png') {
        document.getElementById(id_element).style.backgroundImage = 'url(assets/images/Slide-2.png)';
        document.querySelectorAll('.dual_iphone').forEach(el => el.style.opacity = 0);

    } else
        document.getElementById(id_element).style.backgroundImage = 'url(assets/images/slider-1.png)';
}

*/