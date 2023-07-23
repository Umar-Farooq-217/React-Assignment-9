import React from 'react';

const DiscoverCard = (props) => {
    return (
        <div className='bg-green-500 w-80 rounded-3xl'>
            <img className='w-full' src={props.src} alt="pic" />
            <h1 className='text-white text-2xl pl-5 pt-3 font-serif'>{props.heading}</h1>
            <div className='flex pt-2 pl-4'>
                <img src={props.icon} alt="pic" />
                <p className='text-white pl-3   text-xl'>{props.title}</p>
            </div>
          
               
                <div className='flex justify-between pt-2 mx-3 '>
                    <div className=''>
                        <p className='text-gray-300 text-lg'>Price</p>
                        <p className='text-white text-xl'>1.62 ETH</p>
                    </div>
                    <div className=''>
                        <p className='text-gray-300 text-lg'>Highest Bid</p>
                        <p className='text-white text-xl'>0.33 wETH</p>
                    </div></div>
            </div>
       
    );
}

export default DiscoverCard;
