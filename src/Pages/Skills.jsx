import { FaSwatchbook } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";
import { FaPersonCirclePlus } from "react-icons/fa6";
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const Skills = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div className="text-white mb-10">
            <section className="m-4 md:m-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto p-4 my-6 space-y-2 text-center">
                    <h2 className="text-5xl font-bold">Set of My Skills</h2>
                </div>
                <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                    <div data-aos="fade-right" className="flex flex-col items-center p-4">
                      
                        <GiSkills className="w-8 h-8 dark:text-violet-400" />
                        <h3 className="my-3 text-2xl font-semibold">Expertise</h3>
                        <div className="space-y-1 leadi">
                            <p> HTML, CSS, Tailwind, Daisy UI, </p>
                            <p>Mamba UI, JavaScript, ES6, </p>
                            <p>React, ExpressJS, MongoDB</p>
                        </div>
                    </div>
                    <div data-aos="fade-up" className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-2xl font-semibold">Comfortable</h3>
                        <div className="space-y-1 leadi">
                            <p>Firebase, Rest APIs, JWT,</p>
                            <p>Bootstrap, Next JS</p>
                            {/* <p>Blanditiis aut mollitia ex</p> */}
                        </div>

                    </div>
                    <div data-aos="fade-down" className="flex flex-col items-center p-4">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                            <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd"></path>
                        </svg>
                        <h3 className="my-3 text-2xl font-semibold">Familiar</h3>
                        <div className="space-y-1 leadi">
                            <p>Material UI, Node JS,
                                Stripe</p>
                            {/* <p>Tempore quasi porro</p>
				<p>Blanditiis aut mollitia ex</p> */}
                        </div>
                    </div>
                    <div className="flex flex-col items-center p-4">
                    <FaSwatchbook className="w-8 h-8 dark:text-violet-400" />
                        <h3 className="my-3 text-2xl font-semibold">Tools</h3>
                        <div className="space-y-1 leadi">
                            <p>VS Code, Git, Figma,</p>
                            <p>Surge, Vercel</p>
                            {/* <p>Blanditiis aut mollitia ex</p> */}
                        </div>
                    </div>
                    <div data-aos="fade-left" className="flex flex-col items-center py-4 px-2">
                    
                        <FaPersonCirclePlus className="w-8 h-8 dark:text-violet-400" />
                        <h3 className="my-3 text-2xl font-semibold">Interpersonal
                            Skills
                        </h3>
                        <div className="space-y-1 leadi">
                            <p>Teamwork, Time management,
                            Adaptability,
                                Well Communication, Hard Working.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Skills;