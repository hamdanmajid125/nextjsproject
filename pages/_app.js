import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import "../styles/globals.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { GoogleFonts } from 'next-google-fonts';


function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500&family=Poppins:wght@400;500&family=Orbitron:wght@400;500&family=Montserrat:wght@400;500&display=swap" />
      <Component {...pageProps} />;

    </>)
}

export default MyApp;