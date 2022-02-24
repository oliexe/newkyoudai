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
                title: 'Kyoudai API',
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
                title: 'Why should I own Kyoudai NFT ?',
                text: 'Owners of one of the 888 genesis NFT gets royalities from all the game tournaments inside the Kyouverse. Every game credit is 0.09 SOL (30% goes to “House Wallet” / 70% to “Bank”) “Bank” is split to the best players and “House wallet” is then divided to the NFT holders. You can always buy Kyoudai NFT second-hand on Magiceden marketplace.'
            },
            {
                key: "1",
                title: 'Do you have any working product ?',
                text: 'Of course, we have deployed our first game even before the NFT mint - The Solatris. You can join the tournament and compete in the leaderboards or train the game for free anytime you want. Every game can be played separately and later will be implemened directly into the Kyouverse.'
            },
            {
                key: "2",
                title: 'What is the Kyouverse ?',
                text: 'Kyouverse is an upcoming metaverse arcade with rich 2D fantasy world and basic RPG elements inspired by classic JRPG titles. Every character in the Kyouverse will be one of 3550 handcrafted NFT. You can use your NFT to join the Kyouverse, chat with other players and develop your character by playing the games and take part of events and community quests.'
            },
            {
                key: "3",
                title: 'Will there be more games in the future ?',
                text: 'Many more classic games will be developed and added to Kyouverse in the future by our team. We will also be open-sourcing our Javascript game API and inviting third party developers to deploy their own games for Kyouverse. We will support Phaser game engine as the preffered base for each game.'
            }
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
                                Beloved arcade classics in the era of Web3.
                            </h2>
                            <h5 className="sub-title help-center mg-bt-32 ">
                                Play tournaments in classic videogame titles to win SOL from the prize pool, train games for free, chat with friends or even develop and deploy games in <b>Kyouverse</b> - an upcoming online 2D sandbox with RPG elements.
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
                                Development roadmap
                            </h2>
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

            {/* <Footer /> */}
        </div>
    );
}

export default Home01;
