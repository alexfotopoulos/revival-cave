import '@/styles/globals.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Revival Cave</title>
        <link rel="icon" href="/logos/gold-logo.png"/>
      </Head>
      <Component {...pageProps} />
    </>)
}
