import {Layout, ServicesHome} from "components";
import graphQLRequest from 'lib/graphql-request'
import { initializeGraphQL } from "lib/graphql-client"
import { queryHeaderData, querySlidersData, queryServicesHomeData } from "components/queries";

const Home = () => {
  return (
    <Layout>
      <ServicesHome />
    </Layout>
  );
};

Home.getInitialProps = async () => {
  const client = initializeGraphQL()
  await graphQLRequest(client, queryHeaderData)
  await graphQLRequest(client, querySlidersData)
  await graphQLRequest(client, queryServicesHomeData)

  return {
    namespacesRequired: ['common'],
    initialGraphQLState: client.cache.getInitialState()
  }
}

export default Home
