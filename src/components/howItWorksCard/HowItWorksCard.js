
import React from 'react';

const HowItWorksCard = (props) => {
    return (
        <div className=' w-96  rounded-3xl'>
            <img className='w-[363px] h-72 bg-gray-800 rounded-3xl   ' src={props.src} alt="pic" />
            <h1 className='text-2xl   px-20 text-white font-serif'>{props.heading}</h1>
            <p className='text-sm space-x-4 pt-2 text-justify  mx-4 mb-36  px-14 text-white font-serif'>{props.pera}</p>
        </div>
    );
}

export default HowItWorksCard;
