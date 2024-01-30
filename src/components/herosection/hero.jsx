import React from "react";
import CountUp from "react-countup";
import {color, motion} from "framer-motion"
import "./hero.css"

const Hero= () => {
    
    return(
        <section className="hero-wrapper">
            <div className="paddings innerWidth flexCenter hero-container">
                
                {/*left side*/}
                
                <div className="flexColStart hero-left">

                <div className="hero-title">
                        <motion.h1  
                        initial = {{y: "2rem", opacity:0}}
                        animate = {{y: 0, opacity:1}}
                        transition = {{
                            duration: 2, 
                            type: "spring"
                        }}
                        >
                            THE WING SPOT<br></br> <span class="highlight">MARKHAM</span>
                        </motion.h1>
                </div>

                    <div className="flexColStart hero-des">
                        <span className="tagLine">Chicken wings and fries tossed and topped with your favourite flavours.<br></br> Now offering daily and special deals!</span>
                        <span className="tertiaryText">Pickup:  5694 Highway 7 #5, Markham, ON L3P 1B4</span>
                        <button className="button">
                                <a className="call" href="tel:905-471-1191">Call 905-471-1191</a>
                        </button>
                        <br/>
                        <button className="button">
                                <a className="call" href="https://gosnappy.io/owa/snappy/detail/G9623/9623/m/menu_440">Order Online</a>
                        </button>
                    </div>
                    <div className="flexCenter stats">
                        <div className="flexColStart stat">
                            <span>
                                <CountUp start={25} end={120} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="tertiaryText">Delicate Flavours</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp start={1930} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className="tertiaryText">Happy Customers</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span>
                                <CountUp end={50}/>
                                <span>+</span>
                            </span>
                            <span className="tertiaryText">Orders Every Day</span>
                        </div>
                    </div>
                </div>
                

                {/*right side*/}

                <div className="flexCenter hero-right">
                    <motion.div 
                    className="image-container"
                    initial = {{x: "7rem", opacity: 0}}
                    animate = {{x:0, opacity:1}}
                    transition = {{
                        duration: 5, 
                        type: "spring"
                    }}
                    >
                        <img src="./bg4.jpg" alt="" />
                    </motion.div>
                </div>
            </div>
            
        </section>
    )
}

export default Hero;