import Head from 'next/head'

export default function Home() {
  return <>
    <Head>
      <title>Sling Academy</title>
      <meta name='description' content='I hope this tutorial is helpful for you' />
    </Head>
    <div style={{ padding: 30 }}>
      <h1>Hello there!</h1>
    </div>
  </>
}