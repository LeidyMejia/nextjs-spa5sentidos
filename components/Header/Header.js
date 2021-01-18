import PropTypes from 'prop-types';
import { Navbar } from 'react-bootstrap';

import { withQuery } from 'hoc';
import { queryHeaderData } from './Header.queries';
import { Brand, Navigation, LanguageSwitcher } from 'components';

import styles from './Header.module.scss'

const Header = ({ loading, data, error }) => {
  const { siteInformation = {}, menus = [] } = data;
  const mainNavigation =  menus.find(menu => menu.machine_name === 'main-navigation');

  return (
    <div className={styles.header}>
      {(!loading && !error) && (
        <Navbar expand={'lg'} className={styles.headerNavBottom}>
          <Brand name={siteInformation.name} />
          <Navigation navigation={mainNavigation}/>
          <LanguageSwitcher />
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

export default withQuery(queryHeaderData)(Header);
