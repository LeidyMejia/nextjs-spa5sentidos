import { Header, Slider, Footer } from 'components';

const Layout = ({ children }) => {
  return (
    <>
      <header className={'header'}>
        <Header />
        <Slider prop1={'prop1'}/>
      </header>
      <div id={'app'}>
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
