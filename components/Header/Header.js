import { withQuery } from 'hoc';
import { Navbar } from 'react-bootstrap';
import { queryHeaderData } from './Header.queries';
import { Brand, Navigation, LanguageSwitcher } from 'components';

import styles from './Header.module.scss'

const Header = ({ loading, data, error }) => {
  const { siteInformation = {}, menus = [] } = data;
  const mainNavigation =  menus.find(menu => menu.machine_name === 'main-navigation');

  return (
    <header className={styles.header}>
      {/*<Navbar expand={'lg'}  className={styles.headerNavTop}>*/}
      {/*  <LanguageSwitcher />*/}
      {/*</Navbar>*/}
      {(!loading && !error) && (
        <Navbar expand={'lg'} className={styles.headerNavBottom}>
          <Brand name={siteInformation.name} />
          <Navigation navigation={mainNavigation}/>
          <LanguageSwitcher />
        </Navbar>
      )}
    </header>
  )
};

export default withQuery(queryHeaderData)(Header);
