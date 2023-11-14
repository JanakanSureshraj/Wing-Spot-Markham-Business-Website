import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from "swiper/react"
import {sliderSettings} from '../../utils/common'
import "swiper/css"
import "./residencies.css"
import data from "../../utils/menu.json" 

const Residencies = () => {
  return (
    <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="flexColStart">
                <span className="orangeText">Popular From Our Menu</span>
                <span className="primaryText">Wings, Fries and More</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {
                    data.map((card, i) => (
                        <SwiperSlide key={i}>
                            <div className="flexColStart r-card">
                                <img src={card.image} alt="home" />
                                <span className='secondaryText r-price'> 
                                    <span style={{fontSize: "1rem"}}>Starting From </span><span style={{color: "red"}}>$</span><span>{card.price}</span>
                                </span>
                                <span className="primaryText">{card.name}</span>
                                <span style={{fontSize: "0.8rem"}} className='secondaryText'>{card.detail}</span>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies

const SliderButtons = () =>{
    const swiper = useSwiper();
    return(
        <div className="flexCenter r-buttons">
            <button onClick={()=>swiper.slidePrev()}>&lt;</button>
            <button onClick={()=>swiper.slideNext()}>&gt;</button>
        </div>
    )  
}