import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image'
import SideInquiryForm from '../components/SideInquiryForm';
import SocialIcons from '../components/SocialIcons'
import { home } from '../utils/images.json'




export default function Home() {
  return (
    <>
      <Head>
        <title>Design Diverse</title>
        <link rel="icon" href="/favicon.ico" />


      </Head>
      <Header />
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
                <a data-fancybox="gallery" href="images/1.gif">
                  <Image src={home.portfolio[0]} fill></Image>
                  <div className="overlay">
                    <div className="text textXtra textXtra2">Without Colors</div>
                  </div>
                </a>
              </div>
              <div className="small-div">
                <a
                  data-fancybox="gallery"
                  href="images/portfolio/graphic-design/2.webp"
                >
                  <Image src={home.portfolio[1]} fill></Image>

                </a>
                <div className="overlay">
                  <a
                    data-fancybox="gallery"
                    href="images/portfolio/graphic-design/2.webp"
                  >
                    <div className="text textXtra textXtra2">Atcos Staffing</div>
                  </a>
                  <div className="viewButton">
                    <a
                      data-fancybox="gallery"
                      href="images/portfolio/graphic-design/2.webp"
                    ></a>
                    <a
                      href="https://demowebsitess.com/ATCOS-STAFFING/"
                      target="_blank"
                      className="yellowChat2"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="small-div">
                <a data-fancybox="gallery" href="images/portfolio/big/2.webp">
                  <Image src={home.portfolio[2]} className='only-big' fill />

                  <div className="overlay">
                    <div className="text">Black &amp; Colors</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-2 col-12">
              <div className="small-div">
                <a data-fancybox="gallery" href="images/portfolio/big/3.webp">
                  <Image src={home.portfolio[3]} className='only-bigXtra' fill />


                  <div className="overlay">
                    <div className="text textXtra">Brochure</div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="small-div">
                <a data-fancybox="gallery" href="images/portfolio/big/4.gif">
                  <Image src={home.portfolio[4]} className='five-gif' fill />


                  <div className="overlay">
                    <div className="text textXtra textXtra2 textXtra3">
                      The Oder Side Of The Moon
                    </div>
                  </div>
                </a>
              </div>
              <div className="small-div">
                <a
                  data-fancybox="gallery"
                  href="images/portfolio/graphic-design/3.webp"
                >
                  <Image src={home.portfolio[5]} className='five-gif' fill />


                </a>
                <div className="overlay">
                  <a
                    data-fancybox="gallery"
                    href="images/portfolio/graphic-design/3.webp"
                  >
                    <div className="text textXtra ">KIC</div>
                  </a>
                  <div className="viewButton">
                    <a
                      data-fancybox="gallery"
                      href="images/portfolio/graphic-design/3.webp"
                    ></a>
                    <a
                      href="https://demowebsitess.com/custom-backend/keep-it-clean-01/public/"
                      target="_blank"
                      className="yellowChat2"
                    >
                      View
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-12">
              <div className="last_row">
                <div className="small-div">
                  <a data-fancybox="gallery" href="images/portfolio/big/6.gif">
                    <Image src={home.portfolio[6]} className='smallSix' fill />


                    <div className="overlay">
                      <div className="text textXtra textXtra2 textXtra4">
                        Signs Everywhere
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12">
              <div className="last_row">
                <div className="small-div">
                  <a
                    data-fancybox="gallery"
                    href="images/portfolio/graphic-design/1.webp"
                  >
                    <Image src={home.portfolio[7]} className='five-gif websitePort' fill />

                    
                  </a>
                  <div className="overlay">
                    <a
                      data-fancybox="gallery"
                      href="images/portfolio/graphic-design/1.webp"
                    >
                      <div className="text">The AG Store</div>
                    </a>
                    <div className="viewButton">
                      <a
                        data-fancybox="gallery"
                        href="images/portfolio/graphic-design/1.webp"
                      ></a>
                      <a
                        href="https://demowebsitess.com/Antonio/"
                        target="_blank"
                        className="yellowChat2"
                      >
                        View
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-12">
              <div className="last_row">
                <div className="small-div">
                  <a data-fancybox="gallery" href="images/portfolio/big/9.webp">
                  <Image src={home.portfolio[8]} className='smallNine' fill />

                   
                    <div className="overlay">
                      <div className="text textXtra textXtra7">High Hopes</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12">
              <div className="last_row">
                <div className="small-div">
                  <a data-fancybox="gallery" href="images/portfolio/big/10.webp">
                  <Image src={home.portfolio[8]} className='port10' fill />

                    <div className="overlay">
                      <div className="text textXtra textXtra1 textXtra8">
                        Musician Show
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}
