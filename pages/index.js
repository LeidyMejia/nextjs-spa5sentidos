import graphQLRequest from 'lib/graphql-request'
import { initializeGraphQL } from "lib/graphql-client"
import { ContactUsFeatured, Layout, ServicesHome, InstagramFeed } from "components";
import { queryHeaderData, querySlidersData, queryServicesHomeData } from "components/queries";

const Home = () => {
  return (
    <Layout>
      <ServicesHome />
      <ContactUsFeatured />
      <InstagramFeed />
    </Layout>
  );
}

Home.getInitialProps = async () => {
  const client = initializeGraphQL();
  await graphQLRequest(client, queryHeaderData);
  await graphQLRequest(client, querySlidersData);
  await graphQLRequest(client, queryServicesHomeData);

  return {
    namespacesRequired: ['common'],
    initialGraphQLState: client.cache.getInitialState()
  }
}

export default Home
