import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper/modules";
import { Button } from '../../ui/Button/Button';
import 'swiper/css';
import styles from './Trending.module.scss';
import { Container } from '../../ui/Container/Container';
import { TrendingData } from './TrendingData';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

interface Product {
    id: number;
    brand: string;
    name: string;
    price: string;
    size: number[];
    image: string;
    sostav: string;
    country: string;
    article: string;
}

interface Trend {
    id: string;
    name: string;
    products: Product[];
}

export const Trending = () => {
    const [trend, setTrend] = useState<Trend | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get<Trend>('http://localhost:3000/categories/6');
                setTrend(response.data);
            } catch (error) {
                console.error('Error fetching trend data:', error);
                if (axios.isAxiosError(error)) {
                    console.error('Axios error details:', error.response);
                }
            }
        };

        fetchData();
    }, []);

    return (
        <Container>
            <div className={styles.trending}>
                <h3>Trending</h3>
                <div className={styles.slider}>
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        loop={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        breakpoints={{
                            320: {
                                slidesPerView: 2,
                            },
                            580: {
                                slidesPerView: 2,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            992: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {trend && trend.products.map((product) => (
                            <SwiperSlide key={product.id}>
                                <Link to={`/product/${product.id}`}>
                                    <TrendingData product={product} />
                                </Link>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className={styles.btn}>
                    <Link to='/nike'>
                    <Button>See More</Button>
                    </Link>
                </div>
            </div>
        </Container>
    );
};