import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Container } from '../../ui/Container/Container'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Trending } from '../../components/Trending/Trending'
import { Footer } from '../../components/Footer/Footer'
import { removeFromFavorite } from '../../store/favoriteSlice'
import styles from './Favorite.module.scss'

interface FavoriteItem {
    id: number;
    image: string;
    name: string;
    price: string;
    size: string;
    quantity: number;
    brand: string;
}

interface RootState {
    favorites: { items: FavoriteItem[] };
}

export const Favorite = () => {
    const favoriteItems: FavoriteItem[] = useSelector((state: RootState) => state.favorites.items);
    const dispatch = useDispatch();

    const handleRemove = (id: number) => {
        dispatch(removeFromFavorite(id));
    }

    return (
        <>
            <Header />
            <Container>
                <div className={styles.wrapper}>
                    <Sidebar />
                    <div className={styles.favorite__wrapper}>
                        <h3>Favorite</h3>
                        {favoriteItems.length === 0 ? (
                            <p className={styles.empty}>Your favorites is empty...</p>
                        ) : (
                            <ul>
                                {favoriteItems.map((item) => {
                                    return <li key={item.id}>
                                        <div className={styles.favorite__item}>
                                            <span onClick={() => handleRemove(item.id)} className={styles.close}>✖</span>
                                            <div className={styles.favorite__image}>
                                                <img src={`../../src/assets/images/${item.brand}/${item.image}.jpg`} alt='image' />
                                            </div>
                                            <Link to={`/product/${item.id}`}>
                                                <div className={styles.favorite__info}>
                                                    <p>{item.name}</p>
                                                    <span>{item.price}</span>
                                                </div>
                                            </Link>
                                        </div>
                                    </li>
                                })}
                            </ul>
                        )}
                    </div>
                </div>
            </Container >
            <Trending />
            <Footer />
        </>
    )
}