import { memo } from 'react';
import { withQuery } from 'hoc';
import { queryLayoutData } from 'components/queries';
import { Header, Slider, Footer, LanguageSwitcher } from 'components';

const Layout = (props) => {
  const { children, data } = props;
  const [socialMenu] = data.socialMenu;

  return (
    <>
      <header className={'header'}>
        <Header />
        <Slider prop1={'prop1'}/>
      </header>
      <main id={'main-content'}>
        {children}
      </main>
      <LanguageSwitcher />
      <Footer socialMenu={socialMenu}/>
    </>
  );
};

const LayoutMemo = memo(Layout);

export default withQuery(queryLayoutData)(LayoutMemo);
