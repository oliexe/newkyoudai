import React, { useState } from 'react';
import HeaderStyle2 from '../components/header/HeaderStyle2';
import Footer from '../components/footer/Footer';
import SliderStyle4 from '../components/slider/SliderStyle4';
import { Accordion } from 'react-bootstrap-accordion'

import img1 from '../assets/images/icon/connect-1.png'
import img2 from '../assets/images/icon/connect-2.png'
import img3 from '../assets/images/icon/connect-3.png'
import img4 from '../assets/images/icon/connect-4.png'
import img5 from '../assets/images/icon/connect-5.png'
import img6 from '../assets/images/icon/connect-6.png'
import img7 from '../assets/images/icon/connect-7.png'
import img8 from '../assets/images/icon/connect-8.png'



const Home01 = () => {

    const [roadmap] = useState(
        [
            {
                done: true,
                img: img1,
                title: 'Genesis mint',
                description: 'The first collection of 888 NFTs were minted. We deployed the first working game called Solatris before even minting & part of the proceedes were given back to the community.'
            },
            {
                done: true,
                img: img2,
                title: 'First Game Tournament',
                description: 'Kyoudai held the first game tournament on blockchain in game "Solatris" giving away over 30 SOL to best players and splitting 20 SOL to Kyoudai NFT holders.'
            },
            {
                done: true,
                img: img3,
                title: 'Art & Tech Upgrade',
                description: 'Full Kyoudai NFT collection art redrawn by a professional artist and technical overhaul of the complete application was done to guide the project into the new direction.'
            },
            {
                done: false,
                img: img4,
                title: 'Public game tournaments',
                description: 'Kyoudai P2E game tournaments will be held on weekly basis, open for public and weekly royalities from the games will be split to NFT holders.'
            },
            {
                done: false,
                img: img5,
                title: 'Mint of Kyouverse',
                description: 'Minting of 3550 characters that can be used as a character in the upcoming sandbox connecting our separate games together in the metaverse. Genesis NFT holder gets free character and recieves royalities from the mint.'
            },
            {
                done: false,
                img: img6,
                title: 'Inviting builders in',
                description: 'Releasing out Javascript game boilerplate and API for other developers, enabling everybody to develop other games that can be connected to the Kyouverse.'
            },
            {
                done: false,
                img: img7,
                title: 'Kyouverse opening',
                description: 'Releasing Kyouverse - a in-browser sandbox game connecting all of our separate P2E games together. Come build, chat and play with the community in the interactive 2D world crafted by professional artist.'
            },
            {
                done: false,
                img: img8,
                title: 'The future...',
                description: 'Constantly developing and improving Kyoudai metaverse platform, adding new games, getting developers onboard, growing number of players and working friendly community.'
            },

        ])


    const [data] = useState(
        [
            {
                key: "0",
                show: "show",
                title: 'What is an NFT?',
                text: 'NFTs or non-fungible tokens, are cryptographic assets on blockchain with unique identification codes and metadata that distinguish them from each other. NFTs are unique and not mutually interchangeable, which means no two NFTs are the same.'
            },
            {
                key: "1",
                title: 'Customer support is available ?',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
            },
            {
                key: "2",
                title: 'How do I find my transaction hash?',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
            },
            {
                key: "3",
                title: 'What are gas fees on Axies?',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
            },
            {
                key: "4",
                title: 'What is the effective staking amount?',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.'
            },
        ]
    )
    return (
        <div className='home-7'>
            <HeaderStyle2 />
            <SliderStyle4 />


            <section className="tf-section wrap-accordion">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h2 className="tf-title-heading ct style-2 fs-30 mg-bt-10">
                                Frequently Asked Questions
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="flat-accordion2">
                                {
                                    data.map((item, index) => (

                                        <Accordion key={index} title={item.title} >
                                            <p>{item.text}</p>
                                        </Accordion>



                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div className="tf-connect-wallet tf-section">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-12">
                            <h2 className="tf-title-heading ct style-2 mg-bt-12">
                                Roadmap
                            </h2>
                            <h5 className="sub-title ct style-1 pad-400">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste ipsum officiis deleniti asperiores sit.
                            </h5>
                        </div>
                        <div className="col-md-12">
                            <div className="sc-box-icon-inner style-2">
                                {
                                    roadmap.map((item, index) => (
                                        <div key={index} className="sc-box-icon" style={item.done ? {backgroundColor: "rgb(147 255 47 / 17%)"} : {}}>
                                            {/* <div className="img">
                                                <img src={item.img} alt="Axies" />
                                            </div> */}
                                            <h4 className="heading">{item.title}</h4>
                                            <p className="content">{item.description}</p>
                                            {item.done &&
                                                <h2 className="content">
                                                   <img src=""/>
                                                </h2>
                                            }
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Home01;
