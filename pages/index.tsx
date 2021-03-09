import Head from 'next/head'
import FAQs from '../components/FAQs'
import Features from '../components/Features'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <>
      <Head>
        <title>eTijar</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Features/>
      <FAQs/>
    </>
  )
}
