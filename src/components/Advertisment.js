import React from 'react';
import ad from '../assets/advertisment.jpeg';

const Advertisment = () => {
    return (
        <div className='container my-5 mx-auto '>
            <a href="https://www.vivo.com/in/" target='_blank'><img src={ad} className='ad' /></a>
        </div>
    )
}

export default Advertisment


//width='570px' height='250px'