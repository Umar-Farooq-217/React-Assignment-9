
import React from 'react';
import Button from '../button/Button';
import eye from '../assets/Eye.png'
import DiscoverCard from '../discoverCard/DiscoverCard';
import firstimg from '../assets/Image Placeholder.png'
import secondimg from '../assets/Image Placeholder (1).png'
import thirdimg from '../assets/Image.png'
import firsticon from '../assets/Asset 12 2.png'
import secondicon from '../assets/Avatar (1).png'
import thirdicon from '../assets/Avatar.png'
const DiscoverCatagories = () => {
    return (
        <div className='bg-black'>
            <div className='flex'>
                <div>
                    <h1 className='text-4xl pl-40 pt-32 font-serif text-white'>Discover More NFTs</h1>
                    <p className='text-white pl-40 font-serif pt-2 text-xl'>Explore New Trending NFTs</p>
                </div>
                <div className=' pt-36 ml-96 pl-64'>
                    <Button src={eye} title=" See All" />
                </div>
              </div>
<div className='  min-230px-sm:max-680px-sm md:min-681px-md md:max-980px-md lg:min-981px-lg lg:max-1300px-lg grid lg:grid-cols-3 mx-auto pt-20 '>
              <div className='  pl-40'>
                <DiscoverCard src={firstimg} heading='Distant Galaxy' icon={firsticon} title='MoonDancer'  />
              </div>
              <div className=' pl-20'>
              <DiscoverCard src={secondimg} heading='Life On Edena ' icon={secondicon} title='NebulaKid'  />
              </div>
              <div className=''>
              <DiscoverCard src={thirdimg} heading='AstroFiction' icon={thirdicon} title='Spaceone'  />
               
              </div>
              </div>
        </div>
    );
}

export default DiscoverCatagories;
