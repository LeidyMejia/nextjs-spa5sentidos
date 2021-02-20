import { NextSeo } from 'next-seo';
import graphQLRequest from 'lib/graphql-request';
import { initializeGraphQL } from 'lib/graphql-client';
import { App, ContactUsFeatured, ServicesHome, InstagramFeed } from 'components';
import { queryHeaderData, querySlidersData, queryServicesHomeData, queryLayoutData } from 'components/queries';

const HomePage = () => {
  return (
    <>
      <NextSeo
        title={'Spa 5 Sentidos - Spa, masajes y limpieza facial en Medellín'}
        description={'Spa 5 Sentidos es un Spa y Barbería en Medellín que ofrece servicios para el bienestar de tu cuerpo y mente. Ofrecemos masajes reductores, masajes relajantes,  masajes estéticos, día de spa, spa en pareja, tratatmientos faciales, limpiezas faciales, masajes deportivos, entre otros.'}
        keywords={'Spa, Salud, Calma, Facial, Clínica, Sentir, Dolores, Belleza, Estética, Sentidos, Rebajar, Rebajar, Barbería, Limpieza, Adelgazar, Relajación, Activación, Deportivos, Deportivos, Reductores, Terapeúticos, Adelgazantes, Tranquilidad, Maderoterapia, Anticelulítis, Chocolaterapia, Anticelulítico'}
      />
      <App layout={true}>
        <ServicesHome />
        <ContactUsFeatured />
        <InstagramFeed />
      </App>
    </>
  );
}

HomePage.getInitialProps = async () => {
  const client = initializeGraphQL();
  await graphQLRequest(client, queryLayoutData);
  await graphQLRequest(client, queryHeaderData);
  await graphQLRequest(client, querySlidersData);
  await graphQLRequest(client, queryServicesHomeData);

  return {
    namespacesRequired: ['common'],
    initialGraphQLState: client.cache.getInitialState()
  }
}

export default HomePage;
