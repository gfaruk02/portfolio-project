import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Header = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100 h-[100vh]">
                <div className="container flex flex-col justify-center px-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center px-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-4xl font-bold leadi sm:text-5xl uppercase text-white" data-aos="fade-right">Hay!, I am <br />
                            GOLAM Faruk
                        </h1>
                        <h1 data-aos="fade-left" className="text-4xl font-bold leadi sm:text-5xl text-sky-600">
                            I AM A  <br />
                            <span className="font-extrabold">FULL STACK DEVELOPER</span>
                        </h1>
                        <p data-aos="fade-up-right" className="mt-3 mb-8 text-lg sm:mb-12 text-white">I merge functionality to build responsive websites. Highly skilled and motivated Full Stack Developer in creating responsive and visually captivating user interfaces and growing in a collaborative team environment. I always love to learn new technology and like to do challenging work. Lets connect and craft innovative solutions together!
                        </p>
                        <div data-aos="fade-down-left" className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-white">
                            <a rel="noopener noreferrer" href="#" className=" flex px-8 py-3 text-lg rounded-2xl font-semibold bg-sky-600 " data-aos="fade-down-right">GET IN TOUCH <span className="py-2 pl-2"><FaArrowRight /></span> </a>

                            <div className="flex ">
                            <a className="ml-2 py-4 px-4 rounded-full text-2xl bg-sky-700" href="https://www.facebook.com/mdgolam.faruk.9/"
                            target="_blank"
                            rel="noopener noreferrer"> 
                            <span > 
                            <FaFacebookF />
                            </span>
                            </a>
                           
                            <a className="ml-2 py-4 px-4 rounded-full text-2xl bg-rose-700" href=" https://github.com/gfaruk02"
                            target="_blank"
                            rel="noopener noreferrer"> 
                            <span> 
                            <IoLogoGithub />
                            </span>
                            </a>
                            <a className="ml-2 py-4 px-4 rounded-full text-2xl bg-sky-700" href=" https://www.linkedin.com/in/golam-faruk-77a641a8/"
                            target="_blank"
                            rel="noopener noreferrer"> 
                            <span> 
                            <FaLinkedinIn />
                            </span>
                            </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-16 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:mr-36">
                        <div className="flex flex-col max-w-md p-12 w-full" style={{
                            backgroundImage: 'url(https://i.ibb.co/pPjb0Zh/web-development-0.jpg)', backgroundSize: 'cover',
                            backgroundPosition: 'center',

                        }}>
                            <img  data-aos="zoom-in-up" src="https://i.ibb.co/2PnQm5n/faruk.png" alt="" className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 dark:bg-gray-500 aspect-square w-72" />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Header;