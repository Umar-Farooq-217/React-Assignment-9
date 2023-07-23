import React from 'react';
import imagr from '../../components/assets/Storefront.png'
import firstimage from '../../components/assets/DiscordLogo.png'
import secondimage from '../../components/assets/YoutubeLogo.png'
import thirdimage from '../../components/assets/TwitterLogo.png'
import fourthimage from '../../components/assets/InstagramLogo.png'
import Button from '../button/Button';

const Footer = () => {
    return (
    <div className='bg-gray-800'>    <div className='  min-230px-sm:max-680px-sm md:min-681px-md md:max-980px-md lg:min-981px-lg lg:max-1300px-lg  mx-36  justify-around grid  mt-20 lg:grid-cols-3 sm:grid-cols-1 '>
            <div className=''>
<div className='flex pt-14 space-x-3'><img className='color-gray-800' src={imagr} alt="pic" /><p className='text-white text-2xl font-semibold  '>NFT Marketplace</p></div>
<p className='text-white text-lg w-72 pt-10'>NFT Marketplace UI Created with Anima for Figma</p>
<p className='text-white text-lg pt-3'>Join our Community</p>
<div className='flex pt-3 space-x-2'>
<img src={firstimage} alt="pic" />
<img src={secondimage} alt="pic" />
<img src={thirdimage} alt="pic" />
<img src={fourthimage} alt="pic" />
</div>
            </div>
            <div  className='pl-24  '>
                <h1 className='text-white text-3xl font-semibold pt-14'>Explore</h1>
                <p className='text-white text-lg pt-4'>Marketplace</p>
                <p className='text-white text-lg pt-4'>Rankings</p>
                <p className='text-white text-lg pt-4'>Connect a Wallet</p>
            </div>
            <div className=" reletive right-10 top-1 ">
           
        <h1 className="text-white text-5xl  font-semibold pt-14 ">Join Our Weekly Digest</h1>
        <p className="text-white text-2xl w-[450px]   pt-3">Get exclusive promotions & Straight towards to your inbox </p>
        <div className="flex   pt-3 "><input className="rounded-2xl font-bold    w-80 bg-white " type="email" placeholder="      Enter Your Email here" /><Button className=' right-10'   title='Subscribe'/></div>
   
    </div>

            </div><div className='bg-gray-800 pt-10'>
    <div className='bg-white h-[1px] mx-36'></div>
    <p className='text-white text-sm pl-36 pt-8'>&copy; NFT Market. Use this template freely</p>

            </div>





        </div>
    );
}

export default Footer;
