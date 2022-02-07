import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'


import Filter from '../Filters'
import Cards from '../Cards'
// import cats from '../../mocks/cats.json'

import './style.css'

const Pets = () => {
  const [cats, setCats] = useState([])
  const fetchCats = async () => {
    const response = await axios.get('http://localhost:4000/cats')
    setCats(response.data)
  }
  useEffect(() => {
    fetchCats()
  }, [])


  return (
    <div className='container'>
      <div className="app-container">
        <Filter />
        <Cards cats={cats} />
      </div>
    </div >
  )
}
export default Pets
