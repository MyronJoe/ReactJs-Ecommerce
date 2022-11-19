import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer-container'>

                <Link to='/' className='footer-link'>
                    Contact Us
                </Link>
                <Link to='/' className='footer-link'>
                    Privacy
                </Link>
                <Link to='/' className='footer-link'>
                    Faq
                </Link>

                <Link to='/' className='footer-link link'>
                    Terms and condition
                </Link>
            </div>
        </>
    )
}

export default Footer