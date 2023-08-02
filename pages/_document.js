import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/global/Header'
import Footer from '../components/global/Footer'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css"
          rel="stylesheet"
        />

      </Head>
      
      <body>
        <Header/>
        <Main />
        <Footer/>
        <NextScript />
      </body>
    </Html>
  )
}