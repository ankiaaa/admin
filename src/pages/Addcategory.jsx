import React from 'react'
import Header from '../common/Header'
import Dashboard from '../common/Dashboard'

export default function Addcategory() {
  return (
    <>
  <Header/>

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
