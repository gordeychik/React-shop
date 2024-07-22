import axios from 'axios';

export interface Category {
    id: number;
    name: string;
    products: Item[];
}

export interface Item {
    id: number;
    image: string;
    name: string;
    price: number;
}

export const fetchProducts = async () => {
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