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
            src='images/work-1.jpg'
            price='350'
            path='/phones'
            title='iphone xr'
          />
          <Carditems
            src='images/work-1.jpg'
            price='350'
            path='/phones'
            title='iphone xr'
          />
          <Carditems
            src='images/work-1.jpg'
            price='350'
            path='/phones'
            title='iphone xr'
          />
          <Carditems
            src='images/work-1.jpg'
            price='350'
            path='/phones'
            title='iphone xr'
          />
          <Carditems
            src='images/work-1.jpg'
            price='350'
            path='/phones'
            title='iphone xr'
          />
          <Carditems
            src='images/work-1.jpg'
            price='350'
            path='/phones'
            title='iphone xr'
          />
          <Carditems
            src='images/work-1.jpg'
            price='350'
            path='/phones'
            title='iphone xr'
          />
          <Carditems
            src='images/work-1.jpg'
            price='350'
            path='/phones'
            title='iphone xr'
          />
        </ul>
      </div>

    </>
  )
}

export default Phones