import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../assets/Images/home/slide1.jpg';
import slide2 from '../../assets/Images/home/slide2.jpg';
import slide3 from '../../assets/Images/home/slide3.jpg';
import slide4 from '../../assets/Images/home/slide4.jpg';
import slide5 from '../../assets/Images/home/slide5.jpg';
import SectionHeading from '../SectionHeading/SectionHeading';

const Category = () => {
    return (
        <section className='m-12'>
            <SectionHeading heading={'ORDER ONLINE'} subHeading={'From 10:00PM to 11:00PM'} />
            <Swiper
                slidesPerView={4}
                spaceBetween={2}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <img src={slide1} alt="slide Image" />
                    <h3 className='absolute bottom-2 left-1 text-2xl text-white'>Salad</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slide2} alt="slide Image" />
                    <h3 className='absolute bottom-2 left-1 text-2xl text-white'>Pizza</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slide3} alt="slide Image" />
                    <h3 className='absolute bottom-2 left-1 text-2xl text-white'>Soup</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slide4} alt="slide Image" />
                    <h3 className='absolute bottom-2 left-1 text-2xl text-white'>Dessert</h3>
                </SwiperSlide>
                <SwiperSlide className='relative'>
                    <img src={slide5} alt="slide Image" />
                    <h3 className='absolute bottom-2 left-1 text-2xl text-white'>Salad</h3>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}

export default Category