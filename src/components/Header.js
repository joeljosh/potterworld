import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem}from 'reactstrap';
import { NavLink } from 'react-router-dom';
import logo from '../shared/images/logo.png'


const navtop = {backgroundColor: 'transparent',
            transition:'1s'  }

const navscrolled = {backgroundColor: '#C3CAD0',
                transition:'0.7s'  }


const navlinktop = {
    color:'#C3CAD0',
    padding:'1rem',
   
}

const navlinkscrolled = {
    color:'#0B1D3A',
    padding:'1rem'
}   

const togglertop = {
    color:'#C3CAD0',
    border:'none'
}
const togglerscrolled = {
    color:'#0B1D3A',
    border:'none'
}



class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isNavOpen: false,
            open: true,
            navstyle: navtop,
            navlinkstyle:navlinktop,
            togglerstyle:togglertop
        };
        

        this.handleScroll = this.handleScroll.bind(this);

        this.toggleNav = this.toggleNav.bind(this);

        this.closeNavbar = this.closeNavbar.bind(this);
        
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

      closeNavbar() {
        if (this.state.open == true) {
        this.toggleNav();
        }
    }

      componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
      }
      componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
      }
    
      handleScroll = e => {
    
        if (window.scrollY < 80) {
          this.setState({navstyle: navtop})
          this.setState({navlinkstyle:navlinktop})
          this.setState({togglerstyle:togglertop})

        } else if (window.scrollY > 80) {
          this.setState({navstyle: navscrolled})
          this.setState({navlinkstyle:navlinkscrolled})
          this.setState({togglerstyle:togglerscrolled})

        }
      }


    render() {
        return(
            <div>
                <Navbar light fixed="top" expand="md" fixed="top" className = 'navBar' onScroll={this.handleScroll} style={this.state.navstyle} >
                    <div className="container">
                        <NavbarBrand className="mr-auto" href="/"><img src={logo} height="50" width="60" alt=' ' /></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} className="ml-auto " style={this.state.togglerstyle}><i className="fa fa-bars fa-lg"></i></NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar className="ml-auto " >
                            <NavItem className='d-flex justify-content-center'>
                                <NavLink className="nav-link"  to='/home' style={this.state.navlinkstyle}  onClick={this.closeNavbar}><span className="fa fa-bolt fa-lg"></span> Home</NavLink>
                            </NavItem> 
                            <NavItem className='d-flex justify-content-center'>
                                <NavLink className="nav-link"  to='/hogwards' style={this.state.navlinkstyle}  onClick={this.closeNavbar}><span className="fa fa-fort-awesome fa-lg"></span>Hogwards</NavLink>
                            </NavItem>
                            <NavItem className='d-flex justify-content-center'>
                                <NavLink className="nav-link" to='/trivia' style={this.state.navlinkstyle}  onClick={this.closeNavbar}><span className="fa fa-graduation-cap fa-lg"></span>Trivia</NavLink>
                            </NavItem>
                           
                            </Nav>
                        </Collapse>
                        
                    </div>
                </Navbar>
         
               
            </div>
        );
    }
}

export default Header;