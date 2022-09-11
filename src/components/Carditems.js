import React, {useState} from 'react'
import { Link } from 'react-router-dom'

function Carditems(props) {
    const[click, setClick] = useState(false)

    const addColor = () => setClick(!click)
  return (
    <>
        <li className='card-items'>
            <Link to={props.path} className='card'>
                <div className='img-section'>
                    <img src={props.src}  alt={props.title} className='card-img'/>
                    <p className='favourite-icon'><i onClick={addColor} className={click ? 'fa fa-heart fa-heart-active' : 'fa fa-heart'}></i></p>
                </div>
                <p className='phone-name'>{props.title}</p>
                <div className='price-section'>
                    <p className='price'>${props.price}</p>
                    <p className='plus-icon'><i className='fa fa-plus'></i></p>
                </div>
            </Link>
        </li>
    </>
  )
}

export default Carditems