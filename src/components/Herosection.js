import React from 'react'
import './Herosection.css'

function Herosection() {
  return (
    <>
        <div className='hero-container'>
            <div className='left-box'>
                <img src='images/blog-4.jpg' alt='Banner-pic'/>
            </div>
            <div className='right-box'>
                <div className='right-2x1'>

                    <div className='right-1x1'>
                        <img src='images/testi-1.jpg' alt='Banner-pic'/>
                        <div className='icon'>
                            <i className='fa fa-angle-right'></i>
                        </div>
                        <div className='hover-container'>
                            <p>Watches</p>
                        </div>
                    </div>

                    <div className='right-1x1'>
                        <img src='images/work-3.jpg' alt='Banner-pic'/>
                        <div className='icon'>
                            <i className='fa fa-angle-right'></i>
                        </div>
                        <div className='hover-container'>
                            <p>Phones</p>
                        </div>
                    </div>

                </div>

                <div className='right-2x1'>

                    <div className='right-1x1'>
                        <img src='images/work-2.jpg' alt='Banner-pic'/>
                        <div className='icon'>
                            <i className='fa fa-angle-right'></i>
                        </div>
                        <div className='hover-container'>
                            <p>Laptops</p>
                        </div>
                    </div>
                    
                    <div className='right-1x1'>
                        <img src='images/work-1.jpg' alt='Banner-pic'/>
                        <div className='icon'>
                            <i className='fa fa-angle-right'></i>
                        </div>
                        <div className='hover-container'>
                            <p>Earphones</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  )
}

export default Herosection