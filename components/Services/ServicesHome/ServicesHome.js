import { withQuery } from 'hoc';
import useTranslation from 'next-translate/useTranslation';

import { Container, Row, Col } from 'react-bootstrap';
import { queryServicesHomeData } from "components/queries";
import { ServicesList as ServicesListComponent, Link } from 'components';

const ServicesList = withQuery(queryServicesHomeData)(ServicesListComponent);

const ServicesHome = () => {
  const { t } = useTranslation('common');

  return (
    <section className="services-beautysls my-5" id="services">
      <Container>
        <h3 className={`text-capitalize font-weight-bold text-center title mb-sm-5 mb-4`}>{t('Popular services')}</h3>
        <ServicesList />
        <Row>
          <Col className={'text-center pt-4'}>
            <Link href={'/services'} color={'primary'} text={'Other services'} className={'w-sm-100'}/>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default ServicesHome;
