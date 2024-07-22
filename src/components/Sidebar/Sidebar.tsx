import { Link } from 'react-router-dom'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <h3>Brands</h3>
            <ul>
                <li>
                    <Link to='/nike'>
                        Nike
                    </Link>
                </li>
                <li>
                    <Link to='/adidas'>
                        Adidas
                    </Link>
                </li>
                <li>
                    <Link to='/newbalance'>
                        New Balance
                    </Link>
                </li>
                <li>
                    <Link to='/reebok'>
                        Reebok
                    </Link>
                </li>
                <li>
                    <Link to='/others'>
                        Others
                    </Link>
                </li>
            </ul>
            <div className={styles.actions}>
                <p>Help</p>
                <p>Terms & Conditions</p>
            </div>
        </div>
    )
}