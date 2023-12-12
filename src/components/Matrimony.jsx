import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Matrimony = () => {
  useEffect(()=>{
    Aos.init();
},[])
    return (
        <div data-aos="zoom-out-up" className='bg-white rounded-lg w-full'>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper p-2 "
        >
          <SwiperSlide> <img className=" h-[300px]"  src="https://i.ibb.co/NNLGSMg/matrimony2.jpg" alt="" /> </SwiperSlide>
          <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/BCzsvWG/matrimony.jpg" alt="" /> </SwiperSlide>
          <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/cgJc1FC/matrimony3.jpg" alt="" /> </SwiperSlide>
          <SwiperSlide> <img className=" h-[300px]" src="https://i.ibb.co/1KzZ31X/matrimony1.jpg" alt="" /> </SwiperSlide>


        </Swiper>
        <div className='flex justify-evenly items-center text-black py-2 pl-2 '>
          <div>
            <h1 className='text-2xl font-bold'> Matrimony - Full Stack Project </h1>
            <h2 className='text-xl pb-2'>Responsive Design</h2>
          </div>
          <div>

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <button className="py-4 px-4 rounded-full bg-sky-800 text-white text-2xl" onClick={() => document.getElementById('my_modal_2').showModal()}> <FaArrowRight /> </button>
            <dialog id="my_modal_2" className="modal">

              <div className="modal-box w-11/12 max-w-5xl">

                <div>
                  <section className="dark:bg-sky-800 dark:text-gray-100">
                    <div className="container flex flex-col justify-center  mx-auto lg:flex-row lg:justify-between">
                      <div className="flex items-center justify-center  bg-sky-900 rounded-xl">
                        <img className="w-full lg:h-[300px]" src="https://i.ibb.co/cgJc1FC/matrimony3.jpg" alt="" />
                      </div>
                      <div className="pl-1 md:pl-4 flex flex-col justify-center text-left rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-xl font-semibold"> Description:</h1>
                        <ul>
                          <li> It is a full stack-based website for Matrimony. </li>
                          <li> The platform provides biodatas, Search Your Partner, View profile, add
                            premium, Add to favorites, Success Story and a secure payment system. </li>
                        </ul>

                        <h1 className="text-xl font-semibold">Dashboard:</h1>
                        <p>Admin and user dashboard. User create biodata, and pending
                          request etc. Admin approval and the admin manages all users for efficient
                          platform management.</p>
                        <h1 className="text-xl font-semibold">Secure Stripe Payments:</h1>
                        <p>Trustworthy transactions powered by Stripe
                          integration.</p>
                        <h1 className="text-xl font-semibold">Login/Register Options:</h1>
                        <p>Google, and manual login/register choices for user
                          flexibility.</p>
                        <h1 className="text-xl font-semibold">Technologies:</h1>
                        <p>React, Node, Express, MongoDB, Firebase authentication, React
                          query, Awesome react components, Stripe payment method, Tailwind CSS,
                          Mamba UI, Material UI and many npm packages</p>
                      </div>

                    </div>
                  </section>
                </div>


                <div className="modal-action flex  items-center">
                  <button className=" mr-6 py-3 px-5 bg-sky-600 text-sm md:text-xl text-white rounded-lg"> <a href="https://matrimony-7efdc.web.app/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mr-6 py-3 px-5 bg-sky-600 text-sm md:text-xl text-white rounded-lg"> View Live </a></button>
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

export default Matrimony;