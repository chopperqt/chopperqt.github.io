import { useState ,useEffect } from 'react';

import './style.css';



// let timer = setInterval(() => {
//     animationSwipeSlide()
// }, 7000 )

let currentSlide = 1;


const animationSwipeSlide = () => {
    console.log(currentSlide);
    let currentSlideItem = document.querySelector('.slide-'+currentSlide);

    currentSlideItem.id = "hide-slide";

    if (currentSlide <= 2) {
        currentSlide += 1;
    }else {
        currentSlide = 1;
    }

    let nextSlideItem = document.querySelector('.slide-'+currentSlide);

    setTimeout(() => {
        nextSlideItem.id = "active-slide"
    }, 1000)
}

const clickAnimationSlide = () => {
    let nextSlideItem = document.querySelector('.slide-'+currentSlide);

    setTimeout(() => {
        nextSlideItem.id = "active-slide"
    }, 1000)
}

const clickNavigationItem = (number) => {
    let currentSlideItem = document.querySelector('.slide-'+currentSlide);

    currentSlideItem.id = "hide-slide";


    currentSlide = number;

    clickAnimationSlide();
} 

const Slider = ({images}) => {
    return (
        <div className="slider">
            <div className="navigation">
                <div onClick={() => clickNavigationItem(1)} className="nav-item nav-item-1" id="active-nav-item"></div>
                <div onClick={() => clickNavigationItem(2)} className="nav-item nav-item-2"></div>
                <div onClick={() => clickNavigationItem(3)} className="nav-item nav-item-3"></div>
            </div>
            <div className="slider_wrap">
                <img className="slide-1" id="active-slide" src="https://via.placeholder.com/700x395" alt=""/>
                <img className="slide-2" id="hide-slide" src="https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg" alt=""/>
                <img className="slide-3" id="hide-slide" src="https://st.depositphotos.com/1686706/4746/i/600/depositphotos_47464691-stock-photo-young-woman-sits-on-a.jpg" alt=""/>
            </div>
        </div>
    );
}
 
export default Slider;