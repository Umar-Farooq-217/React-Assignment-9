import Button from "../components/button/Button";
import TopCard from "../components/topCard/TopCard";
import avatar1 from '../components/assets/Artist Avatar.png'
import rocket from '../components/assets/RocketLaunch.png'
import avatar2 from '../components/assets/Artist Avatar (1).png'
import avatar3 from '../components/assets/Artist Avatar (2).png'
import avatar4 from '../components/assets/Artist Avatar (3).png'
import avatar5 from '../components/assets/Artist Avatar (4).png'
import avatar6 from '../components/assets/Artist Avatar (5).png'
import avatar7 from '../components/assets/Artist Avatar (6).png'
import avatar8 from '../components/assets/Artist Avatar (7).png'
import avatar9 from '../components/assets/Artist Avatar (8).png'
import avatar10 from '../components/assets/Artist Avatar (9).png'
import avatar11 from '../components/assets/Artist Avatar (10).png'


export default function TopCreator() {
    const setting = {
        backgroundColor: "black",
        border: "2px solid gray"
    }
    return (
        <div className="bg-black">
            <div className="flex justify-center">
                <div>
                    <h1 className="text-5xl pt-20 pl-48 text-white">TOP CREATORS</h1>
                    <p className="text-white pt-2 text-xl pl-48">Checkout Top Rated Creators On The NFT Marketplace</p>
                </div>
                <div className=" pt-28 pl-80"><Button src={rocket} title='View Rankings' /></div></div>
            <div className="  min-230px-sm:max-680px-sm md:min-681px-md md:max-980px-md lg:min-981px-lg lg:max-1300px-lg grid lg:grid-cols-4 mx-40 mt-14 justify-center gap-4 md:grid-cols-2 md:mx-auto px-36  ">
                <div className="">
                    <TopCard number={1} src={avatar1} heading='Keepitreal' />
                    </div>
                <div>
                    <TopCard number={2} src={avatar2} heading='DigiLab' />
                    </div>
                <div>
                    <TopCard number={3} src={avatar3} heading='GravityOne' />
                    </div>
                <div>
                    <TopCard number={4} src={avatar4} heading='Juanie' />
                    </div>
                <div>
                    <TopCard number={5} src={avatar5} heading='BlueWhale' />
                    </div>
                <div>
                    <TopCard number={6} src={avatar6} heading='MrFox' />
                    </div>
                <div>
                    <TopCard number={7} src={avatar7} heading='Shroomie' />
                    </div>
                <div>
                    <TopCard number={8} src={avatar8} heading='Robotica' />
                    </div>
                <div>
                    <TopCard number={9} src={avatar9} heading='RustyRobot' />
                    </div>
                <div>
                    <TopCard number={10} src={avatar10} heading='Animakid' />
                    </div>
                <div>
                    <TopCard number={11} src={avatar11} heading='Dotgu' />
                    </div>
                <div>
                    <TopCard number={12} src={avatar1} heading='Keepitreal' />
                    </div>
                    </div>
        </div>
    )
}