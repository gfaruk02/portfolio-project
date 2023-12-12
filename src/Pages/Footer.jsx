
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io";

import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Footer = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div>
            <footer className="footer footer-center mt-10 p-10 text-base-content rounded bg-sky-900 ">
                <nav data-aos="fade-up-right" className="grid grid-flow-col gap-3 md:gap-5 text-white text-lg md:text-2xl font-semibold">
                    <a href="#home" className="link link-hover">Home</a>
                    <a href="#about" className="link link-hover">About us</a>
                    <a href="#projects" className="link link-hover">Projects</a>
                    <a href="#contact" className="link link-hover">Contact</a>


                </nav>
                <nav>

                    <div data-aos="fade-up-left" className="grid grid-flow-col gap-4 text-white">
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
                </nav>
                <aside>
                    <p className="text-white">Copyright © 2023 - All right reserved</p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;