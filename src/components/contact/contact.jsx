import React from 'react'
import {MdCall} from "react-icons/md"
import {BsFillChatDotsFill} from "react-icons/bs"
import {FaWhatsapp} from "react-icons/fa"
import {FaFacebookF} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
import "./contact.css" 

const Contact = () => {
  return (
   <section className="c-wrapper">
        <div className="paddings innerWidth flexCen c-container">
            {/*left side */}
            <div className="flexColStart c-left">
                <span className='orangeText'>Our Contact</span>
                <span className='primaryText'>Just a Click Away</span>

                <div className="map">   
                    <iframe 
                    id="map" 
                    width="180%" 
                    height="200" 
                    frameborder="0"  
                    marginheight="0" 
                    marginwidth="0" 
                    src="https://maps.google.com/maps?width=500&amp;height=400&amp;hl=en&amp;q=TheWingSpot-Markham(Markham)&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    style={{ position: "relative"}}
                    ></iframe>
                </div>
                
            </div>

            {/*right side */}
            <div className="flexColStart contactModes">

                    {/*first row */}
                    <div className="flexStart row">
                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <MdCall size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Call</span>
                                    <span className='secondaryText'>905-471-1191</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href="tel:905-471-1191">Call Now</a></div>
                        </div>

                        <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaWhatsapp size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">TikTok</span>
                                    <span className='secondaryText'>@thewingspotmarkha</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href="https://www.tiktok.com/@thewingspotmarkha?lang=bn-IN" target="blank">Follow Now</a></div>
                        </div>
                    </div>

                    {/*second row */}
                    <div className="flexStart row">
                    <div className="flexColStart mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <FaFacebookF size={25}/>
                                </div>
                                <div className="flexColStart detail">
                                    <span className="primaryText">Facebook</span>
                                    <span className='secondaryText'>@The Wing Spot Markham</span>
                                </div>
                            </div>
                            <div className="flexCenter button"><a href="https://www.facebook.com/profile.php?id=61551869247220&mibextid=LQQJ4d" target="blank">Follow Now</a></div>
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
                            <div className="flexCenter button"><a href="https://instagram.com/wingspotmarkham?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" target="blank">Follow Now</a></div>
                        </div>          
                                     
                    </div>
                </div>

        </div>
   </section>
  )
}

export default Contact