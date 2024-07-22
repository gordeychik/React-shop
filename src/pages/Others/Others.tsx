import { Banner } from '../../components/Banner/Banner'
import { Catalog } from '../../components/Catalog/Catalog'
import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Sidebar } from '../../components/Sidebar/Sidebar'
import { Container } from '../../ui/Container/Container'
import styles from './Others.module.scss'

export const Others = () => {
  return (
    <>
      <Header />
      <Container>
        <div className={styles.wrapper}>
          <Sidebar />
          <Banner />
        </div>
      </Container>
      <Catalog apiUrl='http://localhost:3000/categories/5' brand='Others' />
      <Footer />
    </>
  )
}