import React from 'react'
import Carditems from '../Carditems'
import '../../App.css'

function Phones() {
  return (
    <>
      <div className='phone-section'>
        <div className='header'>
          <h1>PHONES</h1>
        </div>
        <ul className='card_wrapper phone-section'>
          <Carditems
            src='images/1 (5).jpg'
            price='450'
            path='/phones'
            title='Redmi'
          />
          <Carditems
            src='images/1 (6).jpg'
            price='390'
            path='/phones'
            title='Redmi P-series'
          />
          <Carditems
            src='images/1 (10).jpg'
            price='3850'
            path='/phones'
            title='Iphone 13 Pro Max'
          />
          <Carditems
            src='images/1 (11).jpg'
            price='170'
            path='/phones'
            title='Iphone X'
          />
          <Carditems
            src='images/1 (14).jpg'
            price='150'
            path='/phones'
            title='Oscal Xp'
          />
          <Carditems
            src='images/1 (13).jpg'
            price='087'
            path='/phones'
            title='Nokia mini'
          />
          <Carditems
            src='images/3 (2).jpg'
            price='350'
            path='/phones'
            title='Iphone Xr'
          />
          <Carditems
            src='images/ap133.jpg'
            price='750'
            path='/phones'
            title='Iphone 13 Series'
          />
        </ul>
      </div>

    </>
  )
}

export default Phones