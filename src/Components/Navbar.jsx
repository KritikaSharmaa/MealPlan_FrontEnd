import { useState } from "react";
import HMP_Logo from "../assets/HMP_Logo.png";

const Navbar = () => {
    const [clickedMenu, setclickedMenu] = useState(false);
    const [clickAccount, setclickAccount] = useState(false);
    return <>
        <div className="flex py-3 shadow-[0.3px_5px_7.2px_0.8px_rgb(77,77,77,0.05)]">
            <div className="w-4/12 flex justify-start items-center m-730px:hidden text-GreyText" onClick={() => setclickedMenu(!clickedMenu)}>
                <span className="md:hidden material-symbols-outlined ml-10">menu</span>
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
            <div className="w-4/12 flex justify-end mr-10 m-730px:hidden">
                <span className="material-symbols-outlined !text-4xl text-GreyText" onClick={()=>setclickAccount(!clickAccount)}>account_circle</span>
            </div>
        </div>
        <div className={`h-full w-1/2 bg-green-300 absolute top-0 left-0 ${clickedMenu ? 'animate-slideOpenLeft' : 'animate-slideCloseLeft stopAnim'}`}>
            <span className="material-symbols-outlined" onClick={()=>setclickedMenu(!clickedMenu)}>close</span>
        </div>
        <div className={`h-full w-1/2 bg-blue-300 absolute top-0 right-0 ${clickAccount ? 'animate-slideOpenRight' : 'animate-slideCloseRight stopAnim'}`}>
        <span className="material-symbols-outlined" onClick={()=>setclickAccount(!clickAccount)}>close</span>
        </div>
    </>
}
export default Navbar;