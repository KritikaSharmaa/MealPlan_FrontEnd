import Navbar from "./Navbar.jsx"
import hero_curve_bg from "../assets/hero_curve_bg.png"
const Home = () => {
    return <>
        <div className='h-screen relative overflow-hidden'>
            <Navbar />
            <div className=' bg-violet-200 h-full w-full'>
                <div className="h-full w-full landing-hero-sm m-730px:landing-hero bg-cover bg-center bg-no-repeat">
                    <div className='w-full centerIt flex flex-col justify-center items-center'>
                        <div className='500px:text-5xl text-6xl flex flex-col justify-center items-center leading-normal font-bold'>
                            <span className='text-[#343a40]'>We Prioritize</span>
                            <span className='text-GreenText'>Your Health</span>
                        </div>
                        <span className='500px:text-md text-lg 500px:py-2 py-3 500px:px-6 px-8 text-white rounded-3xl bg-GreenBack hover:bg-GreenDark hover:border-[#5fa138] hover:shadow-[0_0_15px_0_#77c14b;] mt-5 cursor-pointer font-semibold tracking-wider'>EXPLORE OUR PLANS</span>
                    </div>
                </div>
            </div>
            <img src={hero_curve_bg} alt="img" className="absolute bottom-0 left-0"/>
        </div>
    </>
}
export default Home;