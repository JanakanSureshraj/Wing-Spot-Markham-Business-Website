import React, { useCallback, useState } from "react"
import "./header.css"

const Header = () => {

    return(
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">
                <a href="">
                    <img src="./logo.jpg" alt="logo" width={55}/>
                </a>
                
                <div className="flexCenter h-menu"> 
                        <a href="">Home</a>                       
                        <a href="">Menu</a>
                        <a href="">Contact</a>
                </div>    
            </div>
        </section>
    )
}

export default Header