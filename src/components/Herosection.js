import React from 'react'
import { Link } from 'react-router-dom'
import './Herosection.css'

function Herosection() {
    return (
        <>
            <div className='hero-container'>
                <div className='left-box'>
                    <img src='images/Hero_bg.png' alt='Banner-pic' />
                    <div className='hero-info'>
                        <h2>Get an iPhone</h2>
                        <h1 className='info-red'>13 PRO MAX</h1>
                        <h1 className='info-mid'>Up to <span className='info-red'>20%</span> off.</h1>
                        <p>This offer ends in 10:02:54</p>
                        <button className='btn'>Buy Now</button>
                    </div>
                </div>
                <div className='right-box'>
                    <div className='right-2x1'>

                        <Link to='/watches' className='right-1x1'>
                            <img src='images/1 (23).jpg' alt='Banner-pic' />
                            <div className='icon'>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className='hover-container'>
                                <p>Watches</p>
                            </div>
                        </Link>

                        <Link to='/phones' className='right-1x1'>
                            <img src='images/ap133.jpg' alt='Banner-pic' />
                            <div className='icon'>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className='hover-container'>
                                <p>Phones</p>
                            </div>
                        </Link>

                    </div>

                    <div className='right-2x1'>

                        <Link to='/laptops' className='right-1x1'>
                            <img src='images/2.jpg' alt='Banner-pic' />
                            <div className='icon'>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className='hover-container'>
                                <p>Laptops</p>
                            </div>
                        </Link>

                        <Link to='/earphones' className='right-1x1'>
                            <img src='images/1 (15).jpg' alt='Banner-pic' />
                            <div className='icon'>
                                <i className='fa fa-angle-right'></i>
                            </div>
                            <div className='hover-container'>
                                <p>Earphones</p>
                            </div>
                        </Link>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection