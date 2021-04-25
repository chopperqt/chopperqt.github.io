import { useState ,useEffect } from 'react';

import './style.css';


let currentSlide = 1;
let currentNavItem = 1

let timer = setInterval(() => {
    animationSwipeSlide()
}, 7000 )

const animationSwipeSlide = () => {
    let currentSlideItem = document.querySelector('.slide-'+currentSlide);
    let currentNavigationItem = document.querySelector('.nav-item-'+currentNavItem);

    currentSlideItem.id = "hide-slide";
    currentNavigationItem.removeAttribute('id');

    currentSlide <= 2 ? currentSlide += 1 : currentSlide = 1;
    currentNavItem <= 2 ? currentNavItem += 1 : currentNavItem = 1;


    let nextSlideItem = document.querySelector('.slide-'+currentSlide);
    let nextNavItem = document.querySelector('.nav-item-'+currentNavItem);

    nextNavItem.id = "active-nav-item";

    setTimeout(() => {
        nextSlideItem.id = "active-slide"
    }, 1000);
}

const clickAnimationSlide = () => {
    let nextSlideItem = document.querySelector('.slide-'+currentSlide);

    setTimeout(() => {
        nextSlideItem.id = "active-slide";
    }, 1000)
}

const clickNavigationItem = (number) => {

    let currentSlideItem = document.querySelector('.slide-'+currentSlide);

    currentSlideItem.id = "hide-slide";

    let currentNavigationItem = document.querySelector('#active-nav-item');
    let nextNavigationItem = document.querySelector('.nav-item-'+number);

    currentNavigationItem.removeAttribute('id');

    nextNavigationItem.id = "active-nav-item";
    currentSlide = number;

    currentSlide = number;
    currentNavItem = number;

    window.clearInterval(timer);

    timer = setInterval(() => {
        animationSwipeSlide()
    }, 7000);

    clickAnimationSlide();
} 

const Slider = ({slides}) => {
    return (
        <div className="slider">
            <div className="navigation">
                <div onClick={() => clickNavigationItem(1)} className="nav-item nav-item-1" id="active-nav-item"></div>
                <div onClick={() => clickNavigationItem(2)} className="nav-item nav-item-2"></div>
                <div onClick={() => clickNavigationItem(3)} className="nav-item nav-item-3"></div>
            </div>
            <div className="slider_wrap"> 
                {
                    slides ? 
                        slides.map((item,index) => 
                            <img className={"slide-"+ (+index + 1)} id={index === 0 ? "active-slide" : "hide-slide"} src={item} alt="image"/>              
                        )
                    : null
                }
            </div>
        </div>
    );
}
 
export default Slider;