import { Sidebar } from '../../components/Sidebar/Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cartSlice';
import { CartItem } from './CartItem';
import styles from './Cart.module.scss';
import { Container } from '../../ui/Container/Container';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Trending } from '../../components/Trending/Trending';
import { Button } from '../../ui/Button/Button';
import { useState, useEffect } from 'react';

interface CartItemType {
    id: number;
    image: string;
    name: string;
    price: string;
    size: string;
    quantity: number;
    brand: string;
}

interface CartState {
    items: CartItemType[];
}

interface RootState {
    cart: CartState;
}

export const Cart = () => {
    const cartItems: CartItemType[] = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id: number, size: string) => {
        // Преобразование size в число
        const sizeAsNumber = parseInt(size, 10);
        dispatch(removeFromCart({ id, size: sizeAsNumber }));
    };

    const [summa, setSumma] = useState(0);

    useEffect(() => {
        getSumma();
    }, [cartItems]);

    const getSumma = () => {
        const total = cartItems.reduce((acc, elem) => {
            const priceWithoutSpaces = elem.price.replace(/\s+/g, '');
            const priceAsNumber = parseFloat(priceWithoutSpaces);
            return acc + (isNaN(priceAsNumber) ? 0 : priceAsNumber * elem.quantity);
        }, 0);
        setSumma(total);
    };

    const formatSumma = (summa: number) => {
        return summa.toLocaleString('ru-RU');
    };

    return (
        <>
            <Header />
            <Container>
                <div className={styles.wrapper}>
                    <Sidebar />
                    <div className={styles.cart__wrapper}>
                        <h3>Shopping cart</h3>
                        {cartItems.length > 0 ? (
                            cartItems.map((elem: CartItemType) => (
                                <CartItem key={elem.id} item={elem} onRemove={handleRemoveFromCart} />
                            ))
                        ) : (
                            <p className={styles.cart__empty}>Your shopping cart is empty...</p>
                        )}
                        {cartItems.length > 0 && (
                            <div className={styles.purchase}>
                                <p>К оплате: <span>{formatSumma(summa)}</span></p>
                                <Button>Pay</Button>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
            <Trending />
            <Footer />
        </>
    );
};