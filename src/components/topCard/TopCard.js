


import React from 'react';

const TopCard = (props) => {
    return (
        <div className='bg-gray-800 w-64 h-72  justify-center rounded-3xl'>
          <p className='w-7 bg-black flex justify-center text-slate-400 items-center text-2xl mx-4  relative top-4 rounded-3xl'>{props.number}</p>
            <img className='pl-16' src={props.src} alt="pic" />
        <h1 className='text-3xl  flex justify-center items-center pt-6 text-white'>{props.heading}</h1>
        <p className='text-gray-400 pt-1 pl-4 text-lg'>Total sales:<span className='text-gray-200 text-xl pl-2'>34.53 ETH</span></p>
        </div>
    );
}

export default TopCard;
