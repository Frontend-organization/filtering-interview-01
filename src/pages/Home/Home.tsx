import Footer from '@components/containers/Footer'

import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>Hello from Home.tsx</h2>
      <p>Lets code!</p>
      <Footer />
    </section>
  )
}

export default Home
