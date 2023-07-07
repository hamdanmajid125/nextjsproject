import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMessage } from '@fortawesome/free-solid-svg-icons'


const SocialIcons = () => {
    return (
        <>
            <a href="https://wa.me/+18888350266" className="float" target="_blank">
                <FontAwesomeIcon className="my-float"
                    icon={faWhatsapp} style={{ fontSize: 40, marginTop: 10 }}


                />

            </a>
            <a href="tel:4083812934" className="float2">
            <FontAwesomeIcon className="my-float2"
                    icon={faMessage} style={{ fontSize: 30, marginTop: 15 }}


                />
            </a>
        </>
    )
}

export default SocialIcons
