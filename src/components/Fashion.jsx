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

const Fashion = () => {
    useEffect(()=>{
        Aos.init();
    },[])
    return (

        <div data-aos="zoom-in" className='bg-white rounded-lg w-full'>
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
                <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/W0NvBxR/F-F-FASHION-SHOP2.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/7yS3gwd/F-F-FASHION-SHOP.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/ZTD0sNx/F-F-FASHION-SHOP4.jpg" alt="" /> </SwiperSlide>
                <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/1zhwQqX/F-F-FASHION-SHOP3.jpg" alt="" /> </SwiperSlide>


            </Swiper>
            <div className='flex justify-evenly items-center text-black py-2 pl-2 '>
                <div>
                    <h1 className='text-2xl font-bold'> F&F Fashion - Full Stack Project </h1>
                    <h2 className='text-xl pb-2'>Responsive Design</h2>
                </div>
                <div>

                    {/* You can open the modal using document.getElementById('ID').showModal() method */}
                    <button className="py-4 px-4 rounded-full bg-sky-800 text-white text-2xl" onClick={() => document.getElementById('my_modal_5').showModal()}> <FaArrowRight /> </button>
                    <dialog id="my_modal_5" className="modal">

                        <div className="modal-box w-11/12 max-w-5xl">

                            <div>
                                <section className="dark:bg-sky-800 dark:text-gray-100">
                                    <div className="container flex flex-col justify-center  mx-auto lg:flex-row lg:justify-between">
                                        <div className="flex items-center justify-center  bg-sky-900 rounded-xl">
                                            <img className="w-full lg:h-[300px]" src="https://i.ibb.co/7yS3gwd/F-F-FASHION-SHOP.jpg" alt="" />
                                        </div>
                                        <div className="pl-1 md:pl-4 flex flex-col justify-center text-left rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                                            <h1 className="text-xl font-semibold"> Description:</h1>
                                            <ul className="list-disc">
                                                <li> It is an Ecommerce base fashion and apparel website. </li>
                                                <li> The website provides most popular brand product, Product details Womens Mens, new arrival and Kids fashion collection </li>
                                                <li>Add new product, Add to cart, and manage cart </li>
                                            </ul>
                                            <h1 className="text-xl font-semibold">Login/Register Options:</h1>
                                            <p>Google, and manual login/register choices for user
                                                flexibility.</p>
                                            <h1 className="text-xl font-semibold">Technologies:</h1>
                                            <p> React JS, Express JS, Firebase, MongoDB, Tailwind. JWT</p>
                                        </div>

                                    </div>
                                </section>
                            </div>


                            <div className="modal-action flex  items-center">
                                <button className=" mr-6 py-3 px-5 bg-sky-600 text-sm md:text-xl text-white rounded-lg"> <a
                                    href="https://assignment-10-fashion-client.web.app/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mr-6 py-3 px-3 md:px-5  bg-sky-600 text-sm md:text-xl text-white rounded-lg"
                                >
                                   View Live
                                </a></button>
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

export default Fashion;