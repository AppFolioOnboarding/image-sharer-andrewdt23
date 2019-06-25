import React from 'react';
import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar className='header' dark expand="md">
          <NavbarBrand style={{ fontSize: '30px' }} href="/">Manage URL</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
