import Card from '@components/containers/Card'

import styles from './Home.module.css'

const Home: React.FC = () => {
  return (
    <section className={styles.container}>
      <h2>Hello from Home.tsx</h2>
      <p>Lets code!</p>
      <Card
        product={{
          title: 'Cassels Milk Stou',
          description: 'Cassels & Sons Brewing. Cerveza porter y stout.',
          price: 75000,
          image:
            'https://res.cloudinary.com/snack-coder-cloud/image/upload/v1627863161/cassels_hityhj.png'
        }}
      />
      <Card
        product={{
          title: 'Camba Pale Ale',
          description: 'La Souche Franc-Bois d’hiver. Cerveza pale.',
          price: 85300,
          image:
            'https://res.cloudinary.com/snack-coder-cloud/image/upload/v1627863161/camba_bgyigt.png'
        }}
      />
      <Card
        product={{
          title: 'Votus Nº 001',
          description: 'India Pale Ale del año 2019. Nº 001 Red IPA.',
          price: 75000,
          image:
            'https://res.cloudinary.com/snack-coder-cloud/image/upload/v1627863161/votus_apscqw.png'
        }}
      />
    </section>
  )
}

export default Home
