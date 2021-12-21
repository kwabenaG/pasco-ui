// the center call of all the application parts

import  'tailwindcss/tailwindcss';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
