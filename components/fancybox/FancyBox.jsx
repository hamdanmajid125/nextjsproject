import React, { useEffect } from 'react'
import { home } from '../../utils/images.json'
import Head from 'next/head';
import $ from 'jquery';
const FancyBox = () => {
    useEffect(() => {
        if (window.FancyBox === undefined) {

            window.jQuery = $;
            window.FancyBox = require('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js');
        }


    }, [])
    return (
        <>
            <Head>
                <link
                    href="https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css"
                    rel="stylesheet"
                />
            </Head>
            <a data-fancybox="gallery" href={home.portfolio[0]}>
                <img src={home.portfolio[0]} className="lazy" alt="" />
                <div className="overlay">
                    <div className="text textXtra textXtra2">Without Colors</div>
                </div>
            </a>

        </>
    )
}

export default FancyBox