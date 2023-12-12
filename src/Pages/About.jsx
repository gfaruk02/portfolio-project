import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const About = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div id="about" className="bg-blue-950 mb-10">
              <div className=" py-16 my-5 text-center bg-sky-700" data-aos="fade-up-right">
                <h1 className="text-5xl text-white"><a href="https://drive.google.com/file/d/1hs_sMq2fLZqVrZOeAVoBm7Br19XR3bgl/view?usp=sharing" download="https://drive.google.com/file/d/1hs_sMq2fLZqVrZOeAVoBm7Br19XR3bgl/view?usp=sharing"> Download Resume </a></h1>
            </div>
                <div className="hero-content flex-col lg:flex-row" ></div>
            <div className="hero min-h-screen bg-blue-950" style={{
                        backgroundImage: 'url(https://i.ibb.co/pPjb0Zh/web-development-0.jpg)', backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        
                    }}>
                <div className="hero-content flex-col lg:flex-row" >

                    <div className="w-full text-white">
                        
                    <button className=" uppercase  py-2 px-5 w-36 rounded-lg bg-sky-900" data-aos="fade-down-left">About </button>
                    <h1 className="text-4xl font-semibold pt-3 pb-1">Md Golam Faruk</h1>
                    <h4 className="text-xl"> Full Stack Developer</h4>

                    <h1 className="text-2xl font-semibold pt-3 pb-1" data-aos="fade-down-right">Education</h1>
                    <p data-aos="fade-left">BSc in CSE <br />
                    Bangladesh University <br />
                   2012-2016</p>   
                        {/* <p className="py-6  text-white ">Highly skilled and motivated Full Stack Developer in creating responsive and visually captivating user
                            interfaces and growing in a collaborative team environment. Dedicated to delivering high-quality
                            code, optimizing performance, and ensuring cross-browser compatibility. I always love to learn new
                            technology and like to do challenging work</p> */}

                        <h1 className="text-2xl font-semibold pt-3 pb-1" data-aos="fade-down-right">Mission</h1>
                        <p data-aos="fade-left">My mission is to craft exceptional digital experiences through innovative and cutting-edge web development solutions. We strive to push the boundaries of creativity while delivering functional and user-centric websites that leave a lasting impact.</p>
                        <h1 className="text-2xl font-semibold pt-3 pb-1" data-aos="fade-down-right">Vision</h1>
                        <p data-aos="fade-left">I aspire to make a difference through my work.

                            My vision is to contribute to positive change, be it through accessible designs, sustainable development practices, or by enabling businesses to thrive in the digital age</p>
                        <h1 className="text-2xl font-semibold pt-3 pb-1" data-aos="fade-down-right">Commited</h1>
                        <p data-aos="fade-left">I am committed to delivering excellence in every project my undertake. Whether it is a personal blog, an e-commerce platform, or a corporate website, we put our utmost effort into every line of code and design pixel to ensure a seamless user experience.</p>


                    </div>
                    <div className="w-full h-full " >
                        
                        <img src="https://i.ibb.co/7tKrkX2/faruk-2.png" className="lg:w-[650px] lg:h-[500px] rounded-lg shadow-2xl " data-aos="fade-down-right" />
                    </div>
                </div>
            </div>
          
        </div>
    );
};

export default About;