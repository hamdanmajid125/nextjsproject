import React from 'react'

const Footer = () => {
    return (
        <footer className="MainFooter">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="Quicklinkheading-1">
                            <div className="footer-logo">
                                <a href="index.php">
                                    <img src="images/blackLogo.png" alt="blackLogo" />
                                </a>
                            </div>
                            <p>
                                Offering digital services to a diverse range of audiences to make
                                them flourish and reach the height of success they deserve.
                            </p>
                            <div className="FooterIcons">
                                <a href="#">
                                    <i className="fab fa-youtube" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-linkedin" />
                                </a>
                                <a href="#">
                                    <i className="fab fa-instagram" />
                                </a>
                                <a href="#">
                                    <i className="fa-brands fa-facebook" />
                                </a>
                            </div>
                            <div className="mt-4">
                                <img src="images/payment.png" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="Quicklinkheading">
                            <h5>QUICK LINKS</h5>
                            <ul>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="contact.php">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="Quicklinkheading">
                            <h5>CUSTOMER AREA</h5>
                            <ul>
                                <li>
                                    <a href="#">My Account</a>
                                </li>
                                <li>
                                    <a href="terms.php">Terms</a>
                                </li>
                                <li>
                                    <a href="privacy-policy.php">Privacy Policy</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="Quicklinkheading">
                            <h5>Contact</h5>
                            <p className="para">
                                Feel free to reach out, as we cater to clients from all over the
                                globe.
                            </p>
                            <div className="contactTop">
                                <div className="anyQuestion">
                                    <div className="headphonesIcon mr-3">
                                        <i className="fa-solid fa-headphones" />
                                    </div>
                                    <div className="headphonesIcon2">
                                        <a href="tel:+18888350266">
                                            <p>
                                                Have any question?{" "}
                                                <span className="d-block">+1 (888) 835 0266 </span>
                                            </p>
                                        </a>
                                    </div>
                                </div>
                                <div className="contactBtnDiv">
                                    <a href="#" className="contactBtn">
                                        live chat
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer