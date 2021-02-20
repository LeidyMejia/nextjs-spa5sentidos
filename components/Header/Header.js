import { memo } from 'react';
import { withQuery } from 'hoc';
import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';
import styles from './header.module.scss';
import { queryHeaderData } from './Header.queries';
import { Brand, Navigation, Social } from 'components';

const Header = ({ loading, data, error }) => {
  const { siteInformation = {} } = data;
  const [socialMenu] = data.socialMenu;
  const [mainNavigation] =  data.mainNavigation;

  return (
    <div className={styles.header}>
      {(!loading && !error) && (
        <Navbar expand={'lg'} className={styles.headerNavBottom}>
          <Brand name={siteInformation.name} />
          <Navigation navigation={mainNavigation}>
            <Social menu={socialMenu}/>
          </Navigation>
        </Navbar>
      )}
    </div>
  )
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired,
  data: PropTypes.object.isRequired,
  error: PropTypes.any,
}

export default withQuery(queryHeaderData)(memo(Header));
