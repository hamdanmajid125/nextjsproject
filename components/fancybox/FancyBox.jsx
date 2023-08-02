import React, { useEffect } from 'react'
import { home } from '../../utils/images.json'
import Image from 'next/image';
import Head from 'next/head';
import $ from 'jquery';
const FancyBox = (props) => {
    useEffect(() => {
        if (window.FancyBox === undefined) {

            window.jQuery = $;
            window.FancyBox = require('https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js');
        }


    }, [])
    return (
        <>
          
            <a data-fancybox="gallery" href={props.src}>
                <Image src={props.src}width={0} height={0} className={props['fancy-image-class'] ? props['fancy-image-class'] : ''} sizes="100vw" style={{ width: '100%', height: props['fancy-height'] ? props['fancy-height'] : 'auto'}} // optional
                />
                <div className="overlay">
                    <div className={props['fancy-class']}>{props['fancy-title']}</div>
                </div>
            </a>

        </>
    )
}

export default FancyBox