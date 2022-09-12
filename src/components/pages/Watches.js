import React from 'react'
import Carditems from '../Carditems'
import '../../App.css'

function Watches() {
  return (
    <>
        <div className='phone-section'>
        <div className='header'>
          <h1>WATCHES</h1>
        </div>
        <ul className='card_wrapper phone-section'>
          <Carditems
            src='images/1 (3).jpg'
            price='35'
            path='/watches'
            title='Nepicz'
          />
          <Carditems
            src='images/1 (21).jpg'
            price='11'
            path='/watches'
            title='Skemi'
          />
          <Carditems
            src='images/1 (23).jpg'
            price='65'
            path='/watches'
            title='Smart Watch'
          />
          <Carditems
            src='images/1 (22).jpg'
            price='94'
            path='/watches'
            title='Nepic Modern'
          />
          <Carditems
            src='images/1 (24).jpg'
            price='62'
            path='/watches'
            title='Smart Watch'
          />
          <Carditems
            src='images/1 (22).jpg'
            price='94'
            path='/watches'
            title='Nepic Modern'
          />
          <Carditems
            src='images/167378_1634906095.jpg'
            price='53'
            path='/watches'
            title='Smart Watch'
          />
          <Carditems
            src='images/1 (20).jpg'
            price='45'
            path='/watches'
            title='Classic Digital'
          />
        </ul>
      </div>
    </>
  )
}

export default Watches