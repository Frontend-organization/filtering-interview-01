import styles from './Home.module.css'

import Navbar from '../../components/containers/Navbar'

const Home: React.FC = () => {
  return (
    <section className={styles.container}>
      <Navbar></Navbar>
      <h2>Hello from Home.tsx</h2>
      <p>Lets code!</p>
    </section>
  )
}

export default Home
