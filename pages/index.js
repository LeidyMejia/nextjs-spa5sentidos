import { Layout } from "components";
import graphQLRequest from 'lib/graphql-request'
import { initializeGraphQL } from "lib/graphql-client"
import { queryHeaderData, querySlidersData } from "components/queries";

const Home = () => {
  return (
    <Layout>
      <h1>{'Services'}</h1>
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const client = initializeGraphQL()
  await graphQLRequest(client, queryHeaderData)
  await graphQLRequest(client, querySlidersData)

  return {
    namespacesRequired: ['common'],
    initialGraphQLState: client.cache.getInitialState()
  }
}

export default Home
