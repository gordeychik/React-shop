import { Link } from 'react-router-dom';
import { Container } from '../../ui/Container/Container';
import Logo from '../../assets/images/Logo.png';
import { Favourite } from '../../assets/icons/Favourite';
import { Cart } from '../../assets/icons/Cart';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { Account } from '../../assets/icons/Account';
import { ModalAccount } from '../ModalAccount/ModalAccount';
import styles from './Header.module.scss';
import { clearUser } from '../../store/userSlice';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';

interface CartItemType {
    id: number;
    image: string;
    name: string;
    price: number;
    quantity: number;
    brand: string;
}

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
    cart: { items: CartItemType[] };
    favorites: { items: FavoriteItem[] };
    user: { user: { email: string } | null };
}

export const Header = () => {
    const cartItems: CartItemType[] = useSelector((state: RootState) => state.cart.items);
    const favoriteItems: FavoriteItem[] = useSelector((state: RootState) => state.favorites.items);
    const user = useSelector((state: RootState) => state.user.user);
    const dispatch = useDispatch();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    }; 

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            dispatch(clearUser());
        } catch (error) {
            console.error('Error signing out: ', error);
        }
    };  

    return (
        <Container>
            <header className={styles.header}>
                <Link to='/'>
                    <img src={Logo} alt='' />
                </Link>
                <div className={styles.header__actions}>
                    {user ? (
                        <div className={styles.user__account}>
                            <span>{user.email}</span>
                            <button onClick={handleLogout}>Logout</button>
                        </div>
                    ) : (
                        <button className={styles.account} onClick={openModal}>
                            <Account />
                        </button>
                    )}
                    <Link to='/favorite'>
                        <Favourite />
                        {favoriteItems.length > 0 && (
                            <span className={styles.favorite__number}>{favoriteItems.length}</span>
                        )}
                    </Link>
                    <Link to='/cart'>
                        <Cart />
                        {cartItems.length > 0 && (
                            <span className={styles.cart__number}>{cartItems.length}</span>
                        )}
                    </Link>
                </div>
            </header>
            {isModalOpen && <ModalAccount onClose={closeModal} />}
        </Container>
    );
};