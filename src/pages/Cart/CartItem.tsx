import React from 'react';
import { Close } from '../../assets/icons/Close';
import styles from './Cart.module.scss';

interface CartItemType {
    id: number;
    image: string;
    name: string;
    price: string;
    size: string;
    quantity: number;
    brand: string;
}

interface CartItemProps {
    item: CartItemType;
    onRemove: (id: number, size: string) => void;
}

export const CartItem: React.FC<CartItemProps> = ({ item, onRemove }) => {
    return (
        <div className={styles.item}>
            <div className={styles.item__info}>
                <div className={styles.item__image}>
                    <img src={`../../src/assets/images/${item.brand}/${item.image}.jpg`} alt='image' />
                </div>
                <div className={styles.item__infoText}>
                    <h4>{item.name}</h4>
                    <p>{`Размер: ${item.size}`}</p>
                    <p className={styles.state}>В наличии</p>
                </div>
            </div>
            <div className={styles.item__actions}>
                <p className={styles.price}>{item.price}</p>
                <button onClick={() => onRemove(item.id, item.size)}><Close /></button>
            </div>
        </div>
    );
};