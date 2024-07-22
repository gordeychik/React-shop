import { Container } from '../../ui/Container/Container'
import Logo from '../../assets/images/Logo.png'
import { Youtube } from '../../assets/icons/Youtube'
import { Facebook } from '../../assets/icons/Facebook'
import { Link } from 'react-router-dom'
import { Inst } from '../../assets/icons/Inst'
import styles from './Footer.module.scss'

export const Footer = () => {
    return (
        <Container>
            <footer className={styles.footer}>
                <div className={styles.footer__logo}>
                    <img src={Logo} alt='logo' />
                </div>
                <p>Developed by <span><Link target='_blank' to='https://t.me/gordey_chik'>Gordeychik</Link></span></p>
                <div className={styles.footer__icons}>
                    <Link target='_blank' to='https://youtube.com'>
                        <Youtube />
                    </Link>
                    <Link target='_blank' to='https://facebook.com'>
                        <Facebook />
                    </Link>
                    <Link target='_blank' to='https://instagram.com'>
                        <Inst />
                    </Link>
                </div>
            </footer>
        </Container>
    )
}