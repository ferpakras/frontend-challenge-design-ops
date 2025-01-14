import type { AppProps } from 'next/app';
import { ArticleProvider } from '../shared/store';
import { globalStyles } from '../stitches.config';

/**
 * Você pode importar os tokens de algumas coisas, como abaixo
 * JS, CSS (Variables), SCSS
 */

// import { colors } from "@design-ops/design-system/dist/belezanaweb";
// console.log(colors.primary.value);
// import "design-system/dist/belezanaweb/index.css";
// import "design-system/dist/oboticario/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <>
      <ArticleProvider>
        <Component {...pageProps} />
      </ArticleProvider>
    </>
  );
}

export default MyApp;
