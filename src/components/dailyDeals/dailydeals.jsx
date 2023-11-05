import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import {sliderSettings} from '../../utils/common'
import "swiper/css"
import "./dailydeals.css"
import data from "../../utils/dailydeals.json" 

const Dailydeals = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className="orangeText">Daily Specials</span>
                <span className="primaryText">Any Day, Wing Spot Day!</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />
                                <span className='secondaryText r-price'>
                                    <span style={{color: "orange"}}>$</span><span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span className="secondaryText">{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Dailydeals

const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )  
}