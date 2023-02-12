import { Provider } from 'react-redux';
import { Analytics } from '@vercel/analytics/react';
import store from '../redux/store';
import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <Analytics />
    </Provider>
  )
}
