import { Header, Slider, Footer, Social } from 'components';

const Layout = ({ children }) => {
  return (
    <>
      <header className={'header'}>
        <Header />
        <Slider prop1={'prop1'}/>
      </header>
      <main id={'main-content'}>
        {children}
        <Social />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
