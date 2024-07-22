import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Button } from '../../ui/Button/Button';
import { Container } from '../../ui/Container/Container';
import { Header } from '../../components/Header/Header';
import { Banner } from '../../components/Banner/Banner';
import { Footer } from '../../components/Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../store/cartSlice';
import { addToFavorite } from '../../store/favoriteSlice';
import { CartItem } from '../../store/cartSlice';
import { FavoriteItem } from '../../store/favoriteSlice';
import axios from 'axios';
import styles from './Product.module.scss';

interface Sneaker {
  id: number;
  brand: string;
  name: string;
  image: string;
  size: number[];
  price: string;
  sostav: string;
  article: string;
  country: string;
}

interface Category {
  id: number;
  name: string;
  products: Sneaker[];
}

interface RootState {
  cart: { items: CartItem[] };
  favorites: { items: FavoriteItem[] };
}

export const Product = () => {
  const [sneaker, setSneaker] = useState<Sneaker | null>(null);
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();
  const [size, setSize] = useState(NaN);
  const [warning, setWarning] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart?.items || []);
  const favoriteItems = useSelector((state: RootState) => state.favorites?.items || []);

  const cartItemIds = cartItems.map(item => item.id);
  const favoriteItemIds = favoriteItems.map(item => item.id);

  const isInCart = sneaker ? cartItemIds.includes(sneaker.id) : false;
  const isInFavorite = sneaker ? favoriteItemIds.includes(sneaker.id) : false;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get<Category[]>(`http://localhost:3000/categories`);
        const categories = response.data;
        let foundSneaker: Sneaker | null = null;
        let brand: string | null = null;

        for (const category of categories) {
          const product = category.products.find(product => product.id === parseInt(id as string));
          if (product) {
            foundSneaker = product;
            brand = category.name;
            break;
          }
        }

        if (foundSneaker && brand) {
          foundSneaker.brand = brand;
        }

        setSneaker(foundSneaker);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    getProduct();
  }, [id]);

  const handleSize = (elem: number) => {
    setSize(elem);
    setWarning(false);
  }

  const handleAddToCart = () => {
    if (size) {
      if (sneaker) {
        const productToAdd = {
          id: sneaker.id,
          brand: sneaker.brand,
          name: sneaker.name,
          image: sneaker.image,
          size: size,
          price: sneaker.price,
          quantity: 1,
        };
        dispatch(addToCart(productToAdd));
      }
    } else {
      setWarning(true);
    }
  };

  const handleAddToFavorite = () => {
    if (sneaker) {
      const favoriteToAdd = {
        id: sneaker.id,
        brand: sneaker.brand,
        name: sneaker.name,
        image: sneaker.image,
        size: size,
        price: sneaker.price,
      };
      dispatch(addToFavorite(favoriteToAdd));
    }
  };

  return (
    <>
      <Header />
      <Container>
        <div className={styles.product}>
          <div className={styles.product__image}>
            <img src={`../../src/assets/images/${sneaker?.brand}/${sneaker?.image}.jpg`} alt={sneaker?.name} />
          </div>
          <div className={styles.product__info}>
            <h3>{sneaker?.name}</h3>
            <p>Цена: <span className={styles.product__price}>{sneaker?.price}</span></p>
            <p>Страна: <span>{sneaker?.country}</span></p>
            <p>Состав: <span>{sneaker?.sostav}</span></p>
            <p>Артикул: <span>{sneaker?.article}</span></p>
            <span className={styles.product__text}>
              Обувь - один из самых распространенных аксессуаров человека, ее используют люди любого возраста и пола. Это правда, потому что каждый должен носить их всю жизнь. Но что такое кроссовки? Если вы новичок в этом слове, расслабьтесь, давайте проверим определение кроссовок, чтобы получить представление о нем.
            </span>
            <ul>
              {sneaker?.size.map((elem, i) => {
                return <li className={`${styles.sizeItem} ${size === elem ? styles.active : ''}`} onClick={() => handleSize(elem)} key={i + 1}>{elem}</li>
              })}
            </ul>
            <span className={`${styles.size__warning} ${warning ? styles.warning : ''}`}>Choose your size</span>

            <div className={styles.product__btns}>
              <Button onClick={handleAddToFavorite} disabled={isInFavorite}>{isInFavorite ? <>✔ Добавлено в избранное</> : "В избранное"}</Button>
              <Button onClick={handleAddToCart} disabled={isInCart}>
                {isInCart ? <>✔ Добавлено в корзину</> : "В корзину"}
              </Button>
            </div>
            {sneaker?.brand !== 'Trend' && (
              <Link to={`/${sneaker?.brand}`}>
                <span className={styles.more}>{`Другие товары ${sneaker?.brand}`}</span>
              </Link>
            )}
          </div>
        </div>
        <div className={styles.wrapper}>
          <Sidebar />
          <Banner />
        </div>
      </Container >
      <Footer />
    </>
  );
};