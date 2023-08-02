import Head from 'next/head';
import Image from 'next/image'
import SideInquiryForm from '../components/global/SideInquiryForm';
import SocialIcons from '../components/global/SocialIcons'
import { home } from '../utils/images.json'
import FancyBox from '../components/fancybox/FancyBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

import dynamic from 'next/dynamic';




export default function Home() {

  const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
  });
  return (
    <>
      <Head>
        <title>Design Diverse</title>
        <link rel="icon" href="/favicon.ico" />


      </Head>
      <SideInquiryForm />
      <SocialIcons />

      <section style={{ marginTop: "500px" }}></section>
      <section className="form-section">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <form method="POST" className="form_submission" noValidate="novalidate">
                {/* Custom Fields */}
                <input
                  type="hidden"
                  name="url"
                  defaultValue="https://designdiverse.com/"
                />
                <input type="hidden" name="domain" defaultValue="designdiverse.com" />
                <input
                  type="hidden"
                  name="subject"
                  defaultValue="Banner Form (designdiverse.com)"
                />
                <div className="form-group">
                  <input type="text" placeholder="Name" name="cn" />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email" name="em" />
                </div>
                <div className="form-group">
                  <input type="number" placeholder="Phone Number" name="pn" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Message" name="msg" />
                </div>
                <div className="form-sec-btn">
                  <button type="submit" className="firstBtn">
                    Submit
                  </button>
                </div>
                <div className="col-md-12 col-xs-12">
                  <div
                    className="error mt-3 alert alert-danger text-left mb-0"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="success mt-3 alert alert-success text-center mb-0 p-2 thankMesg"
                    style={{ display: "none" }}
                  />
                  <div className="loader" style={{ display: "none" }}>
                    <Image src={home.loader.src} alt='loader' width={60} height={0} className='h-auto' />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-12">
              <div
                className="section-2-content mt-5 aos-init"
                data-aos="fade-down"
                data-aos-duration={1000}
              >
                <h1>
                  Hell<span className="o-yellow">o</span>{" "}
                  <span className="d-block">
                    Pe<span className="o-yellow-color">o</span>ple
                  </span>
                </h1>
                <p className="para">
                  Welcome to Design Diverse, where diversity is at the forefront of
                  everything we do. We understand that having a digital platform that
                  precisely&nbsp;reflects your business, organization, or brand is
                  more important in today's digital world.&nbsp; That's why we're
                  dedicated to creating websites that are not only visually stunning
                  but also inclusive and representative of all individuals.
                </p>
                <p className="para">
                  Our team comprises individuals from diverse backgrounds, including
                  race, gender, sexual orientation, and ability. The team's wide range
                  of backgrounds and experiences enables us to approach each project
                  with fresh eyes and, we hope, results in websites more accurately
                  representative of the people they aim to serve.
                </p>
                <p className="para">
                  We specialize in cutting-edge web design &amp; development, web
                  applications, E-commerce solutions, digital marketing, branding,
                  video animation, and every digital service you could need for
                  businesses and organizations that are committed to diversity and
                  inclusion. We collaborate with businesses of all sizes to understand
                  their unique challenges and opportunities, then design a
                  website&nbsp;that effectively conveys their core beliefs and
                  mission.
                </p>
                <div className="firstBtnDiv">
                  <a href="get-a-free-qoute.php" className="firstBtn">
                    learn more
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 vectorImgRight col-12">
              <div className="vector-imgDiv">
                <Image src={home.about.src} width={578} height={860} alt='vectorimg' data-was-processed="true"></Image>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-12">
              <div className="small-div">
                <FancyBox src={home.portfolio[0]} fancy-class="text textXtra textXtra2" fancy-title="Without Colors" />
              </div>
              <div className="small-div">
                <FancyBox src={home.portfolio[1]} fancy-height="317px" fancy-image-class="smallTwo websitePort" fancy-class="text textXtra textXtra2" fancy-title="Atcos Staffing" />
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="small-div">
                <FancyBox src={home.portfolio[2]} fancy-image-class="only-big" fancy-class="text" fancy-title="Black &amp; Colors" />

              </div>
            </div>
            <div className="col-lg-2 col-12">
              <div className="small-div">
                <FancyBox src={home.portfolio[3]} fancy-image-class="only-bigXtra" fancy-class="text textXtra" fancy-title="Brochure" />

              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="small-div">
                <FancyBox src={home.portfolio[4]} fancy-image-class="five-gif" fancy-class="text textXtra textXtra2 textXtra3" fancy-title="The Oder Side Of The Moon" />
              </div>
              <div className="small-div">
                <FancyBox src={home.portfolio[5]} fancy-height="317px" fancy-image-class="five-gif" fancy-class="text textXtra" fancy-title="KIC" />

              </div>
            </div>
            <div className="col-lg-2 col-12">
              <div className="last_row">
                <div className="small-div">
                  <FancyBox src={home.portfolio[6]} fancy-image-class="smallSix" fancy-class="text textXtra textXtra2 textXtra4" fancy-title="The AG Store" />
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="last_row">
                <div className="small-div">
                  <FancyBox src={home.portfolio[7]} fancy-height="317px" fancy-image-class="five-gif websitePort" fancy-class="text" fancy-title="Signs Everywhere" />

                </div>
              </div>
            </div>
            <div className="col-lg-2 col-12">
              <div className="last_row">
                <div className="small-div">
                  <FancyBox src={home.portfolio[8]} fancy-image-class="smallNine" fancy-class="text textXtra textXtra7" fancy-title="High Hopes" />

                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="last_row">
                <div className="small-div">
                  <FancyBox src={home.portfolio[9]} fancy-height="318px" fancy-image-class="port10" fancy-class="text textXtra textXtra1 textXtra8" fancy-title="Musician Show" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="packages packagesXtra"
        style={{
          backgroundImage:
            'url("images/social-media-package-background.webp")'
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                className="packages-content aos-init"
                data-aos="fade-down"
                data-aos-duration={2000}
              >
                <h1 className="specialh1">Choose the Right Plan for your business</h1>
                <p>
                  Apart from our standard packages, we offer customized ones as well
                  to cater to your needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="packagesNav">
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                  <li className="nav-item">
                    <a
                      data-image="images/packages/background-01.webp"
                      className="nav-link"
                      id="pills-logo-design-tab"
                      data-toggle="pill"
                      href="#logo-design-tab"
                      role="tab"
                      aria-controls="logo-design-tab"
                      aria-selected="false"
                    >
                      Logo Design
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      data-image="images/packages/background-03.webp"
                      className="nav-link"
                      id="pills-website-design-development-tab"
                      data-toggle="pill"
                      href="#website-design-development-tab"
                      role="tab"
                      aria-controls="website-design-development-tab"
                      aria-selected="false"
                    >
                      Website Design
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      data-image="images/packages/background-02.webp"
                      className="nav-link   "
                      id="pills-ecommerce-solutions-tab"
                      data-toggle="pill"
                      href="#ecommerce-solutions-tab"
                      role="tab"
                      aria-controls="ecommerce-solutions-tab"
                      aria-selected="true"
                    >
                      E-Commerce Solution
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      data-image="images/packages/branding-package-background.webp"
                      className="nav-link   "
                      id="pills-branding-tab"
                      data-toggle="pill"
                      href="#branding-tab"
                      role="tab"
                      aria-controls="branding-tab"
                      aria-selected="true"
                    >
                      Branding
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      data-image="images/packages/video-package-background.webp"
                      className="nav-link   "
                      id="pills-video-animation-tab"
                      data-toggle="pill"
                      href="#video-animation-tab"
                      role="tab"
                      aria-controls="video-animation-tab"
                      aria-selected="true"
                    >
                      Video Animation
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      data-image="images/packages/seo-package-bg.webp"
                      className="nav-link   "
                      id="pills-search-engine-optimization-tab"
                      data-toggle="pill"
                      href="#search-engine-optimization-tab"
                      role="tab"
                      aria-controls="search-engine-optimization-tab"
                      aria-selected="true"
                    >
                      SEO
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      data-image="images/packages/web-content-package-bg.webp"
                      className="nav-link"
                      id="pills-web-content-writing-tab"
                      data-toggle="pill"
                      href="#web-content-writing-tab"
                      role="tab"
                      aria-controls="web-content-writing-tab"
                      aria-selected="false"
                    >
                      Web Content Writing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      data-image="images/packages/social-media-package-background.webp"
                      className="nav-link active show"
                      id="pills-social-media-marketing-tab"
                      data-toggle="pill"
                      href="#social-media-marketing-tab"
                      role="tab"
                      aria-controls="social-media-marketing-tab"
                      aria-selected="true"
                    >
                      Social Media Marketing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      data-image="images/packages/animated-logo-package-bg.webp"
                      className="nav-link   "
                      id="pills-animated-logo-tab"
                      data-toggle="pill"
                      href="#animated-logo-tab"
                      role="tab"
                      aria-controls="animated-logo-tab"
                      aria-selected="true"
                    >
                      Animated Logo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="tab-content mt-5" id="pills-tabContent">
              <div
                className="tab-pane fade"
                id="logo-design-tab"
                role="tabpanel"
                aria-labelledby="logo-design-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>Standard Logo Design </h3>
                        <span>$29 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=standard-logo-design&id=1">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>3 Custom Logo Design Concepts</li>
                          <li>1 Dedicated Designer</li>
                          <li>1 Revision</li>
                          <li>24 to 48 hours TAT</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>Money Back Guarantee</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>Plus Logo Design </h3>
                        <span>$45 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=plus-logo-design&id=2">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>5 Custom Logo Design Concepts</li>
                          <li>By 2 Designers</li>
                          <li>10 Revisions</li>
                          <li>48 to 72 hours TAT</li>
                          <li>
                            All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)
                          </li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>Money Back Guarantee</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage">
                        <p>Best Selling</p>
                      </div>
                      <div className="package-top">
                        <h3>Premium Logo Package </h3>
                        <span>$89 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=premium-logo-package&id=163">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>8 Custom Logo Design Concepts</li>
                          <li>By 3 Designers</li>
                          <li>UNLIMITED Revisions</li>
                          <li>
                            Stationary Design (Business Card, Letterhead, Envelope)
                          </li>
                          <li>FREE MS Word Letterhead</li>
                          <li>48 to 72 hours TAT</li>
                          <li>
                            All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)
                          </li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>Money Back Guarantee</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>Design Diverse Special Logo Package </h3>
                        <span>$120 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=design-diverse-special-logo-package&id=164">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>UNLIMITED Logo Design Concepts</li>
                          <li>By 5 Award Winning Designers</li>
                          <li>
                            Stationary Design (Business Card, Letterhead, Envelope)
                          </li>
                          <li>Icon Design</li>
                          <li>UNLIMITED Revisions</li>
                          <li>FREE MS Word Letterhead</li>
                          <li>Free Email Signature</li>
                          <li>
                            All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)
                          </li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>Money Back Guarantee</li>
                          <li>48 to 72 hours TAT</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>Infinity Combo Package </h3>
                        <span>$249 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=infinity-combo-package&id=165">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>UNLIMITED Logo Design Concepts</li>
                          <li>By 8 Award Winning Designers</li>
                          <li>Icon Design</li>
                          <li>UNLIMITED Revisions</li>
                          <li>Free Website Design</li>
                          <li>
                            Stationary Design Set (Business Card, Letterhead,
                            Envelope)
                          </li>
                          <li>FREE MS Word Letterhead</li>
                          <li>Free Email Signature</li>
                          <li>Free Website Design</li>
                          <li>3 Page Custom Website</li>
                          <li>2 Stock Photos</li>
                          <li>2 Banner Designs</li>
                          <li>jQuery Slider</li>
                          <li>
                            All Final Files Format (AI, PSD, EPS, PNG, GIF, JPG, PDF)
                          </li>
                          <li>100% Ownership Rights</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="website-design-development-tab"
                role="tabpanel"
                aria-labelledby="website-design-development-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          BASIC WEBSITE <br /> PACKAGE{" "}
                        </h3>
                        <span>$199 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=basic-website-package&id=7">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>2 Stock Images</li>
                          <li>3 Pages Website</li>
                          <li>1 jQuery Slider Banner</li>
                          <li>Contact/Query Form</li>
                          <li>Complete W3C Certified HTML</li>
                          <li>48 to 72 hours TAT</li>
                          <li>Complete Deployment</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          START UP WEBSITE
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$395 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=startup-website-package&id=8">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>5 Stock Photos</li>
                          <li>5 Pages Website</li>
                          <li>3 Banner Design</li>
                          <li>1 jQuery Slider Banner</li>
                          <li>FREE Google Friendly Sitemap</li>
                          <li>Complete W3C Certified HTML</li>
                          <li>48 to 72 hours TAT</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Money Back Guarantee *</li>
                          <li>Mobile Responsive will be Additional $200*</li>
                          <li>CMS will be Additional $250*</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage">
                        <p>Best Deal</p>
                      </div>
                      <div className="package-top">
                        <h3>
                          PROFESSIONAL WEBSITE <br /> PACKAGE{" "}
                        </h3>
                        <span>$844 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=professional-website-package&id=9">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>10 Unique Pages Website</li>
                          <li>CMS / Admin Panel Support</li>
                          <li>8 Stock images</li>
                          <li>5 Banner Designs</li>
                          <li>1 jQuery Slider Banner</li>
                          <li>FREE Google Friendly Sitemap</li>
                          <li>Complete W3C Certified HTML</li>
                          <li>48 to 72 hours TAT</li>
                          <li>Complete Deployment</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Money Back Guarantee *</li>
                          <li>Mobile Responsive will be Additional $200*</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          ELITE WEBSITE
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$1399 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=elite-website-package&id=44">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>Upto 15 Unique Pages Website</li>
                          <li>Conceptual and Dynamic Website</li>
                          <li>Mobile Responsive</li>
                          <li>Online Reservation/Appointment Tool (Optional)</li>
                          <li>Online Payment Integration (Optional)</li>
                          <li>Custom Forms</li>
                          <li>Lead Capturing Forms (Optional)</li>
                          <li>Striking Hover Effects</li>
                          <li>Newsletter Subscription (Optional)</li>
                          <li>Newsfeed Integration</li>
                          <li>Social Media Integration</li>
                          <li>Search Engine Submission</li>
                          <li>5 Stock Photos</li>
                          <li>3 Unique Banner Design</li>
                          <li>1 jQuery Slider Banner</li>
                          <li>Complete W3C Certified HTML</li>
                          <li>48 to 72 hours TAT</li>
                          <li>Complete Deployment</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          BUSINESS WEBSITE
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$2345 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=business-website-package&id=45">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>30 Seconds 2D Explainer Video</li>
                          <li>Voice - Over &amp; Sound Effects</li>
                          <li>Professional Script Writing</li>
                          <li>Storyboard</li>
                          <li>SEO Meta Tags</li>
                          <li>
                            Custom Made, Interactive, Dynamic &amp; High End Design
                          </li>
                          <li>Custom WP (or) Custom PHP Development</li>
                          <li>1 jQuery Slider Banner</li>
                          <li>Up to 10 Custom Made Banner Designs</li>
                          <li>10 Stock Images</li>
                          <li>Unlimited Revisions</li>
                          <li>Special Hoover Effects</li>
                          <li>Content Management System (CMS)</li>
                          <li>
                            Online Appointment/Scheduling/Online Ordering Integration
                            (Optional)
                          </li>
                          <li>Online Payment Integration (Optional)</li>
                          <li>Multi Lingual (Optional)</li>
                          <li>Custom Dynamic Forms (Optional)</li>
                          <li>Signup Area (For Newsletters, Offers etc.)</li>
                          <li>Search Bar</li>
                          <li>
                            Live Feeds of Social Networks Integration (Optional)
                          </li>
                          <li>Mobile Responsive</li>
                          <li>FREE 5 Years Domain Name</li>
                          <li>Free Google Friendly Sitemap</li>
                          <li>Search Engine Submission</li>
                          <li>Complete W3C Certified HTML</li>
                          <li>
                            Industry Specified Team of Expert Designers and Developers
                          </li>
                          <li>Complete Deployment</li>
                          <li>Dedicated Accounts Manager</li>
                          <li>100% Ownership Rights</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade  "
                id="ecommerce-solutions-tab"
                role="tabpanel"
                aria-labelledby="ecommerce-solutions-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          E-COMMERCE STARTUP
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$794 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=e-commerce-startup-package&id=14">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>Customized Design</li>
                          <li>Up-to 100 Products</li>
                          <li>Content Management System (CMS)</li>
                          <li>Mini Shopping Cart Integration</li>
                          <li>Payment Module Integration</li>
                          <li>Easy Product Search</li>
                          <li>Dedicated designer &amp; developer</li>
                          <li>Unlimited Revisions</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage">
                        <p>Best Selling</p>
                      </div>
                      <div className="package-top">
                        <h3>
                          PROFESSIONAL E-COMMERCE
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$1,394 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=professional-e-commerce-package&id=15">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>Customized Design</li>
                          <li>Up-to 500 Products</li>
                          <li>Content Management System (CMS)</li>
                          <li>Full Shopping Cart Integration</li>
                          <li>Payment Module Integration</li>
                          <li>Easy Product Search</li>
                          <li>Product Reviews</li>
                          <li>5 Promotional Banners</li>
                          <li>Team of Expert Designers &amp; Developers</li>
                          <li>Unlimited Revisions</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          ELITE E-COMMERCE <br /> PACKAGE{" "}
                        </h3>
                        <span>$2,799 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=elite-e-commerce-package&id=16">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li className="heading">Logo Design</li>
                          <li>UNLIMITED Logo Design Concepts</li>
                          <li>By 6 Award Winning Designers</li>
                          <li>Icon Design</li>
                          <li>UNLIMITED Revisions</li>
                          <li className="heading">Print Media</li>
                          <li>
                            Stationary Design (BusinessCard,Letterhead &amp; Envelope)
                          </li>
                          <li>Invoice Design, Email Signature</li>
                          <li>Bi-Fold Brochure (OR) 2 Sided Flyer Design</li>
                          <li>Product Catalog Design</li>
                          <li>Sign age Design (OR) Label Design</li>
                          <li>T-Shirt Design (OR) Car Wrap Design</li>
                          <li className="heading">Website</li>
                          <li>E-Commerce Store Design</li>
                          <li>Product Detail Page Design</li>
                          <li>Unique Banner Slider</li>
                          <li>Featured Products Showcase</li>
                          <li>Full Shopping Cart Integration</li>
                          <li>Unlimited Products</li>
                          <li>Unlimited Categories</li>
                          <li>Product Rating &amp; Reviews</li>
                          <li>Easy Product Search</li>
                          <li>Payment Gateway Integration</li>
                          <li>Multi-currency Support</li>
                          <li>Content Management System</li>
                          <li>Customer Log-in Area</li>
                          <li>Mobile Responsive</li>
                          <li>Social Media Plugins Integration</li>
                          <li>Coupon Platform</li>
                          <li>Tell a Friend Feature</li>
                          <li>Social Media Pages</li>
                          <li>
                            Facebook, Twitter, YouTube, Google+ &amp; Pinterest Page
                            Designs
                          </li>
                          <li className="heading">Value Added Services</li>
                          <li>Dedicated Account Manager</li>
                          <li>Unlimited Revisions</li>
                          <li>All Final File Formats</li>
                          <li>100% Ownership Rights</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Unique Design Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade  "
                id="branding-tab"
                role="tabpanel"
                aria-labelledby="branding-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          STARTUP COLLATERAL <br /> PACKAGE{" "}
                        </h3>
                        <span>$99.99 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=startup-collateral-package&id=36">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>2 Stationery Design Set</li>
                          <li>FREE Fax Template</li>
                          <li>Print Ready Formats</li>
                          <li>UNLIMITED Revisions</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          COLLATERAL CLASSIC <br /> PACKAGE{" "}
                        </h3>
                        <span>$199.99 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=collateral-classic-package&id=37">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>2 Stationery Design Set</li>
                          <li>UNLIMITED Revisions</li>
                          <li>Flyer Design</li>
                          <li>Brochure Design (Bi-fold/Tri-fold)</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          PREMIUM COLLATERAL <br /> PACKAGE{" "}
                        </h3>
                        <span>$399.99 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=premium-collateral-package&id=38">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>Hat Design</li>
                          <li>Invoice Design</li>
                          <li>Email Signature Design</li>
                          <li>2 Stationery Design Set</li>
                          <li>Packaging Design</li>
                          <li>UNLIMITED Revisions</li>
                          <li>T-Shirt Design</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Money Back Guarantee *</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade  "
                id="video-animation-tab"
                role="tabpanel"
                aria-labelledby="video-animation-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>TEASER/INTRO VIDEO PACKAGE </h3>
                        <span>$249 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=teaser/intro-video-package&id=39">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>15s Duration - HD 1080</li>
                          <li>Professional Script</li>
                          <li>Storyboard</li>
                          <li>Sample Themes</li>
                          <li>Custom Setting, Characters &amp; Graphics</li>
                          <li>Animation Effects &amp; Visualization</li>
                          <li>
                            Voice - Over &amp; Sound Effects (All accents) (M/F)
                          </li>
                          <li>Unlimited Revisions</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage">
                        <p>Best Deal</p>
                      </div>
                      <div className="package-top">
                        <h3>
                          STARTUP VIDEO
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$399 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=startup-video-package&id=40">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>30s Duration - HD 1080</li>
                          <li>Professional Script</li>
                          <li>Storyboard</li>
                          <li>Sample Themes</li>
                          <li>Custom Setting, Characters &amp; Graphics</li>
                          <li>Animation Effects &amp; Visualization</li>
                          <li>
                            Voice - Over &amp; Sound Effects (All accents) (M/F)
                          </li>
                          <li>Unlimited Revisions</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          CLASSIC VIDEO
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$499 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=classic-video-package&id=41">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>60 Second Video - HD 1080</li>
                          <li>Professional Script</li>
                          <li>Sample Theme</li>
                          <li>Storyboard</li>
                          <li>Animation</li>
                          <li>Voice - Over &amp; Sound Effects</li>
                          <li>5 weeks Delivery</li>
                          <li>Unlimited Revisions</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          PREMIUM VIDEO
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$799 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=premium-video-package&id=46">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>90 Second Video - HD 1080</li>
                          <li>Professional Script</li>
                          <li>Sample Theme</li>
                          <li>Storyboard</li>
                          <li>Animation</li>
                          <li>Voice - Over &amp; Sound Effects</li>
                          <li>6 weeks Delivery</li>
                          <li>Unlimited Revisions</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          STANDARD 3D VIDEO <br />
                          PACKAGE{" "}
                        </h3>
                        <span>$2,595 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=standard-3d-video-package&id=47">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>30s-60s Duration - HD 1080</li>
                          <li>2D Compositing</li>
                          <li>Rotoscoping</li>
                          <li>Motion Blur Mattes</li>
                          <li>Stereo Roto</li>
                          <li>Silhouette Splines</li>
                          <li>Match-move</li>
                          <li>Object Tracking</li>
                          <li>Digital Paint</li>
                          <li>Stereo Paint</li>
                          <li>Rig/Wire/Object Removals</li>
                          <li>Unlimited Edits/Revisions &amp; Concepts</li>
                          <li>Professional Script</li>
                          <li>Concept and Storyboards</li>
                          <li>Rendering</li>
                          <li>Compositing and Special VFX</li>
                          <li>Music and Foley</li>
                          <li>Animation Effects &amp; Visualization</li>
                          <li>Voice Over - All accents (M/F)</li>
                          <li>Editing and Final Output</li>
                          <li>Turn Around Time 30 Business days</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          PREMIUM 3D VIDEO <br />
                          PACKAGE{" "}
                        </h3>
                        <span>$4,099 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=premium-3d-video-package&id=48">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>60-120s Duration - HD 1080</li>
                          <li>2D-3D Compositing</li>
                          <li>Rotoscoping</li>
                          <li>Motion Blur Mattes</li>
                          <li>Stereo Roto</li>
                          <li>Silhouette Splines</li>
                          <li>Green Screen Extraction</li>
                          <li>Match-move</li>
                          <li>Object Tracking</li>
                          <li>Camera Tracking</li>
                          <li>Digital Paint</li>
                          <li>Stereo Paint</li>
                          <li>Rig/Wire/Object Removals</li>
                          <li>Recreation of Missing Objects</li>
                          <li>Dust and Scratch Removal</li>
                          <li>Unlimited Edits/Revisions &amp; Concepts</li>
                          <li>Professional Script</li>
                          <li>Concept and Storyboards</li>
                          <li>Rendering</li>
                          <li>Compositing and Special VFX</li>
                          <li>Music and Foley</li>
                          <li>Animation Effects &amp; Visualization</li>
                          <li>Voice Over - All accents (M/F)</li>
                          <li>Editing and Final Output</li>
                          <li>Turn Around Time 45 Business days</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade  "
                id="search-engine-optimization-tab"
                role="tabpanel"
                aria-labelledby="search-engine-optimization-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage">
                        <p>Best Selling</p>
                      </div>
                      <div className="package-top">
                        <h3>STARTUP PLAN </h3>
                        <span>
                          $499<span>/mo</span>{" "}
                        </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=startup-plan&id=49">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li className="heading">
                            Campaign Setup And Optimization{" "}
                          </li>
                          <li>Website Audit</li>
                          <li>Pages Optimized (10 pages) </li>
                          <li>10 Selected Keywords Targeting </li>
                          <li>Keyword Research </li>
                          <li>Keyword Grouping </li>
                          <li>Keyword Mapping </li>
                          <li className="heading">On-Page Optimization </li>
                          <li>SEO Road Map</li>
                          <li>Blog Creation</li>
                          <li>Webpage Copywriting (3 pages, 350 words per page)</li>
                          <li>Title Tag Optimization (10 titles)</li>
                          <li>Meta Description Optimization (10 meta description)</li>
                          <li>Meta Keyword Optimization (10 meta keywords)</li>
                          <li>Domain Redirect Optimization (10 domain redirects)</li>
                          <li>Xml Sitemap Optimization</li>
                          <li>Robots.txt Check</li>
                          <li>URL Rewrites (10 URL rewrites)</li>
                          <li>Broken Link Report</li>
                          <li className="heading">Rich Snippet Recommendations</li>
                          <li>Breadcrumbs</li>
                          <li className="heading">Initial Off-Page SEO </li>
                          <li>Social Bookmarking</li>
                          <li>Slide Share Marketing</li>
                          <li>Forums/FAQ's</li>
                          <li>Link Building</li>
                          <li>Directory Submission</li>
                          <li>Local Business Listings</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>SCALING PLAN </h3>
                        <span>
                          $700<span>/mo</span>{" "}
                        </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=scaling-plan&id=50">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li className="heading">Prior Analysis </li>
                          <li>Business Analysis</li>
                          <li>Consumer Analysis </li>
                          <li>Competitor Analysis </li>
                          <li>15 Selected Keywords Targeting </li>
                          <li>15 Pages Keyword Targeted</li>
                          <li className="heading">Webpage Optimization </li>
                          <li>Meta Tags Creation</li>
                          <li>Keyword Optimization </li>
                          <li>Image Optimization </li>
                          <li>Inclusion of anchors</li>
                          <li className="heading">Tracking &amp; Analysis </li>
                          <li>Google Analytics Installation</li>
                          <li>Google Webmaster Installation </li>
                          <li>Call To Action Plan </li>
                          <li>Creation of Sitemaps</li>
                          <li className="heading">Reporting </li>
                          <li>Monthly Reporting </li>
                          <li>Recommendation </li>
                          <li>Email Support </li>
                          <li>Phone Support</li>
                          <li className="heading">Off Page Optimization</li>
                          <li>Social Bookmarking</li>
                          <li>Slide Share Marketing </li>
                          <li>Forums/FAQ's </li>
                          <li>Link Building </li>
                          <li>Directory Submission </li>
                          <li>Local Business Listings</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>VENTURE PLAN </h3>
                        <span>
                          $1,200<span>/mo</span>{" "}
                        </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=venture-plan&id=51">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li className="heading">Prior Analysis </li>
                          <li>Business Analysis</li>
                          <li>Consumer Analysis </li>
                          <li>Competitor Analysis </li>
                          <li>30 Selected Keywords Targeting </li>
                          <li>30 Pages Keyword Targeted</li>
                          <li className="heading">Webpage Optimization </li>
                          <li>Meta Tags Creation</li>
                          <li>Keyword Optimization </li>
                          <li>Image Optimization </li>
                          <li>Inclusion of anchors Tags </li>
                          <li>Inclusion of anchors Indexing Modifications</li>
                          <li className="heading">Tracking &amp; Analysis </li>
                          <li>Google Places Inclusions</li>
                          <li>Google Analytics Installation</li>
                          <li>Google Webmaster Installation </li>
                          <li>Call To Action Plan </li>
                          <li>Creation of Sitemaps</li>
                          <li className="heading">Reporting </li>
                          <li>Monthly Reporting </li>
                          <li>Recommendation </li>
                          <li>Email Support </li>
                          <li>Phone Support</li>
                          <li className="heading">Off Page Optimization </li>
                          <li>Social Bookmarking</li>
                          <li>Slide Share Marketing </li>
                          <li>Forums/FAQ's </li>
                          <li>Link Building </li>
                          <li>Directory Submission </li>
                          <li>Local Business Listings</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="web-content-writing-tab"
                role="tabpanel"
                aria-labelledby="web-content-writing-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          WEB CONTENT <br /> PACKAGE{" "}
                        </h3>
                        <span>$70 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=web-content-package&id=52">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li className="heading">
                            Some Salient Features of Our Website Copywriting Services
                            are:
                          </li>
                          <li>Creative, Well-Written and 100% Original Content</li>
                          <li>According To Your Exact Requirements</li>
                          <li>
                            FREE Meta details � With each custom page, we will provide
                            a catchy title, keywords and page description.
                          </li>
                          <li>
                            SEO friendly - Your keyword(s) will be placed in the
                            title, the first &amp; last paragraphs and throughout the
                            web copy in a natural and fluent manner
                          </li>
                          <li>Quick Turnaround Time � Within 3 business days!!</li>
                          <li>Unlimited Revisions - 100% Satisfaction Guaranteed!</li>
                          <li>
                            Proofing by our in-house experts � 0% mistakes guarantee!
                          </li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Money Back Guarantee*</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          ARTICLE WRITING <br /> PACKAGE{" "}
                        </h3>
                        <span>$149 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=article-writing-package&id=53">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>1 Creative, Fresh &amp; Well-Written Article</li>
                          <li>By 1 Professional Copywriter</li>
                          <li>Industry Specified Expert Copywriter</li>
                          <li>400 Words Per Page</li>
                          <li>3 to 5 Business Days Rotation</li>
                          <li>5 Revisions</li>
                          <li>According To Your Exact Requirements</li>
                          <li>Written on Your Specified Topic/Keyword</li>
                          <li>Proofing by our in-house experts</li>
                          <li>
                            Free Submission on any article marketing directories /blog
                            (If required)
                          </li>
                          <li>
                            SEO friendly � Your keyword(s) will be placed in the
                            title, the first &amp; last paragraphs and throughout the
                            web copy in a natural and fluent manner
                          </li>
                          <li>100% Ownership Rights</li>
                          <li>100% Original Content</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Money Back Guarantee*</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          BLOG WRITING <br /> PACKAGE{" "}
                        </h3>
                        <span>$180 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=blog-writing -package&id=54">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>1 Creative, Fresh &amp; Well-Written Article</li>
                          <li>By 1 Professional Copywriter</li>
                          <li>Industry Specified Expert Copywriter</li>
                          <li>400 Words Per Page</li>
                          <li>3 to 5 Business Days Rotation</li>
                          <li>5 Revisions</li>
                          <li>According To Your Exact Requirements</li>
                          <li>Written on Your Specified Topic/Keyword</li>
                          <li>Proofing by our in-house experts</li>
                          <li>
                            Free Submission on any article marketing directories /blog
                            (If required)
                          </li>
                          <li>
                            SEO friendly � Your keyword(s) will be placed in the
                            title, the first &amp; last paragraphs and throughout the
                            web copy in a natural and fluent manner
                          </li>
                          <li>100% Ownership Rights</li>
                          <li>100% Satisfaction Guarantee</li>
                          <li>100% Money Back Guarantee*</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade active show"
                id="social-media-marketing-tab"
                role="tabpanel"
                aria-labelledby="social-media-marketing-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage">
                        <p>Best Selling</p>
                      </div>
                      <div className="package-top">
                        <h3>
                          STARTUP FIRE
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$349.99 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=startup-fire-package&id=59">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>
                            3 postings per week (per network) Facebook + Twitter +
                            Instagram + Google+{" "}
                          </li>
                          <li>Content Creation </li>
                          <li>Business Page Optimization </li>
                          <li>Social Media Strategy (Overview) </li>
                          <li>Facebook Likes Campaign </li>
                          <li>Monthly Progress report </li>
                          <li>Copy Writing</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          EXCELLENCE DREAM
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$699.99 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=excellence-dream-package&id=60">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>Copywriting &amp; Visual designs </li>
                          <li>Business Page Optimization </li>
                          <li>Ad Campaign Management </li>
                          <li>Spam monitoring </li>
                          <li>Monthly Progress report </li>
                          <li>
                            5 postings per week Facebook + Twitter + Instagram +
                            Google+{" "}
                          </li>
                          <li>Reputation Management </li>
                          <li>Social Account Setup </li>
                          <li>Content Creation </li>
                          <li>Social Media Listening </li>
                          <li>Query and comments reply</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>
                          ALL IN ONE SPARK
                          <br /> PACKAGE{" "}
                        </h3>
                        <span>$1,199.99 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=all-in-one-spark-package&id=61">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>Initial Brand Analysis</li>
                          <li>Consumer Persona Analysis</li>
                          <li>Competitor Analysis - Local and Nationwide</li>
                          <li>Customized Social Media Strategy</li>
                          <li>
                            Copywriting - Team of 04 Dedicated Social Media Writers
                          </li>
                          <li>
                            Advertising - Team of 04 Dedicated Social Media Ads
                            Experts
                          </li>
                          <li>Content Plan Creation</li>
                          <li>35 Custom Designed Social Media Posts per month</li>
                          <li>
                            Monthly Google Ads Management - Google Shopping + Google
                            Search Campaigns
                          </li>
                          <li>Goal Focused Facebook Ad Campaigns</li>
                          <li>
                            Community Management - All Community Based Social Networks
                          </li>
                          <li>
                            Page Management (Facebook, Instagram, Linked In, and
                            Twitter)
                          </li>
                          <li>Page Spam Management - all social media platforms</li>
                          <li>Engagement Tracking Setup</li>
                          <li>Facebook Shop Creation</li>
                          <li>Detailed Page Moderation - All Social Networks</li>
                          <li>
                            Strategic Ad Campaign Optimization &amp; A/B Testing
                          </li>
                          <li>Social Media Listening</li>
                          <li>
                            Monthly Analytics Reporting - KPI Comparison and more{" "}
                          </li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade  "
                id="animated-logo-tab"
                role="tabpanel"
                aria-labelledby="animated-logo-tab"
              >
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>2D STANDARD LOGO ANIMATION </h3>
                        <span>$155 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=2d-standard-logo-animation&id=55">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>3 custom and Unique design</li>
                          <li>2 Unique Animation styles</li>
                          <li>Camera Angles Positioning</li>
                          <li>Lighting/Composing</li>
                          <li>3 Revisions </li>
                          <li>Animation and Effects</li>
                          <li>Dynamic colours</li>
                          <li>background music</li>
                          <li>Source files format Mp4 MOV ETC</li>
                          <li>100% SATISFACTION GURANTEE</li>
                          <li>100% unique design gurantee</li>
                          <li>100% Money back gurantee</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage">
                        <p>Best Selling</p>
                      </div>
                      <div className="package-top">
                        <h3>2D ADVANCE LOGO ANIMATION </h3>
                        <span>$199 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=2d-advance-logo-animation&id=56">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>3 custom and Unique design</li>
                          <li>3 Unique Animation styles</li>
                          <li>Camera Angles Positioning</li>
                          <li>Lighting/Composing</li>
                          <li>unlimited Revisions </li>
                          <li>Animation and Effects</li>
                          <li>Dynamic colours</li>
                          <li>background music</li>
                          <li>Source files format Mp4 MOV ETC</li>
                          <li>100% SATISFACTION GURANTEE</li>
                          <li>100% unique design gurantee</li>
                          <li>100% Money back gurantee</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>3D STANDARD LOGO ANIMATION </h3>
                        <span>$245 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=3d-standard-logo-animation&id=57">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>5 custom and Unique design</li>
                          <li>5 Unique Animation styles</li>
                          <li>Camera Angles Positioning</li>
                          <li>Lighting/Composing</li>
                          <li>unlimited Revisions </li>
                          <li>Animation and VFX</li>
                          <li>Dynamic colours</li>
                          <li>background music</li>
                          <li>Source files format Mp4 MOV ETC</li>
                          <li>100% SATISFACTION GURANTEE</li>
                          <li>100% unique design gurantee</li>
                          <li>100% Money back gurantee</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-12">
                    <div className="packageBox">
                      <div className="bestPackage"></div>
                      <div className="package-top">
                        <h3>3D ADVANCE LOGO ANIMATION </h3>
                        <span>$299 </span>
                        {/*<p>*/}
                        {/*    Lorem Lipsum dolor sit consectetur adipiscing*/}
                        {/*</p>*/}
                        <div className="packageAnchorDiv">
                          <a href="order-now.php?package=3d-advance-logo-animation&id=58">
                            Get Started
                          </a>
                        </div>
                      </div>
                      <div className="package-bottom">
                        <ul>
                          <li>UNLIMITED custom and Unique design</li>
                          <li>UNLIMITED Unique Animation styles</li>
                          <li>Camera Angles Positioning</li>
                          <li>Lighting/Composing</li>
                          <li>unlimited Revisions </li>
                          <li>Animation and VFX</li>
                          <li>Music and foley </li>
                          <li>All source files format Included Mp4 MOV ETC</li>
                          <li>100% SATISFACTION GURANTEE</li>
                          <li>100% unique design gurantee</li>
                          <li>100% Money back gurantee</li>{" "}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="brandAds">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <div className="advertise-one">
                <div className="row brandAdsRow">
                  <div className="col-lg-8">
                    <div
                      className="advertise-one-content aos-init aos-animate"
                      data-aos="fade-down"
                      data-aos-duration={1000}
                    >
                      <h1>
                        DO YOU WANT A
                        <span className="d-block">RESPONSIVE WEBSITE?</span>
                      </h1>
                      <p className="para">
                        Our developers are well-versed in the most cutting-edge
                        techniques and methods, so you can rest assured that your site
                        will look amazing and respond smoothly across all devices.
                      </p>
                      <a href="#" className="firstBtn">
                        learn more
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 advertiseOneCol">
                    <div className="advertiseOne">
                      <Image src={home.advertiseOne.src} fill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="advertise-one advertise-two">
                <div className="row">
                  <div className="col-lg-8">
                    <div
                      className="advertise-one-content advertise-one-content-two aos-init aos-animate"
                      data-aos="fade-up"
                      data-aos-duration={1000}
                    >
                      <h1>
                        WE CREATE WEBSITES
                        <span className="d-block">THAT REFLECT YOUR BRAND</span>
                      </h1>
                      <p className="para">
                        To ensure that our customers' websites appropriately portray
                        their audience's diversity, we collaborate closely with them
                        from the commencement of the design process. This necessitates
                        considering issues like affordability, language, and cultural
                        sensitivity.
                      </p>
                      <a href="#" className="firstBtn firstBtn2">
                        learn more
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-4 advertiseOneCol">
                    <div className="advertiseOne">
                      <Image src={home.advertiseTwo.src} width="0"
                        height="0"
                        sizes="100vw"
                        className="w-100 h-auto" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="groupSection1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="groupSectionImg">
                <Image src={home.groupImg.src} width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full h-auto" />
                <div className="groupSectionContent-one groupSectionContent-oneXtra">
                  <h2>LET'S WORK TOGETHER TO BRING YOUR VISION TO EXISTENCE</h2>
                </div>
              </div>
              <div className="groupSectionContent">
                <div className="row align-items-center">
                  <div className="col-lg-7">
                    <div className="groupSectionContent-one">
                      <h2 className="groupSectionContent-two">
                        LET'S WORK TOGETHER TO BRING YOUR VISION TO EXISTENCE
                      </h2>
                      <p className="para">
                        We are aware that a website consists&nbsp;of more than merely
                        a collection of web pages and pictures. It is a representation
                        of both your company and your own beliefs. So, we strive to
                        create websites that are inclusive and accessible to all.
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="groupSectionBtn">
                      <div className="groupSectionBtns mb-3">
                        <a href="get-a-free-qoute.php" className="learnMore">
                          learn more
                        </a>
                      </div>
                      <div className="chat-with-sales">
                        <a href="#" className="yellowChat">
                          chat with sales
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="section-seven">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-seven-content mb-5">
                <h1 className="specialh1">
                  PROMOTING NUMEROUS
                  <span className="d-block">BRANDS AROUND THE WORLD</span>
                </h1>
                <p className="para text-center mt-4">
                  We don't just create brands; we build them. So if you want more
                  people to know about your business and shop from you, our team of
                  experts can help. We work together with you to create a memorable
                  brand name and logo, and we handle the rest.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <a href="custom-website-development.php" className="bespoke">
                <div className="Goalbox">
                  <div className="goalicon">
                    <Image src={home.brandPort[0]} width="0"
                      height="0"
                      sizes="100vw"
                      className="w-100 h-auto" />

                  </div>
                  <h3>
                    CUSTOM WEBSITE <span>DEVELOPMENT</span>
                  </h3>
                  <p>
                    Custom website development empowers&nbsp;your brand and values a
                    distinct online presence.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <a href="ecommerce-solutions.php" className="bespoke">
                <div className="Goalbox">
                  <div className="goalicon">
                    <Image src={home.brandPort[1]} width="0"
                      height="0"
                      sizes="100vw"
                      className="w-100 h-auto" />
                  </div>
                  <h3>
                    ECOMMERCE <span>SOLUTIONS</span>
                  </h3>
                  <p>
                    We at Design Diverse believe an inclusive and welcoming e-commerce
                    platform is a great way for companies to reach out to more people
                    and cultivate a dedicated following.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <a href="custom-logo-design.php" className="bespoke">
                <div className="Goalbox">
                  <div className="goalicon">
                    <Image src={home.brandPort[2]} width="0"
                      height="0"
                      sizes="100vw"
                      className="w-100 h-auto" />
                  </div>
                  <h3>
                    LOGO <span>DESIGN</span>
                  </h3>
                  <p>
                    When designing a logo that truly reflects your company's
                    philosophy, we know how important representation, accessibility,
                    and inclusivity are.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <a href="web-app-development.php" className="bespoke">
                <div className="Goalbox">
                  <div className="goalicon">
                    <Image src={home.brandPort[3]} width="0"
                      height="0"
                      sizes="100vw"
                      className="w-100 h-auto" />
                  </div>
                  <h3>
                    WEB <span>APPLICATIONS</span>
                  </h3>
                  <p>
                    We at Design Diverse are experts in developing inclusive online
                    apps that present your&nbsp;brand's values and are simple for your
                    target audience .
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <a href="mobile-app-development.php" className="bespoke">
                <div className="Goalbox">
                  <div className="goalicon">
                    <Image src={home.brandPort[4]} width="0"
                      height="0"
                      sizes="100vw"
                      className="w-100 h-auto" />
                  </div>
                  <h3>
                    MOBILE <span>APPLICATIONS</span>
                  </h3>
                  <p>
                    The experts at design diverse can assist you with creating a new
                    mobile app or improving an existing one.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <a href="video-animation.php" className="bespoke">
                <div className="Goalbox">
                  <div className="goalicon">

                    <Image src={home.brandPort[5]} width="0"
                      height="0"
                      sizes="100vw"
                      className="w-100 h-auto" />
                  </div>
                  <h3>
                    VIDEO <span>ANIMATIONS</span>
                  </h3>
                  <p>
                    Attractive video animation, including key supporting information,
                    is a certain way to catch the attention of your target audience.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <a href="brand-design-prototype.php" className="bespoke">
                <div className="Goalbox">
                  <div className="goalicon">
                    <Image src={home.brandPort[6]} width="0"
                      height="0"
                      sizes="100vw"
                      className="w-100 h-auto" />
                  </div>
                  <h3>BRANDING</h3>
                  <p>
                    We recognize that a compelling brand is crucial for the success of
                    any business, and we are dedicated to assisting our clients in
                    developing brands that effectively reflect the array of
                    individuals they serve.
                  </p>
                </div>
              </a>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <a href="marketing-promo-video-animation.php" className="bespoke">
                <div className="Goalbox">
                  <div className="goalicon">
                    <Image src={home.brandPort[7]} width="0"
                      height="0"
                      sizes="100vw"
                      className="w-100 h-auto" />
                  </div>
                  <h3>
                    Social Media <span>Marketing</span>
                  </h3>
                  <p>
                    Lorem ipsum dolor sit amet adipiscing elit sed do eiusmod tempor
                    incididunt ut labore dolore magna aliqua.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <section className="testimonial">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="testimonial-content">
                <h1 className="specialh1 text-center">Happy Customers</h1>
              </div>
            </div>
          </div>
          <div
            className="row justify-content-center aos-init aos-animate"
            data-aos="fade-down"
            data-aos-duration={1500}
          >
            <OwlCarousel
              className="carouselNew-carousel owl-carousel owl-theme owl-loaded owl-drag"
              loop
              margin={10}
              nav
            >
              <div className="item">
                <div className="row align-items-center text-center">
                  <div className="col-lg-12">
                    <div className="banner-content">
                      <div className="Stars">
                        {/* <img src="images/slider.webp" class="img-fluid lazy" alt=""> */}
                        <FontAwesomeIcon className="my-float"
                          icon={faQuoteLeft} style={{ fontSize: 40, marginTop: 10 }} />
                      </div>
                      <p>
                        Your team has done an excellent job with the website,
                        and we appreciate all of your hard work. We are quite
                        pleased with the outcome of this massive project.
                      </p>
                      <h6>DARYL HILTON</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row align-items-center text-center">
                  <div className="col-lg-12">
                    <div className="banner-content">
                      <div className="Stars">
                        {/* <img src="images/slider.webp" class="img-fluid lazy" alt=""> */}
                        <FontAwesomeIcon className="my-float"
                          icon={faQuoteLeft} style={{ fontSize: 40, marginTop: 10 }} />
                      </div>
                      <p>
                        Your team has done an excellent job with the website,
                        and we appreciate all of your hard work. We are quite
                        pleased with the outcome of this massive project.
                      </p>
                      <h6>DARYL HILTON</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row align-items-center text-center">
                  <div className="col-lg-12">
                    <div className="banner-content">
                      <div className="Stars">
                        {/* <img src="images/slider.webp" class="img-fluid lazy" alt=""> */}
                        <FontAwesomeIcon className="my-float"
                          icon={faQuoteLeft} style={{ fontSize: 40, marginTop: 10 }} />
                      </div>
                      <p>
                        Your team has done an excellent job with the website,
                        and we appreciate all of your hard work. We are quite
                        pleased with the outcome of this massive project.
                      </p>
                      <h6>DARYL HILTON</h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="row align-items-center text-center">
                  <div className="col-lg-12">
                    <div className="banner-content">
                      <div className="Stars">
                        {/* <img src="images/slider.webp" class="img-fluid lazy" alt=""> */}
                        <FontAwesomeIcon className="my-float"
                          icon={faQuoteLeft} style={{ fontSize: 40, marginTop: 10 }} />
                      </div>
                      <p>
                        Your team has done an excellent job with the website,
                        and we appreciate all of your hard work. We are quite
                        pleased with the outcome of this massive project.
                      </p>
                      <h6>DARYL HILTON</h6>
                    </div>
                  </div>
                </div>
              </div>



            </OwlCarousel>


          </div>
        </div>
      </section>


      <section className="formSection">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <div className="formSection-content text-center mb-md-5">
                <h2>WEB PRESENCE ON THE INTERNET</h2>
                <p>
                  We take a comprehensive approach to website development. The needs
                  of each customer are taken into account while developing a plan.
                  <span className="d-block">
                    We are a group of passionate, hardworking people who deeply
                    understand various digital technologies.
                  </span>
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div
                className="formImgDiv aos-init aos-animate"
                data-aos="fade-down"
                data-aos-duration={1500}
              >
                <Image src={home.foamingImage.src} width="0"
                  height="0"
                  sizes="100vw"
                  className="w-100 h-auto" />
              </div>
            </div>
            <div className="col-lg-7 col-12">
              <div className="formImg-content">
                <h2>KEEP IT SIMPLE BUT UNIQUE</h2>
                <p>
                  Our "keep it simple" philosophy means that we focus on creating
                  clean, minimalistic designs that are easy on the eyes and easy to
                  navigate. We believe a website should be easy to understand and use
                  without any unnecessary clutter or distractions. We make it easy for
                  users to find what they're looking for by keeping the navigation
                  simple and straightforward.
                </p>
                <form
                  className="form-inline form-inlineXtra mt-5 small-form"
                  method="POST"
                  noValidate="novalidate"
                >
                  {/* Custom Fields */}
                  <input
                    type="hidden"
                    name="url"
                    defaultValue="https://designdiverse.com/"
                  />
                  <input
                    type="hidden"
                    name="domain"
                    defaultValue="designdiverse.com"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    defaultValue="Banner Form (designdiverse.com)"
                  />
                  <div className="form-group mr-3">
                    <input type="text" name="name" placeholder="Name" />
                  </div>
                  <div className="form-group mr-3">
                    <input type="text" name="phone" placeholder="Phone" />
                  </div>
                  <button className="formBtn" type="submit">
                    Submit
                  </button>
                  <div className="row">
                    <div className="col-md-12 col-xs-12">
                      <div
                        className="error mt-3 alert alert-danger text-left mb-0"
                        style={{ display: "none" }}
                      ></div>
                      <div
                        className="success mt-3 alert alert-success text-center mb-0 p-2 thankMesg"
                        style={{ display: "none" }}
                      />
                      <div className="loader" style={{ display: "none" }}>
                        <img alt="loader" src="images/loader.gif" />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
