import React from 'react'
import './Card.css'
import Carditems from './Carditems'

function Card() {
  return (
    <>
        <div className='card-section'>
            <div className='card-header'>
                <h1>Trending Products</h1>
                <p>List of trending products available in our store</p>
            </div>
            <ul className='card_wrapper'>
                <Carditems 
                    src = 'images/work-1.jpg'
                    price = '350'
                    path = '/'
                    title = 'iphone xr'
                />
                <Carditems 
                    src = 'images/work-1.jpg'
                    price = '350'
                    path = '/'
                    title = 'iphone xr'
                />
                <Carditems 
                    src = 'images/work-1.jpg'
                    price = '350'
                    path = '/'
                    title = 'iphone xr'
                />
                <Carditems 
                    src = 'images/work-1.jpg'
                    price = '350'
                    path = '/'
                    title = 'iphone xr'
                />
                <Carditems 
                    src = 'images/work-1.jpg'
                    price = '350'
                    path = '/'
                    title = 'iphone xr'
                />
                <Carditems 
                    src = 'images/work-1.jpg'
                    price = '350'
                    path = '/'
                    title = 'iphone xr'
                />
                <Carditems 
                    src = 'images/work-1.jpg'
                    price = '350'
                    path = '/'
                    title = 'iphone xr'
                />
                <Carditems 
                    src = 'images/work-1.jpg'
                    price = '350'
                    path = '/'
                    title = 'iphone xr'
                />
            </ul>
        </div>
    </>
  )
}

export default Card