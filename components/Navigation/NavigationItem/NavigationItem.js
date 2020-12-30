import Link from 'next/link';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import styled from './NavigationItem.module.scss'

const NavigationItem = ({ url, label }) => {
  return (
    <Nav.Item className={"nav-item mr-lg-2 mb-lg-0 mb-2"}>
      <Link href={ lang === 'es' ? url.es : url.en } passHref>
        <Nav.Link className={styled.navLink}>
          { lang === 'es' ? label.es : label.en }
        </Nav.Link>
      </Link>
    </Nav.Item>
  )
}

NavigationItem.propTypes = {
  url: PropTypes.shape({
    es: PropTypes.string.isRequired,
    en: PropTypes.string,
  }).isRequired,
  label: PropTypes.shape({
    es: PropTypes.string.isRequired,
    en: PropTypes.string,
  }).isRequired,
}

export default NavigationItem;