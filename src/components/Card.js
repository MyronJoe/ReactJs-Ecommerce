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
                    src = 'images/3 (2).jpg'
                    price = '470'
                    path = '/'
                    title = 'Iphone 11'
                />
                <Carditems 
                    src = 'images/1 (24).jpg'
                    price = '62'
                    path = '/'
                    title = 'Smart Watch'
                />
                <Carditems 
                    src = 'images/1.jpg'
                    price = '764'
                    path = '/'
                    title = 'Iphone 13'
                />
                <Carditems 
                    src = 'images/1 (21).jpg'
                    price = '35'
                    path = '/'
                    title = 'Skemi Quartz'
                />
                <Carditems 
                    src = 'images/1 (7).jpg'
                    price = '1098'
                    path = '/'
                    title = 'Lenovo Ideapad'
                />
                <Carditems 
                    src = 'images/1 (10).jpg'
                    price = '850'
                    path = '/'
                    title = 'Iphone 13 Pro Max'
                />
                <Carditems 
                    src = 'images/1 (2).jpg'
                    price = '25'
                    path = '/'
                    title = 'Earpod'
                />
                <Carditems 
                    src = 'images/1 (4).jpg'
                    price = '29'
                    path = '/'
                    title = 'Headphone'
                />
                <Carditems 
                    src = 'images/1.jpg'
                    price = '764'
                    path = '/'
                    title = 'Iphone 13'
                />
            </ul>
        </div>
    </>
  )
}

export default Card