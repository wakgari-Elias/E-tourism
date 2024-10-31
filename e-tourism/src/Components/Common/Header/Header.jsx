import React, { useEffect, useState } from 'react'
import {
  Container,
  Row,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown
  
} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import "../Header/Header.css";

const Header = () => {
  const [open,setOpen]=useState(false);


  
  const  toggleMenu =()=>{
    setOpen(!open);
    
  };


useEffect(()=>{
  window.addEventListener("scroll", isSticky);
  return () => {
    window.removeEventListener("scroll", isSticky);
    };
})

//sticky header
const isSticky = (e) => {
  const header=document.querySelector('header-section');
  const scrollTop =window.scrollY;
  scrollTop>=120 ? header.classList.add('is-sticky'):
  header.classList.remove('is-sticky');
  
  
}







  return (
    <header className='header-section'>
      <Container>
        <Row>

        <Navbar expand='lg'  className="p-0">
          {/* Logo section */}
          
            <Navbar.Brand >
              <NavLink className='nav-link' to='/'> Weekendmonks</NavLink>  
            </Navbar.Brand>

            {/* End Logo Section */}
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-lg`}
              aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
              placement="start"
              show={open}
            >
          {/* mobile Logo section */}

              <Offcanvas.Header >
                <h1 className='logo'>Weekendmonks</h1>
                <span className='navbar-toggler ms-auto' onClick={toggleMenu}>
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
  <i className= {open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
</li>


        </Navbar>

        </Row>

      </Container>
    </header>
  )
}

export default Header
