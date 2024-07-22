import styles from './Trending.module.scss';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}

interface TrendingDataProps {
    product: Product;
}

export const TrendingData: React.FC<TrendingDataProps> = ({ product }) => {
    return (
        <div className={styles.trendingData}>
            <div className={styles.product}>
                <div className={styles.product__image}>
                    <img src={`src/assets/images/trend/${product.image}.jpg`} alt={product.name} />
                </div>
                <div className={styles.product__info}>
                    <p>{product.name}</p>
                    <span>{product.price}</span>
                </div>
            </div>
        </div>
    );
};