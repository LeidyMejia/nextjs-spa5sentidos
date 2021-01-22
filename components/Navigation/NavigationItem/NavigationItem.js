import Link from 'next/link';
import PropTypes from 'prop-types';
import { Nav } from 'react-bootstrap';
import useTranslation from "next-translate/useTranslation";

import { translatableProperties } from "utils";
import styled from './NavigationItem.module.scss';

const NavigationItem = ({ item }) => {
  const { lang } = useTranslation();
  const { label, url } = translatableProperties(item, lang, ['label', 'url']);

  return (
    <Nav.Item className={"nav-item mr-lg-2 mb-lg-0 mb-2"}>
      <Link href={url} passHref>
        <Nav.Link className={styled.navLink}>
          { label }
        </Nav.Link>
      </Link>
    </Nav.Item>
  )
}

NavigationItem.propTypes = {
  item: PropTypes.shape({
    label_es: PropTypes.string.isRequired,
    label_en: PropTypes.string.isRequired,
    url_es: PropTypes.string.isRequired,
    url_en: PropTypes.string.isRequired,
  })
}

export default NavigationItem;