import { ReactComponent as LinuxIcon } from './icons/linux.svg' 

import React, { useState } from 'react';
import logo from './logo.svg';
import { CSSTransition } from 'react-transition-group';


function App() {
  return (
    <Navbar>
      <h1 className='header'>Linux Distros</h1>
      <NavbarItem icon={<LinuxIcon />}> 
       
        <DropdownMenu />

      </NavbarItem>
    </Navbar>
  );
}


function Navbar(props) {
  return(
    <nav className='navbar'>
      <ul className='navbar-list'> { props.children } </ul>
    </nav>
    
  );
}

function NavbarItem(props) {

  const [open, setOpen] = useState(false);

  return(
    <li className='navbar-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}

    </li>
  );
}


function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(element){
    const height = element.offsetHeight;
    setMenuHeight(height)
  }
 
  function DropdownMenuItem(props){
    return(
      <a href='#' className='dropdownmenu-item' onClick={ () => props.goToMenu
      && setActiveMenu(props.goToMenu) }>
        <span className='icon-left'> {props.leftIcon}</span>
  
        { props.children }
  
        <span className='icon-right'> {props.rightIcon}</span>
      </a>
    );
  }
  

  return(
    <div className="dropdown-menu" style={{height:menuHeight}}>
      <CSSTransition 
      classNames='menu-primary'
      in={activeMenu === 'main'} 
      timeout={500} 
      unmountOnExit
      onEnter={calcHeight}
      >

        <div className='menu'>
          
          <DropdownMenuItem goToMenu='debian'>Debian Based Distros</DropdownMenuItem>
          <DropdownMenuItem goToMenu='archlinux'>ArchLinux Based Distros</DropdownMenuItem>
          <DropdownMenuItem goToMenu='redhat'>Red Hat Based Distros</DropdownMenuItem>

        </div>

      </CSSTransition>


      <CSSTransition 
      classNames='secondary-debian'
      in={activeMenu === 'debian'} 
      timeout={500} 
      unmountOnExit
      onEnter={calcHeight}
      >

        <div className='menu'>
          <DropdownMenuItem goToMenu='main'>Torna indietro</DropdownMenuItem>
          <DropdownMenuItem><a href='https://ubuntu.com/'>Ubuntu</a></DropdownMenuItem>
          <DropdownMenuItem><a href='https://elementary.io/'>Elementary OS</a></DropdownMenuItem>
          <DropdownMenuItem><a href='https://www.deepin.org/en/'>Deepin</a></DropdownMenuItem>
          <DropdownMenuItem><a href='https://www.kali.org/'>Kali Linux</a></DropdownMenuItem>
      
        </div>
        
      </CSSTransition>

      <CSSTransition 
      classNames='secondary-archlinux'
      in={activeMenu === 'archlinux'} 
      timeout={500} 
      unmountOnExit
      onEnter={calcHeight}
      >

        <div className='menu'>
          <DropdownMenuItem goToMenu='main'>Torna indietro</DropdownMenuItem>
          <DropdownMenuItem><a href='https://manjaro.org/'>Manjaro</a></DropdownMenuItem>
          <DropdownMenuItem><a href='https://endeavouros.com/'>EndeavourOS</a></DropdownMenuItem>
          <DropdownMenuItem><a href='https://arcolinux.com/'>Arco Linux</a></DropdownMenuItem>
          <DropdownMenuItem><a href='https://blackarch.org/'>BlackArch Linux</a></DropdownMenuItem>
      
        </div>
        
      </CSSTransition>

      <CSSTransition 
      classNames='secondary-redhat'
      in={activeMenu === 'redhat'} 
      timeout={500} 
      unmountOnExit
      onEnter={calcHeight}
      >

        <div className='menu'>
          <DropdownMenuItem goToMenu='main'>Torna indietro</DropdownMenuItem>
          <DropdownMenuItem><a href='https://getfedora.org/'>Fedora</a></DropdownMenuItem>
          <DropdownMenuItem><a href='https://www.centos.org/'>CentOS</a></DropdownMenuItem>
          <DropdownMenuItem><a href='https://www.opensuse.org/'>openSuse</a></DropdownMenuItem>
          <DropdownMenuItem><a href='https://clearlinux.org/'>Clear Linux</a></DropdownMenuItem>
      
        </div>
        
      </CSSTransition>

    </div>
  );
}

export default App;

