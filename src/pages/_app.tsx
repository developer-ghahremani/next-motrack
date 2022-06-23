import "./../assets/css/main.min.css";
import "animate.css/animate.css";
import "i18n";
import "reactjs-popup/dist/index.css";

import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { WarningModal } from "components/modals";
import store from "store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <WarningModal />
    </Provider>
  );
}

export default MyApp;
