import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";
import { FaArrowRight } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'


const Header = () => {
    useEffect(() => {
        Aos.init();
    }, [])

    const [text] = useTypewriter({
        words: ['FULL STACK ', 'MERN STACK ', 'WEB', 'FRONT-END WEB', 'BACK-END WEB'],
        loop: {},
        typeSpeed:70,
        deleteSpeed:50,
        delaySpeed:1000,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
            <section className="dark:bg-gray-800 dark:text-gray-100 ">
                <div className="container flex flex-col justify-center px-4 mx-auto sm:py-12 lg:pt-16 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center px-4 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left md:mb-20 lg:mb-5">
                        <h1 data-aos="fade-right" className="text-4xl font-bold leadi sm:text-5xl uppercase text-white">Hay!, I am <br />
                            GOLAM Faruk
                        </h1>
                        <h1 data-aos="fade-left" className="text-4xl font-bold leadi sm:text-5xl text-sky-600">
                            I AM A  <br /> 
                            <span className="font-extrabold text-sky-500">{text}</span>
                             <Cursor cursorColor='sky' />
                             <br />
                            <span >DEVELOPER</span>
                        </h1>
                        <p data-aos="fade-down" className="mt-3 mb-8 text-lg sm:mb-12 text-white">I merge functionality to build responsive websites. Highly skilled and motivated Full Stack Developer in creating responsive and visually captivating user interfaces and growing in a collaborative team environment. I always love to learn new technology and like to do challenging work. Lets connect and craft innovative solutions together!
                        </p>
                        <div data-aos="fade-down-right" className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start text-white">
                            <a rel="noopener noreferrer" href="#" className=" flex px-8 py-3 text-lg rounded-2xl font-semibold bg-sky-600 ">GET IN TOUCH <span className="py-2 pl-2"><FaArrowRight /></span> </a>

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
                    <div data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom" className="flex items-center justify-center p-6 my-12 lg:mt-16 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 lg:mr-36">
                        <div className="flex flex-col max-w-md p-12 w-full" 
                        // style={{
                        //     backgroundImage: 'url(https://i.ibb.co/pPjb0Zh/web-development-0.jpg)', backgroundSize: 'cover',
                        //     backgroundPosition: 'center',

                        // }}
                        >
                            <div className="rounded-full shadow-md shadow-sky-400 ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://i.ibb.co/2PnQm5n/faruk.png" alt="" className="flex-shrink-0 object-cover rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-2xl shadow-sky-400" />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    );
};

export default Header;