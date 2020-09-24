import { ClientContext } from 'graphql-hooks';
import { appWithTranslation } from './../i18n.js';
import { useGraphQLClient } from 'lib/graphql-client';

import "../styles/scss/index.scss";

const CustomApp = ({ Component, pageProps }) => {
  const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState);

  return (
    <ClientContext.Provider value={graphQLClient}>
      <Component {...pageProps} />
    </ClientContext.Provider>
  );
}

CustomApp.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return {
    pageProps
  }
}

export default appWithTranslation(CustomApp)