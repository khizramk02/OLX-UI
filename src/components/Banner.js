import React from 'react'
import banner from '../assets/hero_bg_pk.jpg';
import './Banner.css';

const Banner = () => {
    return (
        <div className='container-fluid banner-div'>
            <img src={banner} className='banner' width='100%' />

        </div>
    )
}

export default Banner