import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Link
} from "react-router-dom";
import CartWidget from "./CartWidget";


const NavBar = () => {

  return (

    <div>

      <Navbar collapseOnSelect expand="lg" bg="dark blue" variant=" dark blue">
        <CartWidget />
        <Container>

          <Navbar.Brand >
            <Link to="/">TODO SEMILLAS</Link>
          </Navbar.Brand>



          <NavDropdown title="SEMILLAS" id="collasible-nav-dropdown">

            <NavDropdown.Item>
              <Link to="/category/nacional">SEMILLAS NACIONALES</Link>
            </NavDropdown.Item>

            <NavDropdown.Item >
              <Link to="/category/importada">SEMILLAS IMPORTADAS</Link>


            </NavDropdown.Item>

            <NavDropdown.Divider />

          </NavDropdown>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav">

            <Nav className="me-auto">

              <NavDropdown.Item>
              </NavDropdown.Item>




            </Nav>

          </Navbar.Collapse>

        </Container>
      </Navbar>








    </div>

  );

};

export default NavBar;