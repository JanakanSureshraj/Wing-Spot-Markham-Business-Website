import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section className="f-wrapper">
        <div className="padding innerWidth flexCenter f-container">
            {/*left side */}
            <div className="flexColStart f-left">
                <a href="">
                    <img src="./logo.jpg" alt="logo" width={60}/>
                </a>
                <span className="secondaryText">
                    Where Wings Meet Flavors
                </span>
            </div>
            <div className="flexColStart f-right">
                <div className="flexCenter f-menu">
                    <span>DINE-IN</span>
                    <span>TAKEOUT</span>
                    <span>12PM-12AM</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer