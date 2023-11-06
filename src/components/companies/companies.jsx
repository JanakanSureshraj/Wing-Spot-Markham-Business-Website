import React from 'react'
import "./companies.css"

const Companies = () => {
  return (
    <section className="c-wrapper">

<section className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="flexColStart">
                <span className="orangeText">Accepting Orders Until 12 AM</span>
                <span className="primaryText">Find Us On</span>
            </div>
        </div>
    </section>
        <div className="paddings innerWidth flexCenter c-container">
            <img src="./company1.png" alt="" />
            <img src="./company2.png" alt="" />
            <img src="./company3.png" alt="" />

        </div>
    </section>
  )
}

export default Companies