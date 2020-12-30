import Link from 'next/link';
import PropTypes from 'prop-types';
import useTranslation from "next-translate/useTranslation";

import styles, { linkComponent } from './Link.module.scss';

const LinkComponent = ({ text = '', color, href = '/#', target = '_SELF' }) => {
  const { t } = useTranslation('common');

  return (
    <Link href={href} target={target}>
      <a className={`${linkComponent} ${styles[color]} btn btn-sm`}>{ t(text) }</a>
    </Link>
  )
}

LinkComponent.propTypes = {
  text: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
  color: PropTypes.string.isRequired,
}

export default LinkComponent;