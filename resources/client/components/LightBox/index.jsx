import React, { useState, useRef } from 'react'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';
import Header from '../../components/Header';


const LightBox = () => {

    const images = [
        '//placekitten.com/1500/500',
        '//placekitten.com/4000/3000',
        '//placekitten.com/800/1200',
        '//placekitten.com/1500/1500',
    ];

    const [settings, setSettings] = useState({
        photoIndex: 0,
        isOpen: false,
    });

    return (
        <div className="light-box">

        </div>
    )
}

export default LightBox