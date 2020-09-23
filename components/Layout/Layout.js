import { Header, Slider } from "components";

const Layout = ({ children }) => {
  return (
    <div className="home">
      <Header />
      <Slider prop1={"prop1"}/>
      {children}
    </div>
  );
};

export default Layout;
