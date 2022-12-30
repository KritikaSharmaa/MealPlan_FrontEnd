import { useState } from "react";
import HMP_Logo from "../assets/HMP_Logo.png";
import logo_mini from "../assets/logo_mini.png";
import { MdMenu } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [clickedMenu, setclickedMenu] = useState(false);
    const [clickAccount, setclickAccount] = useState(false);
    return <>
        <div className="absolute top-0 left-0 w-full z-10 flex py-3 shadow-md bg-white">
            <div className="w-4/12 flex justify-start items-center m-730px:hidden text-GreyText" onClick={() => setclickedMenu(!clickedMenu)}>
                <MdMenu className="md:hidden ml-10 text-2xl" />
            </div>
            <div className="w-4/12 flex justify-center items-center">
                <div className="w-8/12 h-6/12">
                    <img src={HMP_Logo} alt="web_logo" className="h-full w-full contain" />
                </div>
            </div>
            <div className="w-8/12 flex flex-col cursor-pointer 730px:hidden">
                <div className="flex justify-end pr-10 mb-2">
                    <div className="border border-GreenBack text-GreenText px-[1.15rem] py-[0.35rem] flex justify-center align-middle rounded-md mr-2 text-sm hover:text-white hover:bg-GreenDark hover:border-[#5fa138] hover:shadow-[0_0_15px_0_#77c14b]">SIGN IN</div>
                    <div className="border border-GreenBack px-[1.15rem] py-[0.35rem] flex justify-center align-middle rounded-md text-sm bg-GreenBack text-white hover:bg-GreenDark hover:border-[#5fa138] hover:shadow-[0_0_15px_0_#77c14b]">SIGN UP</div>
                </div>
                <ul className="flex justify-end pr-10 font-bold text-GreyText">
                    <li className="mr-8 text-sm hover:text-black">HOME</li>
                    <li className="mr-8 text-sm hover:text-black">FEATURES</li>
                    <li className="mr-8 text-sm hover:text-black">PLANS</li>
                    <li className="text-sm hover:text-black">CONTACT US</li>
                </ul>
            </div>
            <div className="w-4/12 flex justify-end items-center m-730px:hidden">
                <FaUserCircle className="!text-2xl text-GreyText mr-10" onClick={() => setclickAccount(!clickAccount)} />
            </div>
        </div>
        <div className={`h-full w-full z-10 bg-[#00000099] absolute top-0 left-0 overflow-hidden ${clickedMenu || clickAccount ? '' : 'animate-hideBackAnim stopAnim'} flex flex-col`}>
            <div className={`h-full z-20 p-4 350px:w-full w-3/4 bg-white absolute top-0 left-0 ${clickedMenu ? 'animate-slideOpenLeft' : 'animate-slideCloseLeft stopAnim'}`}>
                <div className="w-full h-[3rem] flex justify-end text-2xl">
                    <RxCross2 onClick={() => setclickedMenu(!clickedMenu)} />
                </div>
                <div className="w-full h-1/6 flex justify-center py-2">
                    <img src={logo_mini} alt="logo" className="h-full cover" />
                </div>
                <ul className="w-full h-4/6 py-10 text-GreyText font-semibold text-sm">
                    <li className="py-3 border-b-2 border-[#0000001a]">HOME</li>
                    <li className="py-3 border-b-2 border-[#0000001a]">FEATURES</li>
                    <li className="py-3 border-b-2 border-[#0000001a]">MEAL PLANS</li>
                    <li className="py-3 border-b-2 border-[#0000001a]">CONTACT US</li>
                </ul>
            </div>
            <div className={`h-full z-20 p-4 350px:w-full w-3/4 bg-white absolute top-0 right-0 ${clickAccount ? 'animate-slideOpenRight' : 'animate-slideCloseRight stopAnim'} flex flex-col`}>
                <div className="w-full h-[3rem] flex justify-end text-2xl">
                    <RxCross2 onClick={() => setclickAccount(!clickAccount)} />
                </div>
                <div className="w-full h-1/6 flex justify-center py-2">
                    <img src={logo_mini} alt="logo" className="h-full cover" />
                </div>
                <div className="w-full h-auto pt-6 grid grid-rows-2 gap-2">
                    <div className="w-full border border-GreenBack text-white bg-GreenBack hover:bg-GreenDark py-1 text-center rounded-sm text-sm">SIGN IN</div>
                    <div className="w-full border border-GreenBack text-GreenText hover:bg-GreenDark py-1 text-center rounded-sm text-sm">SIGN UP</div>
                </div>
            </div>
        </div>
    </>
}
export default Navbar;