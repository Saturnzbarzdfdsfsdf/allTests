import { FC } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { selectProducts } from '../../entities/product/model/selectors';

import { useSelector } from 'react-redux';
import { ProductCard } from '../../entities/product/index';

import 'swiper/swiper-bundle.css';

const ProductSlider: FC = () => {
	const products = useSelector(selectProducts);

	return (
		<Swiper
			slidesPerView={6}
			spaceBetween={5}
			loop={true}
			autoplay={{
				delay: 3000,
				disableOnInteraction: false,
			}}
		>
			{products.map(product => (
				<SwiperSlide key={product.id}>
					<ProductCard product={product} />
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProductSlider;
