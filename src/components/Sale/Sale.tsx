import { NikeLogo } from '../../assets/icons/NikeLogo'
import { Button } from '../../ui/Button/Button'
import NikeSale from '../../assets/images/nike-sale.png'
import styles from './Sale.module.scss'
import { Container } from '../../ui/Container/Container'
import { Link } from 'react-router-dom'

export const Sale = () => {
    return (
        <Container>
            <div className={styles.sale}>
                <div className={styles.info}>
                    <span>SALE</span>
                    <div className={styles.info__image}>
                        <NikeLogo />
                    </div>
                    <Link to='/nike'>
                        <Button>See More</Button>
                    </Link>
                </div>
                <div className={styles.content}>
                    <div className={styles.content__image}>
                        <img src={NikeSale} alt='image' />
                    </div>
                    <p>save up to <span>50%</span> off</p>
                </div>
            </div>
        </Container>
    )
}