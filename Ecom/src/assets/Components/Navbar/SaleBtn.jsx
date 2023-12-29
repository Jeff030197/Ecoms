import React from 'react'
import { Link } from 'react-router-dom'

function SaleBtn() {
  return (
    <div className='py-4'>
               <Link to="Sale"><button className='bg-green-600 px-3 rounded-lg hover:bg-blue-200 py-2'>Sale</button></Link> </div> 
  )
}

export default SaleBtn