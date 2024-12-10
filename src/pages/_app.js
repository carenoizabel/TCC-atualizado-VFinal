// src/pages/_app.js
import '../styles/globals.css'; // Ajuste o caminho conforme necessário

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
