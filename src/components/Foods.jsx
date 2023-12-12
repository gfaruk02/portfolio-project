import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Foods = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (
        <div data-aos="fade-up"
        data-aos-duration="3000" className='bg-white rounded-lg w-full'>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper p-2"
            >
                <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/bRH78Cw/food.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/pXGWHjL/food2.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/wQSnryt/food1.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/fkDVvyj/food3.jpg" alt="" /> </SwiperSlide>


            </Swiper>
            <div className='flex justify-evenly items-center text-black py-2 pl-2 '>
                <div>
                    <h1 className='text-2xl font-bold'> Food Sharing - Full Stack Project </h1>
                    <h2 className='text-xl pb-2'>Responsive Design</h2>
                </div>
                <div>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="py-4 px-4 rounded-full bg-sky-800 text-white text-2xl" onClick={() => document.getElementById('my_modal_4').showModal()}> <FaArrowRight /> </button>
                    <dialog id="my_modal_4" className="modal">

                        <div className="modal-box w-11/12 max-w-5xl">

                            <div>
                                <section className="dark:bg-sky-800 dark:text-gray-100">
                                    <div className="container flex flex-col justify-center  mx-auto lg:flex-row lg:justify-between">
                                        <div className="flex items-center justify-center  bg-sky-900 rounded-xl">
                                            <img className="w-full lg:h-[300px]" src="https://i.ibb.co/wQSnryt/food1.jpg" alt="" />
                                        </div>
                                        <div className="pl-1 md:pl-4 flex flex-col justify-center text-left rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                            <h1 className="text-xl font-semibold"> Description:</h1>
                                            <ul>
                                                <li> It is a MERN stack-based website for Food Sharing. </li>
                                                <li> The platform provides Donate Food, Donation for food sharing, Featured foods, details, and poor and needy peoples booking foods, Manage Foods, Food added, Quantity etc. more functionality</li>
                                            </ul>
                                            <h1 className="text-xl font-semibold">Login/Register Options:</h1>
                                            <p>Google, and manual login/register choices for user
                                                flexibility.</p>
                                            <h1 className="text-xl font-semibold">Technologies:</h1>
                                            <p> React JS, Express JS, Firebase authentication, MongoDB,
                                                Tailwind CSS, Daisy UI, Mamba UI, JWT.</p>
                                        </div>

                                    </div>
                                </section>
                            </div>


                            <div className="modal-action flex  items-center">
                                <button className=" mr-6 py-3 px-5 bg-sky-600 text-sm md:text-xl text-white rounded-lg"> <a href="https://assignment-11-7-food-sharing.web.app/" target="_blank"
                                    rel="noopener noreferrer"
                                    className="mr-6 py-3 px-5 bg-sky-600 text-sm md:text-xl text-white rounded-lg">View Live </a></button>
                                <form method="dialog">
                                    {/* if there is a button, it will close the modal */}
                                    <button className=" ml-6 btn text-rose-900 text-xl md:text-2xl">✕</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
            </div>
        </div>

    );
};

export default Foods;