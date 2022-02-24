import React , { useRef , useState , useEffect } from 'react';
import { Link , useLocation } from "react-router-dom";
import menus from "../../pages/menu";
import DarkMode from './DarkMode';
import logodark from '../../assets/images/logo/logo_dark.png'
import avt from '../../assets/images/avatar/avt-2.jpg'
import coin from '../../assets/images/logo/coin.svg'

import {
    WalletModalProvider,
    WalletDisconnectButton,
    WalletMultiButton
} from '@solana/wallet-adapter-react-ui';


const HeaderStyle2 = () => {
    const { pathname } = useLocation();

    const headerRef = useRef (null)
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.js-header');
        const scrollTop = window.scrollY;
        scrollTop >= 300 ? header.classList.add('is-fixed') : header.classList.remove('is-fixed');
        scrollTop >= 400 ? header.classList.add('is-small') : header.classList.remove('is-small');
    };

    const menuLeft = useRef(null)
    const btnToggle = useRef(null)

    const menuToggle = () => {
        menuLeft.current.classList.toggle('active');
        btnToggle.current.classList.toggle('active');
    }


    const [activeIndex, setActiveIndex] = useState(null);
    const handleOnClick = index => {
        setActiveIndex(index); 
    };

    const socialList = [
        {
            icon: "fab fa-twitter",
            link: "#"
        },
        {
            icon: "fab fa-facebook",
            link: "#"
        },
        {
            icon: "fab fa-telegram-plane",
            link: "#"
        },
        {
            icon: "fab fa-youtube",
            link: "#"
        },
        {
            icon: "icon-fl-tik-tok-2",
            link: "#"
        },
        {
            icon: "icon-fl-vt",
            link: "#"
        },
        

    ]

    return (
        <header id="header_main" className="header_1 header_2 style2 js-header" ref={headerRef}>
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">                              
                        <div id="site-header-inner"> 
                            <div className="wrap-box flex">
                                <div id="site-logo" className="clearfix">
                                    <div id="site-logo-inner">
                                        <Link to="/" rel="home" className="main-logo">
                                            <img id="logo_header" src={"https://media.discordapp.net/attachments/941089458399359027/946168086095073340/Kyoudai_Logo.png"} alt="nft-gaming" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="mobile-button" ref={btnToggle} onClick={menuToggle}><span></span></div>
                               
                                

                                <nav id="main-nav" className="main-nav" ref={menuLeft} >


                                    <ul id="menu-primary-menu" className="menu">
                                        {
                                            menus.map((data,index) => (
                                                <li key={index} onClick={()=> handleOnClick(index)} className={`menu-item ${data.namesub ? 'menu-item-has-children' : '' } ${activeIndex === index ? 'active' : ''} ` }   >
                                                    <Link to="#">{data.name}</Link>
                                                    {
                                                        data.namesub &&
                                                        <ul className="sub-menu" >
                                                        {
                                                            data.namesub.map((submenu) => (
                                                                <li key={submenu.id} className={
                                                                    pathname === submenu.links
                                                                      ? "menu-item current-item"
                                                                      : "menu-item"
                                                                  }><Link to={submenu.links}>{submenu.sub}</Link></li>
                                                            ))
                                                        }
                                                    </ul>
                                                    }
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </nav>
                                <div className="flat-search-btn flex">
                                    <div className="sc-btn-top mg-r-12" id="site-header">
                                    <WalletMultiButton />
                                    </div>                          
                                </div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <DarkMode />
        </header>
    );
}

export default HeaderStyle2;
