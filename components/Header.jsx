import React from 'react'
import Image from 'next/image'
import { logos } from '../utils/images.json'



const Header = () => {
    return (
            <header id="header-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand mr-4" href="index.php">
                                    <Image src={logos.whiteLogo.src}  width="0" height="0" sizes="100vw" className="whiteLogo w-full h-auto" alt='design-diverse-white-logo'/>
                                    <Image src={logos.blackLogo.src}  width="0" height="0" sizes="100vw" className="blackLogo w-full h-auto" alt='design-diverse-black-logo'/>
                                        </a>
                                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                            <span className="navbar-toggler-icon"></span>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                            <ul className="navbar-nav ml-auto">
                                                <li className="nav-item active">
                                                    <a className="nav-link" href="index.php">Home <span className="sr-only">(current)</span>
                                                    </a>
                                                </li>
                                                <li className="nav-item dropdown">
                                                    <a className="nav-link dropdown-toggle" href="services.php" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Services </a>
                                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div className="dropServ">
                                                                    <a href="custom-website-development.php">
                                                                        <div className="dropImg">
                                                                            <img src="images/website-development.svg" className="img-fluid lazy" alt="website-development"/>
                                                                        </div>
                                                                        <div className="dropTitle">
                                                                            <h4>Website Development</h4>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="dropServList">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#"> Wordpress Development </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> PHP Development </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Front End Development </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> View More </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="dropServ dropServ2">
                                                                    <a href="ecommerce-solutions.php">
                                                                        <div className="dropImg">
                                                                            <img src="images/ecommerce.svg" className="img-fluid lazy" alt="website-development"/>
                                                                        </div>
                                                                        <div className="dropTitle">
                                                                            <h4>Ecommerce Solutions</h4>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="dropServList">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#"> Shopify </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Opencart </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Magento </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> woocommerce </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="dropServ dropServ2">
                                                                    <a href="custom-logo-design.php">
                                                                        <div className="dropImg">
                                                                            <img src="images/animation.svg" className="img-fluid lazy" alt="website-development"/>
                                                                        </div>
                                                                        <div className="dropTitle">
                                                                            <h4>Logo Design</h4>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="dropServList">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#"> Custom Logo Design </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Logo Design Revamp </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> 2D 3D Logo Design </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Logo Animation </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="dropServ dropServ2">
                                                                    <a href="web-app-development.php">
                                                                        <div className="dropImg">
                                                                            <img src="images/web-application.svg" className="img-fluid lazy" alt="website-development"/>
                                                                        </div>
                                                                        <div className="dropTitle">
                                                                            <h4>Web Application</h4>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="dropServList">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#"> Custom Software Development </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> PHP Development </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Node js Development </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Laravel Development </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="dropServ dropServ2 mt-4">
                                                                    <a href="mobile-app-development.php">
                                                                        <div className="dropImg">
                                                                            <img src="images/mobile-application.svg" className="img-fluid lazy" alt="website-development"/>
                                                                        </div>
                                                                        <div className="dropTitle">
                                                                            <h4>Mobile Application</h4>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="dropServList">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#"> iOS Development </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Game Development </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Android Development </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> AR/VR App Development </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="dropServ dropServ2 mt-4">
                                                                    <a href="video-animation.php">
                                                                        <div className="dropImg">
                                                                            <img src="images/animation.svg" className="img-fluid lazy" alt="website-development"/>
                                                                        </div>
                                                                        <div className="dropTitle">
                                                                            <h4>Video Animations</h4>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="dropServList">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#"> Explainer Video Animation </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Animated Title & Trailer </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Animated Video Ad </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Marketing/Promo Video Animation </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="dropServ dropServ2 mt-4">
                                                                    <a href="brand-design-prototype.php">
                                                                        <div className="dropImg">
                                                                            <img src="images/branding.svg" className="img-fluid lazy" alt="website-development"/>
                                                                        </div>
                                                                        <div className="dropTitle">
                                                                            <h4>Branding</h4>
                                                                        </div>
                                                                    </a>
                                                                </div>
                                                                <div className="dropServList">
                                                                    <ul>
                                                                        <li>
                                                                            <a href="#"> Brand Identity </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Website Design </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> UX & UI Design </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="#"> Interactive Prototypes </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="portfolio.php">Portfolio</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="packages.php">Packages</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="about.php">About</a>
                                                </li>
                                                <li className="nav-item">
                                                    <a className="nav-link" href="contact.php">Contact</a>
                                                </li>
                                            </ul>
                                            <div className="form-inline my-2 my-lg-0">
                                                <a href="tel:+18888350266" className="number mr-2"> +1 (888) 835 0266 </a>
                                                <a href="get-a-free-qoute.php" className="firstBtn firstBtn1"> get a qoute </a>
                                                <a href="https://designcrm.net/ " className="myAccBtn"> My Account </a>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                        </div>
                    </div>
            </header>
            

    );
}

export default Header;
