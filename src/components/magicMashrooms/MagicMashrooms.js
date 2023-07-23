import React from 'react';
import './MagicMashrooms.css';
import Button from '../button/Button';
import nftimg from '../assets/NFT Highlight.png'
import avater from '../assets/Avatar.png'
import eye from '../assets/Eye.png'
const MagicMashrooms = () => {
    const divStyle ={
        backgroundImage:`url(${nftimg})`,
        backgroundSize:'contain',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '850px'
       
    }
    const color ={
        bacgroundColor:'rgba(111,76,125,255)'
    }
    return (
        <div style={divStyle} className='backimage flex bg-center   '>
            
                    <div className='mt-[430px] ml-36'>
                        <Button src={avater} title='Shroomie'/>
                        <h1 className='text-white text-5xl pt-8 pb-8 font-semibold'>Magic Mashrooms</h1>
                        <Button src={eye} className="" title='See NFT'/>
                    </div>
                    <div className='bg-gray-500 w-72 mr-36 h-36 rounded-2xl ml-[430px] mt-[500px]' >
                        <p className='text-white pl-5 text-sm pt-2'>Auction Ends In :</p>
                        <p className='text-white pl-5 text-5xl pt-3 font-semibold'>59 : 59 : 59</p>
                        <p className='text-white pl-5 pt-2 word text-sm'>Hours Minutes Seconds</p>
                    </div>
             
        </div>
    );
}

export default MagicMashrooms;
