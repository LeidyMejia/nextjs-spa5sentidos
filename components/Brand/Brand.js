import Link from 'next/link';
import { Fragment } from 'react';
import PropTypes from 'prop-types';

import styles from './Brand.module.scss'

const Brand = ({ name = '', href = '/' }) => {

  const parseBrandName = (brand, splitter = ' ') => {
    return !brand ? null: brand.split(splitter).map((word, index) =>
      <Fragment key={index}>
        <span>{ word.substring(0, 1) }</span>{ word.substring(1) }&nbsp;
      </Fragment>
    )
  }

  return name ? (
      <Link href={href}>
        <a className={`${styles.brand} navbar-brand font-weight-bold`}>{parseBrandName(name)}</a>
      </Link>
    ) : null;
};

Brand.propTypes = {
  name: PropTypes.string.isRequired,
  href: PropTypes.string
}

export default Brand;
