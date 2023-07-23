 import React from 'react';
 
 const BrowseCatagoriesCard = (props) => {
    return (
        <div className='rounded-3xl w-64 bg-gray-800'>
            <img className='w-full' src={props.src} alt="pic" />
            <p className='text-white text-3xl font-serif py-3 pl-8'>{props.title}</p>
        </div>
    );
 }
 
 export default BrowseCatagoriesCard;
 