import React from 'react';
import BrowseCatagoriesCard from '../browseCatagoriesCard/BrowseCatagoriesCard';
import firstimg from '../assets/Photo & Icon.png'
import secondimg from '../assets/Category Icon.png'
import thirdimg from '../assets/Photo & Icon (1).png'
import fourimg from '../assets/Photo & Icon (2).png'
import fifthimg from '../assets/Photo & Icon (3).png'
import sixthimg from '../assets/Photo & Icon (4).png'
import seventhimg from '../assets/Photo & Icon (5).png'
import eighthimg from '../assets/Photo & Icon (6).png'

const BrowseCatagories = () => {
    return (
        <div>
            <h1 className='text-white text-5xl font-serif pt-40 pl-36'>Browse Catagories</h1>
            <div className='  min-230px-sm:max-680px-sm md:min-681px-md md:max-980px-md lg:min-981px-lg lg:max-1300px-lg grid lg:grid-cols-4 gap-4 pl-36 pr-36 pt-16'>
                <div className='  rounded-3xl'>
                    <BrowseCatagoriesCard src={firstimg}title='Art' />
                </div>
                <div>
                    <BrowseCatagoriesCard src={secondimg}title='Collection' />
                </div>
                <div>
                    <BrowseCatagoriesCard src={thirdimg}title='Music' />
                </div>
                <div>
                    <BrowseCatagoriesCard src={fourimg}title='Photography' />
                </div>
                <div>
                    <BrowseCatagoriesCard src={fifthimg}title='Video' />
                </div>
                <div>
                    <BrowseCatagoriesCard src={sixthimg}title='Utility' />
                </div>
                <div>
                    <BrowseCatagoriesCard src={seventhimg}title='Sports' />
                </div>
                <div>
                    <BrowseCatagoriesCard src={eighthimg}title='Virtual Worlds' />
                </div>
            </div>
        </div>
    );
}

export default BrowseCatagories;
