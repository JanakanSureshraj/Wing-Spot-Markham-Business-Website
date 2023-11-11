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
            <a href="https://www.ubereats.com/ca/store/the-wing-spot-markham/HxV8xf9aWzamak8723kAwg?diningMode=PICKUP&pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjUxJTIwTWFzb24lMjBSZCUyMiUyQyUyMnJlZmVyZW5jZSUyMiUzQSUyMmQ5MWU4ZjY0LWY2Y2ItYmZmOS03ZjNhLWM4NDk3NzNhODk5OSUyMiUyQyUyMnJlZmVyZW5jZVR5cGUlMjIlM0ElMjJ1YmVyX3BsYWNlcyUyMiUyQyUyMmxhdGl0dWRlJTIyJTNBNDMuNzM3NzUyNSUyQyUyMmxvbmdpdHVkZSUyMiUzQS03OS4yMjMwNzY3JTdE&ps=1">
                <img id="companies" src="./company1.png" alt="" />
            </a>
            <a href="https://www.doordash.com/en-CA/store/the-wing-spot-markham-24396881/">
                <img id="companies" src="./company2.png" alt="" />
            </a>
            <a href="https://www.skipthedishes.com/the-wing-spot-5694">
                <img id="companies" src="./company3.png" alt="" />
            </a>
        

        </div>
    </section>
  )
}

export default Companies