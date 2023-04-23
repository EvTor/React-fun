import { ThemeProvider } from "@emotion/react";
import { AnolisProvider } from "anolis-ui";
import { AppProps } from "next/app";
import Head from "next/head";
import { FC, Fragment } from "react";
import { theme } from "theme";
import { customXstyledTheme } from "theme/xstyled";

const App: FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <Fragment>
      <Head>
        <title>React Fun</title>
      </Head>

      <ThemeProvider theme={customXstyledTheme}>
        <AnolisProvider theme={theme}>
          <Component {...pageProps} />
        </AnolisProvider>
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
