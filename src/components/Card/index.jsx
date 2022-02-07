import React, { useState } from 'react';

import HeartFilled from '../../assets/heartFilled.svg'
import HeartOutlined from '../../assets/heartOutlined.svg'

import './style.css'

const Card = ({ name, phone, email, image, favoured }) => {

  const [isFavoured, setIsFavoured] = useState(favoured)

  const toggleFavoured = () => {
    setIsFavoured(!isFavoured)
  }

  return <article className='card'>
    <div className='card-header'>
      <img src={image.url} alt={image.alt} className='card-img' />
      <button className='heart' onClick={toggleFavoured}>
        {isFavoured ? (<img src={HeartFilled} alt='filled heart' />) : (<img src={HeartOutlined} alt='outlined heart' />)}
      </button>
    </div>
    <div className='card-content'>
      <h3>{name}</h3>
      <p>{phone}</p>
      <p>{email}</p>
    </div>
  </article>;
}

export default Card
