import {useState} from 'react'
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './Nav.css'



function Navbar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);


  return(
    <div className='header'>
      <div className='container'>
        <div className='header-con'>
          <div className='logo-container'>
            <Link to='/'>Life Code</Link>
          </div>
            <div className={click ? 'menu active' : 'menu'}>
              <Link to='/' className='nav-link'onClick={closeMobileMenu}>Home</Link>
              <Link to='/Category' className='nav-link'onClick={closeMobileMenu}>Category</Link>
              <Link to='/About' className='nav-link'onClick={closeMobileMenu}>About</Link>
              <Link to='/contact' className='nav-link'onClick={closeMobileMenu}>Contact</Link>
            </div>
          <div className='mobile-menu' onClick={handleClick}>
            {click ? (
              <CloseIcon />
            ) : (
              <MenuIcon />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar