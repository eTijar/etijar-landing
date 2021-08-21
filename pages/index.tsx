import Head from 'next/head'
import Hero from '../components/Hero'
import HeroPlus from '../components/HeroPlus'
import MaxFooter from '../components/MaxFooter'

export default function Home() {
  return (
    <>
      <Head>
        <title>eTijar</title>
        <link rel="icon" href="/favicon.ico" />
        <script async src="https://cdn.splitbee.io/sb.js"></script>
      </Head>
      <Hero/>
      <HeroPlus />
      <MaxFooter />
    </>
  )
}
