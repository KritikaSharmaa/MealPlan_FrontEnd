import { BsFillCalendarCheckFill } from "react-icons/bs";
import { FaTruck } from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";


const Features = () => {
    return <>
        <div className="h-auto pt-[5rem] flex flex-col">
            <div className="font-bold">
                <div className="w-2/4 font-bold text-4xl mx-auto flex justify-center items-center"><span className="text-GreyText mr-4 tracking-wide">AWSOME</span><span className="text-GreenText">FEATURES</span></div>
                <div className="w-[8rem] mx-auto mt-4">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 220 20" enable-background="new 0 0 220 20" xml:space="preserve">
                        <path fill="none" stroke="#81E113" stroke-width="3.0702" stroke-linecap="round" stroke-miterlimit="10" d="M217,2.631  c0,0-123.272-5.31-214,14.869" />
                    </svg>
                </div>
            </div>
            <div className="p-[5rem] 1070px:!px-[1.5rem] grid 970px:grid-cols-1 970px:w-3/4 500px:w-full 970px:m-auto grid-cols-3 1070px:gap-5 gap-10 cursor-default">
                <div className="bg-white flex flex-col shadow-[#0000001a_0px_0px_5px_0px,#0000001a_0px_0px_1px_0px] hover:shadow-2xl hover:scale-[1.08] p-8 transition-all delay-100 ease-in rounded-lg">
                    <div className="text-5xl text-GreenBack mx-auto"><BsFillCalendarCheckFill/></div>
                    <div className="text-GreyText font-bold py-5 mx-auto">365 DAYS/YEAR</div>
                    <div className="text-GreyText">Never cook again! We really mean that. Our subscription plans include up to 365 days/year of coverage and you can also choose to order more flexibly if that is your style.</div>
                </div>
                <div className="bg-white flex flex-col shadow-[#0000001a_0px_0px_5px_0px,#0000001a_0px_0px_1px_0px] hover:shadow-2xl hover:scale-[1.08] p-8 transition-all delay-100 ease-in rounded-lg">
                    <div className="text-5xl text-GreenBack mx-auto"><FaTruck/></div>
                    <div className="text-GreyText font-bold py-5 mx-auto">30 MINUTES OR FREE</div>
                    <div className="text-GreyText">You're only twenty minutes away from your delicious and super healthy meals delivered right to your home. We work with the best chefs in each town to ensure that you're 100% happy.</div>
                </div>
                <div className="bg-white flex flex-col shadow-[#0000001a_0px_0px_5px_0px,#0000001a_0px_0px_1px_0px] hover:shadow-2xl hover:scale-[1.08] p-8 transition-all delay-100 ease-in rounded-lg">
                    <div className="text-5xl text-GreenBack mx-auto"><RiPlantFill/></div>
                    <div className="text-GreyText font-bold py-5 mx-auto">100% ORGANIC</div>
                    <div className="text-GreyText">All our vegetables are fresh, organic and local. Animals are raised without added hormones or antibiotics. Good for your health, the environment, and it also tastes better!</div>
                </div>
            </div>
        </div>
    </>
}
export default Features;