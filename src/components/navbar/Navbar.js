import "./Navbar.css"
import "font-awesome/css/font-awesome.css"
import navbarImg from "../assets/Storefront.png"
import Button from "../button/Button"
import userimg from '../assets/User.png'
function Navbar(){
    return(
<header class="header bg-black ">
       <div className= "flex h-32 ">
        <div className="pt-14 h-20 w-1/4  "><a href="#" className="flex ml-12"><img src={navbarImg} className="h-9 flex "  alt="pic" /><span className="cursor-pointer font-serif ml-3 text-white text-2xl  ">NFT MarketPlace</span></a></div>
        <ul className="flex justify-end space-x-10  mt-10 ml-80 ">
            <li className="cursor-pointer font-serif mt-6 text-white text-xl">MarketPlace</li>
            <li className="cursor-pointer font-serif mt-6 text-white text-xl">Rankings</li>
            <li className="cursor-pointer font-serif mt-6 text-white text-xl">Connect A Wallet</li>
            <li className="pt-2"><Button src={userimg} title='Sign up' /></li>
        </ul>
       </div>



    </header>

    )
}
export default Navbar