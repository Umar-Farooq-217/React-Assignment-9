import FirstCard from "../../components/firstCard/FirstCard";
import Navbar from "../../components/navbar/Navbar";
import avater from '../../components/assets/men.jpg'
import artist from '../../components/assets/Artist Card.png'
import Button from "../../components/button/Button";
import rocket from '../../components/assets/RocketLaunch.png'
import TrendingCard from "../../components/trendingCard/TrendingCard";
import Trending from "../../components/trending/Trending";
import TopCreator from "../../topcreaters/TopCreator";
import DiscoverCatagories from "../../components/discover/Discover";
import BrowseCatagories from "../../components/browseCatagories/BrowseCatagories";
import nftimg from '../../components/assets/NFT Highlight.png'
import HowItWorksCard from "../../components/howItWorksCard/HowItWorksCard";
import walletimg from '../../components/assets/Icon.png'
import collectionimg from '../../components/assets/Icon (1).png'
import earningimg from '../../components/assets/Icon (2).png'
import photo from '../../components/assets/Photo.png'
import message from '../../components/assets/EnvelopeSimple.png'
import Footer from "../../components/footer/footer";
import MagicMashrooms from "../../components/magicMashrooms/MagicMashrooms";
import icomimage from '../../components/assets/Avatar Placeholder.png'






export default function HomePage() {
    return (
        <div className="bg-black w-fit">
            <Navbar />


            {/* ***************************    Discover Digital Arts ****************************** */}


            <div className="bg-black
            min-230px-sm:max-680px-sm md:min-681px-md md:max-980px-md lg:min-981px-lg lg:max-1300px-lg
         text-white grid lg:grid-cols-2 mx-28 mt-14 md:grid-cols-2 sm:grid-cols-1 ">
                <div className="text-white   pl-10 ">
                    <h1 className="text-white text-7xl pt-10 ">Discover</h1>
                    <h1 className="text-white text-7xl"> Digital Art &  </h1>
                    <h1 className="text-white text-7xl"> Collect NFTs </h1>
                    <p className="text-white text-3xl mt-4 mr-5 tracking-wide">NFT Marketplace UI Created with Anime For  Figma.Collect,Buy and Sell Art from More than 20k NFT Artists </p>
                    <p className="text-white text-3xl mr-5">   </p>
                    <p className="text-white text-3xl mr-5"></p>
                    <button className="mt-5"><Button src={rocket} title='Get Started' /></button>
                    <div>
                        <div className="flex space-x-12   w-16 mt-3">
                            <p className="text-white text-2xl">240k+ Total Scale </p>
                            <p className="text-white text-2xl">100k+ Auctions</p>
                            <p className="text-white text-2xl">240k+ Artists</p>
                        </div>



                    </div>
                </div>
                <div className="bg-gray-600 rounded-3xl mt-14 w-[382px] md:mx-auto sm:mx-auto ml-44 border-black h-96"> <FirstCard src={icomimage} cardimg={avater} title='Animakid' /></div>


            </div>
            {/* ********************************TRENDING COLLECTIONS********************************** */}

            <Trending />
            {/* ****************************************************************** */}
            {/* ================================TOP CREATORS=================================== */}

            <div>
                <TopCreator />
            </div>
            {/* **************************************************************************************** */}

            {/* ===============================DISCOVER CATAGORIES================================= */}

            <div>
                <DiscoverCatagories />
            </div>
            {/* *************************************************************************** */}

            {/* ====================================BROWSE CATAGORIES====================================== */}
            <div>
                <BrowseCatagories />
            </div>
            {/* ********************************************************************************* */}

            {/* =============================MAGIC ,ASHROOMS============================= */}

            <div className="pt-20">
                <MagicMashrooms />

            </div>
            {/* ********************************************************************************  */}

            {/* ===========================HOW IT WORKS=============================== */}

            <div>
                <h1 className="text-white text-5xl pt-40 pl-36 font-sans font-bold ">How It Works</h1>
                <p className="text-white text-3xl font-bold pt-10 pl-36 font-serif">Find out How To Get Started</p>
                <div className="  min-230px-sm:max-680px-sm md:min-681px-md md:max-980px-md lg:min-981px-lg lg:max-1300px-lg grid lg:grid-cols-3 mx-36 gap-4 pt-10">
                    <div className="  h-[420px] rounded-3xl bg-gray-800">
                        <HowItWorksCard src={walletimg} heading='Setup Your Wallet' pera="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon on the top of right corner" />
                    </div>
                    <div className="  h-[420px] rounded-3xl bg-gray-800">
                        <HowItWorksCard src={collectionimg} heading='Create Collection' pera=" Upload Your Work and Setup Your Collection. Add a description,social links and floor price" />
                    </div>
                    <div className="  h-[420px] rounded-3xl bg-gray-800">
                        <HowItWorksCard src={earningimg} heading='Start Earning' pera="Choose Between auction and fixed-price listings. Start Earning by selling your NFTs or trading others" />
                    </div>


                </div>
            </div>
            {/* *********************************************************************************** */}

            {/* ================================JOIN WEEKLY DIGEST================================== */}
            <div className="  min-230px-sm:max-680px-sm md:min-681px-md md:max-980px-md lg:min-981px-lg lg:max-1300px-lg
            grid lg:grid-cols-2 bg-gray-800 rounded-3xl mt-36 mx-36">
                <img className=" pl-36 py-10" src={photo} alt="pic" />
                <div className="">
                    <h1 className="text-white text-5xl  font-bold pt-14 w-96">Join Our Weekly Digest</h1>
                    <p className="text-white text-2xl w-[450px]   pt-3">Get exclusive promotions & Straight towards to your inbox </p>
                    <div className="flex   pt-3 "><input className="rounded-2xl font-bold    w-80 bg-white " type="email" placeholder="      Enter Your Email here" /><Button className='relative right-10' src={message} title='Subscribe' /></div>
                </div>
            </div>

            {/* ******************************************************************************************** */}

            {/* ===========================FOOTER=========================== */}
            <div>
                <Footer />
            </div>








        </div>
    )
}