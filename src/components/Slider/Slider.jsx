import { useState ,useEffect } from 'react';

import './style.css';


// let currentSlide = 1;
// let currentNavItem = 1

// let timer = setInterval(() => {
//     animationSwipeSlide()
// }, 7000 )

// const animationSwipeSlide = () => {
//     let currentSlideItem = document.querySelector('.slide-'+currentSlide);
//     let currentNavigationItem = document.querySelector('.nav-item-'+currentNavItem);

//     currentSlideItem.id = "hide-slide";
//     currentNavigationItem.removeAttribute('id');

//     if (currentSlide <= 2) {
//         currentSlide += 1;
//     }else {
//         currentSlide = 1;
//     }

//     if (currentNavItem <= 2) {
//         currentNavItem += 1;
//     }else {
//         currentNavItem = 1;
//     }

//     let nextSlideItem = document.querySelector('.slide-'+currentSlide);
//     let nextNavItem = document.querySelector('.nav-item-'+currentNavItem);

//     nextNavItem.id = "active-nav-item";

//     setTimeout(() => {
//         nextSlideItem.id = "active-slide"
//     }, 1000);
// }

// const clickAnimationSlide = () => {
//     let nextSlideItem = document.querySelector('.slide-'+currentSlide);

//     setTimeout(() => {
//         nextSlideItem.id = "active-slide";
//     }, 1000)
// }

// const clickNavigationItem = (number) => {

//     let currentSlideItem = document.querySelector('.slide-'+currentSlide);

//     currentSlideItem.id = "hide-slide";

//     let currentNavigationItem = document.querySelector('#active-nav-item');
//     let nextNavigationItem = document.querySelector('.nav-item-'+number);

//     currentNavigationItem.removeAttribute('id');

//     nextNavigationItem.id = "active-nav-item";
//     currentSlide = number;

//     currentSlide = number;
//     currentNavItem = number;

//     clearInterval(timer);

//     timer = setInterval(() => {
//         animationSwipeSlide()
//     }, 7000);

//     clickAnimationSlide();
// } 

const Slider = ({images}) => {
    return (
        <div className="slider">
            {/* <div className="navigation">
                <div onClick={() => clickNavigationItem(1)} className="nav-item nav-item-1" id="active-nav-item"></div>
                <div onClick={() => clickNavigationItem(2)} className="nav-item nav-item-2"></div>
                <div onClick={() => clickNavigationItem(3)} className="nav-item nav-item-3"></div>
            </div>
            <div className="slider_wrap"> 
                <img className="slide-1" id="active-slide" src="https://drive.google.com/uc?export=view&id=1HH-08k1t3jWpXoc3j49_DndBUqIvxJlw" alt=""/>
                <img className="slide-2" id="hide-slide" src="https://st2.depositphotos.com/3364363/5972/i/600/depositphotos_59728757-stock-photo-waiting-for-a-new-day.jpg" alt=""/>
                <img className="slide-3" id="hide-slide" src="https://st.depositphotos.com/1686706/4746/i/600/depositphotos_47464691-stock-photo-young-woman-sits-on-a.jpg" alt=""/>
            </div> */}
        </div>
    );
}
 
export default Slider;