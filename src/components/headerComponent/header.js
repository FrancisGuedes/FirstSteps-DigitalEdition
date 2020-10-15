import React, {Component} from 'react';
import {
  Link
} from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { MenuItems } from './menuItems';
import { Button } from '../headerComponent/button';
import { FaBars, FaTimes } from 'react-icons/fa';

 
// Components
class Header extends Component {
    state = { clicked: false };

    handleClick = () => {
      this.setState({ clicked: !this.state.clicked })
    };
  render() {
    return (
      <header>
        <div className='menu_header_logo' role='img' onClick={() => scroll.scrollToTop()}>LOGO</div>
        <div className='menu-icon' onClick={this.handleClick} >
          <i className={this.state.cliked ? 'fa fa-times' : 'fa fa-bars'}></i>
          
        </div>

        <nav>
          <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'} >
            {MenuItems.map((item, index) => {
              return(
                <li key={index}>
                <a className={item.cName} href={item.url}>{item.title}</a>
                </li>
                )})
              }

            {/*
              <li className='first'> 
            <li>
              <Link to ='eventNavbar_link' smooth={true} duration={1000}>Evento</Link>
            </li >
              <Link className={item.cName} to ='competitionHomeNavbar_link' smooth={true} duration={1000}></Link>
            </li>
            <li>
              <Link to ='programNavbar_link' smooth={true} duration={1000}>Programa</Link>
            </li>
            <li>
              <Link to ='funding_link' smooth={true} duration={1000}>Iniciativa</Link>
            </li>
            <li className='last'>
              <Link to ='contactNavbar_link' smooth={true} duration={1000}>Contactos</Link>
            </li>
                */}
              
              
          </ul>
          <Button>Inscreve-te</Button>
        </nav>
      </header>
   )
 }
}

export default Header;