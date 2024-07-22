import { Banner } from '../../components/Banner/Banner'
import { Catalog } from '../../components/Catalog/Catalog'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Container } from '../../ui/Container/Container'
import styles from './Adidas.module.scss'

export const Adidas = () => {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.wrapper}>
          <Sidebar />
          <Banner />
        </div>
      </Container>
      <Catalog apiUrl='http://localhost:3000/categories/2' brand='Adidas' />
      <Footer />
    </>
  )
}