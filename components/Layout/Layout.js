import { Header, Slider, Footer, Social } from 'components';

const Layout = ({ children }) => {
  return (
    <>
      <header className={'header'}>
        <Header />
        <Slider prop1={'prop1'}/>
      </header>
      <div id={'App'}>
        {children}
        <Social />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
