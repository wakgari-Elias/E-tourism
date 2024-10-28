import React from 'react'
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown
  
} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <section className='header-section'>
      <Container>
        <Row>

        <Navbar expand='lg'  className="bg-body-tertiary mb-3">
          {/* Logo section */}
          
            <Navbar.Brand >
              <NavLink className='nav-link' to='/'> Weekendmonks</NavLink>  
            </Navbar.Brand>

            {/* End Logo Section */}
            
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
            >
          {/* mobile Logo section */}

              <Offcanvas.Header >
                <h1 className='logo'>Weekendmonks</h1>
                <span className='navbar-toggler ms-auto'>
                <i className="bi bi-x-lg"></i>

                </span>

</Offcanvas.Header>

{/* End mobile Logo section */}


              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink className='nav-link' to="/">Home</NavLink>
                  <NavLink className='nav-link' to="/">About Us</NavLink>
                  <NavLink className='nav-link' to="/">Tours</NavLink>


                  <NavDropdown
                    title="Destination"
                    id={`offcanvasNavbarDropdown-expand-lg`}
                  >
                    <NavDropdown.Item href="#action4"> Italy Tours </NavDropdown.Item>
                    <NavDropdown.Item href="#action5"> France Tours</NavDropdown.Item>
                    <NavDropdown.Item href="#action5"> Spain Tours</NavDropdown.Item>

                  </NavDropdown>
                  <NavLink className='nav-link' to="/">Gallery</NavLink>
                  <NavLink  className='nav-link'to="/">Contact</NavLink>

                </Nav>
              
              </Offcanvas.Body>
            </Navbar.Offcanvas>

<div className="ms-md-4 ms-2"></div>
<NavLink className="primaryBtn d-none d-sm-inline-block">
  <span className="btn-text">Book Now</span>
</NavLink>

<li className='d-inline-block d-lg-none ms-3 toggle_btn'>
  <i className="bi bi-list"></i>
</li>


        </Navbar>

        </Row>

      </Container>
    </section>
  )
}

export default Header
