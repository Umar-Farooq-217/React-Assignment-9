import TrendingCard from "../trendingCard/TrendingCard";
import primary from '../assets/Primary Photo Placeholder-1.png';
import secondary from '../assets/Secondary Photo Placeholder.jpg'
import bhaloimg from '../assets/Secondary Photo Placeholder (1).jpg'
import dog from '../assets/dog.jpg'
import firstimg from '../assets/first.png';
import avatar from '../assets/Avatar.png'
import frontside from '../assets/front.png'
import backside from '../assets/back.png'
import avatarplace  from '../assets/Avatar Placeholder.png';
import imgPlaceholder from '../assets/Image Placeholder (1).png';
import card3rd from '../assets/card3rd.png'
export default function Trending() {
    return (
        <div className="bg-black">
            <h1 className="text-white text-5xl mt-20 pt-10 pl-36">Trending Collections</h1>
            <p className="text-white text-2xl pl-36 pt-2">Checkout Our Weekly Updated Trending Collections</p>
           
            <div className="grid lg:grid-cols-3 md:grid-cols-2  mx-36 pt-10 sm:grid-cols-1
              min-230px-sm:max-680px-sm md:min-681px-md md:max-980px-md lg:min-981px-lg lg:max-1300px-lg sm:mx-52 ">
                <div>
                    <TrendingCard src={dog} src1={secondary} src2={bhaloimg} title='DSGN Animals' src3={secondary} icon='MrFox' value='1025+' />
                </div>
                <div>
                    <TrendingCard src={primary} src1={firstimg} src2={firstimg} title='Magic Mashrooms' src3={avatar} icon='Shroomie' value='1025+' />
                </div>
                <div className="">
                    <TrendingCard src={card3rd} src1={frontside} src2={backside} title='Disco Machinese ' src3={avatarplace} icon='BeKin2Robots' value='1025+' />
                </div>
            </div>
        </div>
    )
}