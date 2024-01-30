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
                        <a href="https://gosnappy.io/owa/snappy/detail/G9623/9623/">Menu</a>
                        <span> 
                        <a>
                            <img src="./halal.jpg" alt="logo" width={55}/>
                        </a>
                    </span>  
                </div>    
            </div>
        </section>
    )
}

export default Header