import Head from 'next/head';
import Header from '../components/global/Header';
import Image from 'next/image'
import SideInquiryForm from '../components/global/SideInquiryForm';
import SocialIcons from '../components/global/SocialIcons'
import { home } from '../utils/images.json'
import $ from 'jquery';
import { useEffect } from 'react';
import FancyBox from '../components/fancybox/FancyBox';





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
                <FancyBox src={home.portfolio[0]}  fancy-class="text textXtra textXtra2" fancy-title="Without Colors" />
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
                  <FancyBox src={home.portfolio[7]}  fancy-height="317px" fancy-image-class="five-gif websitePort" fancy-class="text" fancy-title="Signs Everywhere" />

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
                  <FancyBox src={home.portfolio[9]}  fancy-height="318px" fancy-image-class="port10" fancy-class="text textXtra textXtra1 textXtra8" fancy-title="Musician Show" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



    </>
  )
}
