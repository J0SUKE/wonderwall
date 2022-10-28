import "../styles/globals.css";
import "../styles/hamburgers.css";
import type { AppProps } from "next/app";
import GlobalRefs from "../contenxt/globalRefs";
import ScrollContext from "../contenxt/scrollcontext";
import PageLoader from "../components/PageLoader";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalRefs>
      <ScrollContext>
        {/* <PageLoader /> */}
        <Component {...pageProps} />
      </ScrollContext>
    </GlobalRefs>
  );
}

export default MyApp;
