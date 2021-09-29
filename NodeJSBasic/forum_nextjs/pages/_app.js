import '../styles/globals.css'
import App from 'next/app'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export async function getStaticProps(appContext) {
  const appProps = await App.getInitialProps(appContext);
  console.log(1);

  return { ...appProps }
}
