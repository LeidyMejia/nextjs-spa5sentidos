import PropTypes from "prop-types";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { NavigationItem } from "components";

const Navigation = ({ navigation, isToggle = true, children }) => {
  return (
    <>
      { isToggle && <Navbar.Toggle aria-controls={navigation.id} /> }
      <Navbar.Collapse id={navigation.id}>
        <Nav className={"ml-auto text-center mt-lg-0 mt-3"}>
          {navigation.items.map(item => <NavigationItem item={item} key={item.id}/>)}
        </Nav>
        { children }
      </Navbar.Collapse>
    </>
  )
}

Navigation.propTypes = {
  navigation: PropTypes.shape({
    items: PropTypes.array.isRequired
  }),
  isToggle: PropTypes.bool,
}

export default Navigation;