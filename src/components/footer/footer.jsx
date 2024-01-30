import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="padding innerWidth flexCenter f-container">
            {/*left side */}
            <div className="flexColStart f-left">
                <a id="flogo" href="">
                    <img src="./name.png" alt="logo" width={200}/>
                </a>
            </div>
            <div className="flexColStart f-right">
                <div className="flexCenter f-menu">        
                    <span id="list">SUN TO WED: 12PM-10PM</span>
                    <span id="list">THUR TO SAT: 12PM-12AM </span>
                </div>
            </div> 
        </div>
    </section>
  )
}
export default Footer