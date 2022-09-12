import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {

    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

  return (
    <>
        <nav>
            <div className='nav-container'>
                <Link to='/' className='nav-logo' onClick={closeMobileMenu}>
                <img src='images/logo.png' alt='Banner-pic'/>
                </Link>
                <div className='nav-menus'>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item ' onClick={closeMobileMenu}>
                            <Link to='/' className='nav-link active-link'>Home</Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/phones' className='nav-link'>Phones</Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/watches' className='nav-link'>Watches</Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/earphones' className='nav-link'>Earphones</Link>
                        </li>
                        <li className='nav-item' onClick={closeMobileMenu}>
                            <Link to='/laptops' className='nav-link'>Laptops</Link>
                        </li>
                        <li>
                            <div className='nav-search'>
                                <i className='fa fa-search'></i>
                                <input type='text' placeholder='Search for phones, laptops... ' />
                            </div>
                        </li>
                    </ul>

                    

                    <div className='cart-section'>

                        <div className='cart'>
                            <i className='fa fa-shopping-cart'></i>
                            <div className='cart-num'>6</div>
                        </div>
                        <div className='user'>
                            <i className='fa fa-user'></i>
                        </div>

                        <div className='nav-menu-icon' onClick={handleClick}>
                            <i className={click ? 'fa fa-times' : 'fa fa-bars'}></i>
                        </div>

                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar