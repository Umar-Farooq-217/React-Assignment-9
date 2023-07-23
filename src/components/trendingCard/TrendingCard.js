import React from 'react';


const TrendingCard = (props) => {
  return (
    <div className=''>
      <img className='rounded-3xl' src={props.src} alt="pic" />
      <div className='flex mt-3 space-x-2'>
        <img className='rounded-3xl' src={props.src1} alt="pic" />
        <img className='rounded-3xl' src={props.src2} alt="pic" />
        <h1 className='bg-purple-700 rounded-3xl w-24 text-3xl flex items-center text-white'>{props.value}</h1>
      </div>
      <p className='text-white text-2xl mt-1'>{props.title}</p>
      <div className='flex mt-2 '>
        <img className='w-4' src={props.src3} alt="pic" />
        <p className='text-white ml-2 rounded-3xl'>{props.icon}</p>
      </div>
    </div>
  );
};

export default TrendingCard;
