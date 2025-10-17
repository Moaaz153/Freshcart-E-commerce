import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import homeSliderImg from "../../assets/home-slider-1.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

export default function HomeSlider() {
    return (
        <>
            <Swiper
                modules={[Pagination, Navigation, Autoplay]}
                loop={true}
                pagination = {{clickable: true}}
                navigation={true}
                autoplay={{ delay: 3000 }}  >
                <SwiperSlide>
                    <div style={{backgroundImage: `url('${homeSliderImg}')` , backgroundSize: "cover", backgroundPosition: "center"}}>
                        <div className="layer py-28 bg-gradient-to-r from-primary-600/95 to-primary-600/40">
                            <div className="container text-white space-y-4">
                                <h2 className='text-2xl font-bold'>Fresh Products <br/> Delivered to Your Door</h2>
                                <p>Get 20% off on your first order with code: FRESH20</p>
                                <div className='space-x-3'>
                                    <button className='btn text-primary-600 hover:bg-gray-100 border-2 border-white bg-white'>Shop now</button>
                                    <button className='btn hover:text-primary-600 text-white hover:bg-white border-2 border-white bg-transparent'>View Deals</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage: `url('${homeSliderImg}')` , backgroundSize: "cover", backgroundPosition: "center"}}>
                        <div className="layer py-28 bg-gradient-to-r from-primary-600/95 to-primary-600/40">
                            <div className="container text-white space-y-4">
                                <h2 className='text-2xl font-bold'>Fresh Products <br/> Delivered to Your Door</h2>
                                <p>Get 20% off on your first order with code: FRESH20</p>
                                <div className='space-x-3'>
                                    <button className='btn text-primary-600 hover:bg-gray-100 border-2 border-white bg-white'>Shop now</button>
                                    <button className='btn hover:text-primary-600 text-white hover:bg-white border-2 border-white bg-transparent'>View Deals</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{backgroundImage: `url('${homeSliderImg}')` , backgroundSize: "cover", backgroundPosition: "center"}}>
                        <div className="layer py-28 bg-gradient-to-r from-primary-600/95 to-primary-600/40">
                            <div className="container text-white space-y-4">
                                <h2 className='text-2xl font-bold'>Fresh Products <br/> Delivered to Your Door</h2>
                                <p>Get 20% off on your first order with code: FRESH20</p>
                                <div className='space-x-3'>
                                    <button className='btn text-primary-600 hover:bg-gray-100 border-2 border-white bg-white'>Shop now</button>
                                    <button className='btn hover:text-primary-600 text-white hover:bg-white border-2 border-white bg-transparent'>View Deals</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    )
}
