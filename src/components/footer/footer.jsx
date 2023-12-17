import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="padding innerWidth flexCenter f-container">
            {/*left side */}
            <div className="flexColStart f-left">
                <a id="flogo" href="">
                    <img src="./logo.jpg" alt="logo" width={60}/>
                </a>
                <span className="secondaryText">
                    Where Wings Meet Flavors
                </span>
            </div>
            <div className="flexColStart f-right">
                <div className="flexCenter f-menu">        
                    <span id="list">DINE-IN</span>
                    <span id="list">TAKEOUT</span>
                    <span id="list">SUN TO WED: 12PM-10PM</span>
                    <span id="list">THUR TO SAT: 12PM-12AM </span>
                </div>
            </div> 
        </div>
    </section>
  )
}
export default Footer