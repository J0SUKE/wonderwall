import '../styles/globals.css'
import '../styles/hamburgers.css';
import type { AppProps } from 'next/app'
import GlobalRefs from '../contenxt/globalRefs'
import ScrollContext from '../contenxt/scrollcontext'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { log } from 'console';

function MyApp({ Component, pageProps }: AppProps) {
  

  return <GlobalRefs>
    <ScrollContext>
      <Component {...pageProps} />
    </ScrollContext>
  </GlobalRefs> 

}

export default MyApp
