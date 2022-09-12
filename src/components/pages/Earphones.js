import React from 'react'
import Carditems from '../Carditems'
import '../../App.css'

function Earphones() {
  return (
    <>
      <div className='phone-section'>
        <div className='header'>
          <h1>EARPHONES</h1>
        </div>
        <ul className='card_wrapper phone-section'>
          <Carditems
            src='images/1 (1).jpg'
            price='35'
            path='/earphones'
            title='Oraimo'
          />
          <Carditems
            src='images/1 (2).jpg'
            price='15'
            path='/earphones'
            title='Beet-cee'
          />
          <Carditems
            src='images/1 (4).jpg'
            price='31'
            path='/earphones'
            title='Sunetech'
          />
          <Carditems
            src='images/1 (16).jpg'
            price='26'
            path='/earphones'
            title='Neck Bluetooth'
          />
          <Carditems
            src='images/1 (15).jpg'
            price='25'
            path='/earphones'
            title='Foldable Headset'
          />
          <Carditems
            src='images/1 (17).jpg'
            price='34'
            path='/earphones'
            title='Bluetooth Pod'
          />
          <Carditems
            src='images/1 (18).jpg'
            price='22'
            path='/earphones'
            title='Bluetooth Stereo'
          />
          <Carditems
            src='images/1 (19).jpg'
            price='68'
            path='/earphones'
            title='Zealot Wireles'
          />
        </ul>
      </div>
    </>
  )
}

export default Earphones