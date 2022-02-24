import React  from 'react';
import { Link } from 'react-router-dom'
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';



const SliderStyle4 = () => {

    
    return (
        <div>
            <section className="flat-title-page style3 mainslider">
            <img className="bgr-gradient" style={{zIndex: 0, opacity: "0.5", position: "absolute", top: 0, width: "100%", height: "100%"}} src={"https://cdn.discordapp.com/attachments/941089458399359027/946244472872779776/kyoudai_bg.gif"} />
                <div className="overlay"></div>
                <div className="themesflat-container " style={{zIndex: 2}} >
                        <div className="wrap-heading flat-slider flex">
                            <div className="content">
                                <h2 className="heading mt-15">Games of the past
                                </h2>	
                                <h1 className="heading mb-style"><span className="tf-text s1">inside the metaverse</span>                                          
                                </h1>
                                <p className="sub-heading mt-19 mb-40">Bridging the arcade game experience with  <img style={{width:"120px"}} src="https://www.dexlab.space/img/solana_color.png"/>
                                </p>
                                 <div className="flat-bt-slider flex style2">
                                    <Link to="/" className="sc-button style style-3 rocket fl-button pri-1"><span>Play
                                    </span></Link>
                                    <Link to="/" className="sc-button style style-3 note fl-button pri-1"><span>Buy on magiceden
                                    </span></Link>
                                </div> 
                            </div>
                           
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={50}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 1,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                speed= {3000}
                            >
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}} src={"https://media.discordapp.net/attachments/941089458399359027/943547326662840410/FLuwkhDXwAE6hXN.png?width=250&height=250"} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}} src={"https://media.discordapp.net/attachments/942806285257150566/943871722627661834/demo_2.gif?width=250&height=250"} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}} src={"https://media.discordapp.net/attachments/941089458399359027/946144051898511380/frozen_zombie_viking.gif?width=250&height=250"} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}}src={"https://media.discordapp.net/attachments/942806285257150566/943871722627661834/demo_2.gif?width=250&height=250"} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}} src={"https://media.discordapp.net/attachments/941089458399359027/946144052305354793/astrokyou.gif?width=250&height=250"} alt="Axies" /></SwiperSlide>

                            </Swiper>
                            <Swiper
                                modules={[ Autoplay ]}
                                direction={"vertical"}
                                spaceBetween={50}
                                slidesPerView={5}
                                loop
                                autoplay={{
                                    delay: 2,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: false,
                                }}
                                speed= {3000}
                            >
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}} src={"https://media.discordapp.net/attachments/941089458399359027/946144051898511380/frozen_zombie_viking.gif?width=250&height=250"} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}}src={"https://media.discordapp.net/attachments/942806285257150566/943871722627661834/demo_2.gif?width=250&height=250"} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}} src={"https://media.discordapp.net/attachments/941089458399359027/946144052305354793/astrokyou.gif?width=250&height=250"} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}} src={"https://media.discordapp.net/attachments/941089458399359027/943547326662840410/FLuwkhDXwAE6hXN.png?width=250&height=250"} alt="Axies" /></SwiperSlide>
                                <SwiperSlide><img style={{borderRadius: "15px", opacity: "0.8"}} src={"https://media.discordapp.net/attachments/942806285257150566/943871722627661834/demo_2.gif?width=250&height=250"} alt="Axies" /></SwiperSlide>
                                
                            </Swiper>
                        </div>
                        
                    </div>
            </section>
        </div>
    );
}


export default SliderStyle4;
