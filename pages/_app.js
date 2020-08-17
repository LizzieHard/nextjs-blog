import styles from '../styles/global.css';

export default function App({ Component, pageProps }) {
  //keep state when navigation between pages
  return <Component {...pageProps} />
 }