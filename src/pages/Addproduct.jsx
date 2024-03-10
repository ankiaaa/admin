import React from 'react'
import Header from '../common/Header'
import Dashboard from '../common/Dashboard'
import { Col, Row } from 'react-bootstrap'

export default function Addproduct() {
  return (
    <>
    
    
   

<div className='flex'>
  <Dashboard/>
  <div>
      <h1>PRODUCTS</h1>
      <div>
          <form>
              Product Name
              <input type='text' />
              Product Price
              <input type='text' />
              Product Details
              <input type='textbox' />
          </form>
      </div>
  </div>

</div>
        
       
       
    </>
    
  )
}
