import { withQuery } from 'hoc';
import useTranslation from 'next-translate/useTranslation';

import { Container } from 'react-bootstrap';
import { queryServicesHomeData } from "components/queries";
import { ServicesList as ServicesListComponent } from 'components';

const ServicesList = withQuery(queryServicesHomeData)(ServicesListComponent);

const ServicesHome = () => {
  const { t } = useTranslation('common');

  return (
    <div className="services-beautysls my-5" id="services">
      <Container>
        <h3 className={`text-capitalize font-weight-bold text-center title mb-sm-5 mb-4`}>{t('Popular Services')}</h3>
        <ServicesList />
      </Container>
    </div>
  )
};

export default ServicesHome;
