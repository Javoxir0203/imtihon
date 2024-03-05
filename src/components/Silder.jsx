import { Pagination, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import SwiperImg from '../assets/images/girl-white.svg';

export default () => {
	return (
		<Swiper modules={[Pagination, A11y, Autoplay]} spaceBetween={50} slidesPerView={1} autoplay={{ delay: 2000 }} pagination={{ clickable: true }}>
			<SwiperSlide>
				<div className='container mx-auto sliderBg mt-[25px]'>
					<div className='flex items-center justify-center'>
						<img className={'max-h-[600px]'} src={SwiperImg} alt='Img' />
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='container mx-auto sliderBg mt-[25px]'>
					<div className='flex items-center justify-center'>
						<img className={'max-h-[600px]'} src={SwiperImg} alt='Img' />
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='container mx-auto sliderBg mt-[25px]'>
					<div className='flex items-center justify-center'>
						<img className={'max-h-[600px]'} src={SwiperImg} alt='Img' />
					</div>
				</div>
			</SwiperSlide>
			<SwiperSlide>
				<div className='container mx-auto sliderBg mt-[25px]'>
					<div className='flex items-center justify-center'>
						<img className={'max-h-[600px]'} src={SwiperImg} alt='Img' />
					</div>
				</div>
			</SwiperSlide>
		</Swiper>
	);
};
