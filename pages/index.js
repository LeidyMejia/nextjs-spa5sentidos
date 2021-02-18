import dynamic from 'next/dynamic';
import graphQLRequest from 'lib/graphql-request';
import { initializeGraphQL } from 'lib/graphql-client';
import { App, ContactUsFeatured, ServicesHome } from 'components';
import { queryHeaderData, querySlidersData, queryServicesHomeData } from 'components/queries';

const InstagramFeed = dynamic(
  () => import('components').then(components => components.InstagramFeed), { ssr: false }
);

const HomePage = () => {
  return (
    <App layout={true}>
      <ServicesHome />
      <ContactUsFeatured />
      <InstagramFeed />
    </App>
  );
}

HomePage.getInitialProps = async () => {
  const client = initializeGraphQL();
  await graphQLRequest(client, queryHeaderData);
  await graphQLRequest(client, querySlidersData);
  await graphQLRequest(client, queryServicesHomeData);

  return {
    namespacesRequired: ['common'],
    initialGraphQLState: client.cache.getInitialState()
  }
}

export default HomePage;
