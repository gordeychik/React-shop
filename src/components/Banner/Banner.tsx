import BannerImage from '../../assets/images/Banner.png'
import { Button } from '../../ui/Button/Button'
import { Link } from 'react-router-dom'
import styles from './Banner.module.scss'

export const Banner = () => {
    return (
        <div className={styles.banner}>
            <span>BIG SALE 20%</span>
            <h3>the bestseller of 2022 </h3>
            <h1>Nike Air Max<br /> Plus OG "Voltage Purple"</h1>
            <Link to='/nike'>
                <Button>See More</Button>
            </Link>

            <div className={styles.banner__image}>
                <img src={BannerImage} alt='image' />
            </div>
        </div>
    )
}