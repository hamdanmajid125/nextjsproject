import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";
import "../styles/inner.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import { GoogleFonts } from 'next-google-fonts';
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
config.autoAddCss = false


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
    require("../js/app.js");
    AOS.init({
      duration: 800,
      once: false,
    })
  }, []);
  
  
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&family=Orbitron:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap" />
      <Component {...pageProps} />;

    </>)
}

export default MyApp;