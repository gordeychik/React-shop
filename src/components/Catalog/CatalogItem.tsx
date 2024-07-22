import { Item } from './Catalog'; 
import styles from './Catalog.module.scss';

export interface CatalogItemProps {
  item: Item;
  brand: string;
}

export const CatalogItem: React.FC<CatalogItemProps> = ({ item, brand }) => {
  return (
    <div className={styles.item}>
      <div className={styles.item__image}>
        <img src={`src/assets/images/${brand}/${item.image}.jpg`} alt={item.name} />
      </div>
      <div className={styles.item__info}>
        <p>{item.name}</p>
        <span>{item.price}</span>
      </div>
    </div>
  );
};