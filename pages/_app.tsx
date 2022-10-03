import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalRefs from '../contenxt/globalRefs'
import ScrollContext from '../contenxt/scrollcontext'

function MyApp({ Component, pageProps }: AppProps) {
  return <GlobalRefs>
    <ScrollContext>
      <Component {...pageProps} />
    </ScrollContext>
  </GlobalRefs> 

}

export default MyApp
