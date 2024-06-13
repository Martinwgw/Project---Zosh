import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

import 'swiper/css';
import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

// import { EffectCoverflow, Pagination, Navigation } from 'swiper';

import img1 from '../images/w1.jpg';
import img2 from '../images/w2.jpg';
import img3 from '../images/w3.jpg';
import img4 from '../images/w4.jpg';
import img5 from '../images/w5.jpg';
import img6 from '../images/w6.jpg';

const Styles = styled.div`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style-type: none;
}

:root {
  --primary: #6a59ff;
  --white: #ffffff;
  --bg: #f5f5f5;
}

html {
  font-size: 62.5%;
  scroll-behavior: smooth;
}

@media (min-width: 1440px) {
  html {
    zoom: 1.5;
  }
}

@media (min-width: 2560px) {
  html {
    zoom: 1.7;
  }
}

@media (min-width: 3860px) {
  html {
    zoom: 2.5;
  }
}

::-webkit-scrollbar {
  width: 1.3rem;
}

::-webkit-scrollbar-thumb {
  border-radius: 1rem;
  background: #797979;
  transition: all 0.5s ease-in-out;
}

::-webkit-scrollbar-thumb:hover {
  background: #222224;
}

::-webkit-scrollbar-track {
  background: #f9f9f9;
}

body {
  font-size: 1.6rem;
  background: var(--bg);
}

.container {
  max-width: 124rem;
  padding: 4rem 1rem;
  margin: 0 auto;
}

.heading {
  padding: 2rem 0;
  font-size: 3.5rem;
  text-align: center;
}

.swiper_container {
  height: 50rem;
  padding: 2rem 0;
  position: relative;
}

.swiper-slide {
  width: 37rem;
  height: 42rem;
  position: relative;
}

// @media (max-width: 500px) {
//   .swiper_container {
//     height: 47rem;
//   }
//   .swiper-slide {
//     width: 28rem !important;
//     height: 33rem !important;
//   }
//   .swiper-slide img {
//     width: 28rem !important;
//     height: 33rem !important;
//   }

  
// }

.swiper-slide img {
  width: 35rem;
  height: 40rem;
  border-radius: 2rem;
  object-fit: cover;
}

.swiper-slide-shadow-left,
.swiper-slide-shadow-right {
  display: none;
}

.slider-controler {
  position: relative;
  bottom: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider-controler .swiper-button-next {
  left: 58% !important;
  transform: translateX(-58%) !important;
}

// @media (max-width: 990px) {
//   .slider-controler .swiper-button-next {
//     left: 70% !important;
//     transform: translateX(-70%) !important;
//   }
// }

// @media (max-width: 450px) {
//   .slider-controler .swiper-button-next {
//     left: 80% !important;
//     transform: translateX(-80%) !important;
//   }
// }

// @media (max-width: 990px) {
//   .slider-controler .swiper-button-prev {
//     left: 30% !important;
//     transform: translateX(-30%) !important;
//   }
// }

// @media (max-width: 450px) {
//   .slider-controler .swiper-button-prev {
//     left: 20% !important;
//     transform: translateX(-20%) !important;
//   }
}

.slider-controler .slider-arrow {
  background: var(--white);
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  left: 42%;
  transform: translateX(-42%);
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.slider-controler .slider-arrow ion-icon {
  font-size: 2rem;
  color: #222224;
}

.slider-controler .slider-arrow::after {
  content: '';
}

.swiper-pagination {
  position: relative;
  width: 15rem !important;
  bottom: 1rem;
}

.swiper-pagination .swiper-pagination-bullet {
  filter: drop-shadow(0px 8px 24px rgba(18, 28, 53, 0.1));
}

.swiper-pagination .swiper-pagination-bullet-active {
  background: var(--primary);
}

.overlay {
  position: absolute;
  top: 0px;
  // background: rgb(0, 0, 0);
  background: rgba(0, 0, 0, 0.5); /* Black see-through */
  color: #fff;
  // border: 5px solid white;
  width: 95%;
  padding: 20px;
  transition: 0.5s ease;
  opacity: 0;
  font-size: 30px;
  text-align: center;
  border-radius: 2rem 2rem 0 0;
}

 .slider-img:hover .overlay {
  opacity: 1;
}

`;

function Slider1() {
  return (
    <>

    <Styles>
    <div className="container">
      <h1 className="heading">Whats New?</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide className='slider-list'> 
        <div className='slider-img'>
          <img src={img1} alt="slide_image" />
          <div className='overlay'>
          <div className="stitle">Flight Simulator</div>
          </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-img'>
          <img src={img2} alt="slide_image" />
          <div className='overlay'>
          <div className="stitle">Onsite Installtion & Commissioning</div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-img'>
          <img src={img3} alt="slide_image" />
          <div className='overlay'>
          <div className="stitle">Onboard Connectorisation</div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-img'>
          <img src={img4} alt="slide_image" />
          <div className='overlay'>
          <div className="stitle">Make in India</div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-img'>
          <img src={img5} alt="slide_image" />
          <div className='overlay'>
          <div className="stitle">Customised Cable Assemblies</div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-img'>
          <img src={img6} alt="slide_image" />
          <div className='overlay'>
          <div className="stitle">Virtual Reality</div>
        </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='slider-img'>
          <img src={img1} alt="slide_image" />
          <div className='overlay'>
          <div className="stitle">Test Jig</div>
        </div>
        </div>
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </div>
    </Styles>
    </>
  );
}

export default Slider1;