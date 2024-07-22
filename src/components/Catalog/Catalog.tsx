import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './Catalog.module.scss';
import { CatalogItem } from './CatalogItem';
import { Container } from '../../ui/Container/Container';
import { Link } from 'react-router-dom';

export interface Item {
    id: number;
    image: string;
    name: string;
    price: number;
}

interface Category {
    id: number;
    name: string;
    products: Item[];
}

interface CatalogProps {
    apiUrl: string;
    brand: string;
}

// interface IProduct<T> {
//     name: string;
//     price: number;
//     size: T;
// }

// const product: IProduct<string> = {};

// const productRu: IProduct<number> = {};

export const Catalog: React.FC<CatalogProps> = ({ apiUrl, brand }) => {
    const [category, setCategory] = useState<Category | null>(null);

    const fetchData = async () => {
        try {
            const response = await axios.get<Category>(apiUrl);
            if (response.data && Array.isArray(response.data.products)) {
                setCategory(response.data);
            } else {
                console.error('API did not return a valid category:', response.data);
            }
        } catch (error) {
            console.error(error);
        }
    };
    
    useEffect(() => {
        fetchData();
    }, [apiUrl]);

    return (
        <Container>
            <div className={styles.catalog}>
                <h3>{brand}</h3>
                <div className={styles.items}>
                    {category && Array.isArray(category.products) && category.products.map((item) => (
                        <Link to={`/product/${item.id}`} key={item.id}>
                            <CatalogItem item={item} brand={category.name} />
                        </Link>
                    ))}
                </div>
            </div>
        </Container>
    );
};