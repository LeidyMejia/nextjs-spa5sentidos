import { withQuery } from 'hoc';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { withTranslation } from './../../../i18n';
import { queryServicesHomeData } from "components/queries";
import { ServicesList as ServicesListComponent } from 'components';

const ServicesList = withQuery(queryServicesHomeData)(ServicesListComponent);

const ServicesHome = ({ t }) => {
  return (
    <div className="services-beautysls my-5" id="services">
      <Container>
        <h3 className={`text-capitalize font-weight-bold text-center title mb-sm-5 mb-4`}>{t('Our Services')}</h3>
        <ServicesList />
      </Container>
    </div>
  )
};

ServicesHome.propTypes = {
  t: PropTypes.func.isRequired
}

export default withTranslation('common')(ServicesHome);
