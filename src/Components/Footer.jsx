import { RiGithubFill, RiLinkedinBoxFill, RiTwitterFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";
const Footer = () => {
    return <>
        <div className="w-full bg-GreenBack py-10 text-white leading-relaxed flex flex-col justify-center items-center">
            <div className="w-1/4 text-3xl flex justify-evenly items-center cursor-pointer">
                <a href="https://github.com/KritikaSharmaa"><RiGithubFill /></a>
                <a href="https://www.linkedin.com/in/kritikash22/"><RiLinkedinBoxFill /></a>
                <a href="#"><RiTwitterFill /></a>
                <a href="mailto:erkritika.sharmaa@gmail.com"><GrMail /></a>
            </div>
            <ul className="flex 500px:flex-col justify-center items-center font-bold py-4 cursor-pointer">
                <li className="px-8 650px:px-2">• HOME</li>
                <li className="px-8 650px:px-2">• FEATURES</li>
                <li className="px-8 650px:px-2">• MEAL PLANS</li>
                <li className="px-8 650px:px-2">• CONTACT US</li>
            </ul>
            <div>Copyright © 2023 EVERYONE. All rights reserved.</div>
        </div>
    </>
}
export default Footer;