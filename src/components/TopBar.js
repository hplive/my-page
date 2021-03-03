import React from 'react';
import {Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


class TopBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  

  render() {
    const profilePic = 'https://scontent.fopo2-1.fna.fbcdn.net/v/t1.0-1/p160x160/117312188_10219422998338355_3291117369923019208_n.jpg?_nc_cat=111&ccb=3&_nc_sid=dbb9e7&_nc_ohc=ANUITbGxvk0AX8bP11d&_nc_ht=scontent.fopo2-1.fna&tp=6&oh=f4a3cb8f2e36b1144ae7fe02d725f783&oe=6065C3DE';  
    return (
      <Navbar color="dark" dark expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={profilePic} className="profile-pic" alt="Helder Pereira"/>
            <span>Helder Pereira</span>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/profile/">Profile</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default TopBar;