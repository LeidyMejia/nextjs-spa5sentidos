/**
 * @import context
 * @import global styles sheet
 */
import 'styles/scss/index.scss';
import { ClientContext } from 'graphql-hooks';
import { useGraphQLClient } from 'lib/graphql-client';

const App = ({ Component, pageProps }) => {
  const graphQLClient = useGraphQLClient(pageProps.initialGraphQLState);

  return (
    <ClientContext.Provider value={graphQLClient}>
      <Component {...pageProps} />
    </ClientContext.Provider>
  );
}

App.getInitialProps = async ({ Component, ctx }) => {
  let pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

  return { pageProps }
}

export default App;
