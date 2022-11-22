import '../styles/globals.css'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FullLayout } from '../layouts/FullLayout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Christmas is Here!</title>
        <meta name="description" content="Christmas is here website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FullLayout>
        <Component {...pageProps} />
      </FullLayout>
    </>
  )
}

export default MyApp
