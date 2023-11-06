import React from 'react'
import {MdCall} from "react-icons/md"
import {FaWhatsapp} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import "./contact.css"

const Contact = () => {
  return (
   <section className="c-wrapper">
        <div className="paddings innerWidth c-container">

            {/*right side */}
            <div className="flexColStart">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Just a Click Away!</span>

                    <div className="flexColStart contactModes"> 

                    <div className="flexStart row">
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className='secondaryText'>555 555 555</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Call Now</div>
                        </div>

                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaWhatsapp size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">WhatsApp</span>
                                    <span className='secondaryText'>555 555 555</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Chat Now</div>
                        </div>

                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaFacebookF size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Facebook</span>
                                    <span className='secondaryText'>@wingspotmarkham</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Follow and DM Now</div>
                        </div>

                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaInstagram size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Instagram</span>
                                    <span className='secondaryText'>@wingspotmarkham</span>
                                </div>
                            </div>
                            <div className="flexCenter button">Follow and DM Now</div>
                        </div>
                        
                    </div>
                </div>
            </div>

        </div>
   </section>
  )
}

export default Contact