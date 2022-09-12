import React from 'react'
import Carditems from '../Carditems'
import '../../App.css'

function Laptops() {
  return (
    <>
      <div className='phone-section'>
        <div className='header'>
          <h1>LAPTOPS</h1>
        </div>
        <ul className='card_wrapper phone-section'>
          <Carditems
            src='images/1 (7).jpg'
            price='1680'
            path='/laptops'
            title='Lenovo'
          />
          <Carditems
            src='images/1 (8).jpg'
            price='2231'
            path='/laptops'
            title='Hp 15 intel Quad-core'
          />
          <Carditems
            src='images/1 (9).jpg'
            price='1371'
            path='/laptops'
            title='Hp Stream 14'
          />
          <Carditems
            src='images/2 (1).jpg'
            price='3904'
            path='/laptops'
            title='Hp Pavilion 15'
          />
          <Carditems
            src='images/2.jpg'
            price='2317'
            path='/laptops'
            title='Hp Pentium'
          />
          <Carditems
            src='images/3 (1).jpg'
            price='1224'
            path='/laptops'
            title='Hp Stream 13'
          />
          <Carditems
            src='images/3.jpg'
            price='1689'
            path='/laptops'
            title='Lenovo intel Celeron'
          />
          <Carditems
            src='images/1 (7).jpg'
            price='1680'
            path='/laptops'
            title='Lenovo (Black)'
          />
        </ul>
      </div>  
    </>
  )
}

export default Laptops