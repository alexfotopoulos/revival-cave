import '@/styles/globals.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>The Revival Cave</title>
        <link rel="icon" href="/logos/white-logo.png"/>
      </Head>
      <Component {...pageProps} />
    </>)
}
