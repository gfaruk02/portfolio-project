import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
<div   style={{
                backgroundImage: 'url(https://i.ibb.co/T4wzG7L/maxresdefault.jpg)', backgroundSize: 'cover',
                backgroundPosition: 'center',

            }}>
<div id="about" className="pt-5  my-10 lg:w-3/4 mx-auto"   >
      

            <div className='text-center text-white'>
                <button className=" uppercase text-2xl shadow-sm shadow-sky-300  py-2 px-5 w-48 rounded-lg bg-sky-900">About </button>
                <h1 data-aos="fade-down" className="text-4xl font-semibold pt-3 pb-1">Md Golam Faruk</h1>
                <h4 className="text-xl"> Full Stack Developer</h4>

            </div>
            <ul className="p-4 lg:p-8 text-gray-100">
                <li>
                    <article className=''>
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-4 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Bachelor of Science in Computer Science and Engineering (B.Sc in CSE)</h3>
                            <h1 className="row-start-1 text-xl mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"> Education</h1>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                                Bangladesh University <br />
                                2012-2016</p>
                        </a>
                    </article>
                </li>
                <li>
                    <article>
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-4 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Mission as Developer</h3>
                            <h1 className="row-start-1 text-xl mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">Mission</h1>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                                My mission is to craft exceptional digital experiences through innovative and cutting-edge web development solutions. We strive to push the boundaries of creativity while delivering functional and user-centric websites that leave a lasting impact.</p>
                        </a>
                    </article>
                </li>
                <li>
                    <article>
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-4 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Vision as Developer</h3>
                            <h1 className="row-start-1 text-xl mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">Vision</h1>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                                I aspire to make a difference through my work. My vision is to contribute to positive change, be it through accessible designs, sustainable development practices, or by enabling businesses to thrive in the digital age</p>
                        </a>
                    </article>
                </li>
                <li>
                    <article>
                        <a rel="noopener noreferrer" href="#" className="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-4 xl:grid-cols-12 hover:dark:bg-gray-900">
                            <h3 className="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9">Commitments</h3>
                            <h1 className="row-start-1 text-xl mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400">Commited</h1>
                            <p className="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300">
                                I am committed to delivering excellence in every project my undertake. Whether it is a personal blog, an e-commerce platform, or a corporate website, we put our utmost effort into every line of code and design pixel to ensure a seamless user experience.</p>
                        </a>
                    </article>
                </li>
            </ul>






















            {/* <div className=" py-16 my-5 text-center bg-sky-700" data-aos="fade-up-right">
                <h1 className="text-5xl text-white"><a href="https://drive.google.com/file/d/1hs_sMq2fLZqVrZOeAVoBm7Br19XR3bgl/view?usp=sharing" download="https://drive.google.com/file/d/1hs_sMq2fLZqVrZOeAVoBm7Br19XR3bgl/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                > Download Resume </a></h1>
            </div> */}
            <div className="hero min-h-screen bg-blue-950"
            // style={{
            //     backgroundImage: 'url(https://i.ibb.co/T4wzG7L/maxresdefault.jpg)', backgroundSize: 'cover',
            //     backgroundPosition: 'center',

            // }}

            >
                <div className="hero-content flex-col lg:flex-row" >

                    <div className="w-full text-white" data-aos="fade-left">


                        <h1 data-aos="fade-down" className="text-2xl font-semibold pt-3 pb-1">Education</h1>
                        <p data-aos="fade-up-left">BSc in CSE</p>
                        <p>Bangladesh University</p>
                        <p>2012-2016</p>
                        {/* <p className="py-6  text-white ">Highly skilled and motivated Full Stack Developer in creating responsive and visually captivating user
                            interfaces and growing in a collaborative team environment. Dedicated to delivering high-quality
                            code, optimizing performance, and ensuring cross-browser compatibility. I always love to learn new
                            technology and like to do challenging work</p> */}

                        <h1 data-aos="fade-down" className="text-2xl font-semibold pt-3 pb-1">Mission</h1>
                        <p data-aos="fade-up-left">My mission is to craft exceptional digital experiences through innovative and cutting-edge web development solutions. We strive to push the boundaries of creativity while delivering functional and user-centric websites that leave a lasting impact.</p>
                        <h1 data-aos="fade-down" className="text-2xl font-semibold pt-3 pb-1">Vision</h1>
                        <p data-aos="fade-up-left">I aspire to make a difference through my work.

                            My vision is to contribute to positive change, be it through accessible designs, sustainable development practices, or by enabling businesses to thrive in the digital age</p>
                        <h1 data-aos="fade-down" className="text-2xl font-semibold pt-3 pb-1">Commited</h1>
                        <p data-aos="fade-up-left">I am committed to delivering excellence in every project my undertake. Whether it is a personal blog, an e-commerce platform, or a corporate website, we put our utmost effort into every line of code and design pixel to ensure a seamless user experience.</p>


                    </div>
                    <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1500" className="w-full h-full " >

                        <img src="https://i.ibb.co/7tKrkX2/faruk-2.png" className="lg:w-[650px] lg:h-[500px] " />
                    </div>
                    {/* <div className="avatar">
  <div className="w-24 mask mask-squircle">
    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
  </div>
</div> */}

                </div>
            </div>

        </div>
</div>
    );
};

export default About;