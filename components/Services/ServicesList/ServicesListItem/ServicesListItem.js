import { memo } from 'react';
import Image from 'next/image';
import { Link } from 'components';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';
import { asset, translatableProperties } from 'utils';
import useTranslation from 'next-translate/useTranslation';
import { serviceListItem, serviceListItemButtons } from './ServicesListItem.module.scss';

const ServicesListItem = ({ service }) => {
  const { lang } = useTranslation();
  const { title, summary } = translatableProperties(service, lang, ['title', 'summary']);

  return (
    <Col sm={6} lg={3} className={serviceListItem} data-testid={'services-item'}>
      <Row>
        <Col xs={12} className={`text-center`}>
          <Image
            alt={title}
            width={300}
            height={200}
            quality={85}
            src={asset(service.images.featured.url)}
          />
          <h4 className="text-capitalize text-dark mt-3 mb-2">{title}</h4>
          <p>{summary.slice(0, 250)}{summary.length > 250 && '...'}</p>
       </Col>
      </Row>
      <Row>
        <Col xs={12} className={`text-center my-3 ${serviceListItemButtons}`}>
          <Link text={'Book a massage'} color={'primary'}/>
          <Link text={'Learn more'} color={'secondary'}/>
        </Col>
      </Row>
    </Col>
  )
};

ServicesListItem.propTypes = {
  service: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug_es: PropTypes.string.isRequired,
    slug_en: PropTypes.string.isRequired,
    title_es: PropTypes.string.isRequired,
    title_en: PropTypes.string.isRequired,
    summary_es: PropTypes.string.isRequired,
    summary_en: PropTypes.string.isRequired,
    images: PropTypes.shape({
      featured: PropTypes.shape({
        url: PropTypes.string.isRequired
      })
    })
  })
}

export default memo(ServicesListItem);
