import React from 'react';
import './Testimonials.css';
import { Data } from './Data';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Pagination } from "swiper";

const Testimonials = () => {
    return (
        <section className="testimonial container section">
            <h2 className="section__title">My Client Say</h2>
            <span className="section__subtitle">Testimonials</span>

            <Swiper pagination={true} grabCursor={true} loop={true} breakpoints={{ 576: { slidesPerView: 2 }, 768: { slidesPerView: 2, spaceBetween: 48 }, }} modules={[Pagination]} className="mySwiper testimonial__container">
                {Data.map(({ id, image, title, description }) => {
                    return (
                        <SwiperSlide className="testimonial__card" key={id}>
                            <img src={image} alt="" className='testimonial__img' />
                            <h3 className="testimonial__name">{title}</h3>
                            <p className="testimonial__description">{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    );
};

export default Testimonials;