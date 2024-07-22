import { Banner } from '../../components/Banner/Banner'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Trending } from '../../components/Trending/Trending'
import { Container } from '../../ui/Container/Container'
import { Sale } from '../../components/Sale/Sale'
import { Footer } from '../../components/Footer/Footer'
import styles from './Home.module.scss'


export const Home = () => {
    return (
        <>
            <Header />
            <Container>
                <div className={styles.wrapper}>
                    <Sidebar />
                    <Banner />
                </div>
            </Container>
            <Trending />
            <Sale />
            <Footer />
        </>
    )
}