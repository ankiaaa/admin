import React from 'react'
import Header from './Header'
import { Col, Container, Row } from 'react-bootstrap'
import Addproduct from '../pages/Addproduct'
import Addcategory from '../pages/Addcategory'
import AddSlider from '../pages/AddSlider'
import Viewproduct from '../pages/Viewproduct'
import Viewcategory from '../pages/Viewcategory'
import ViewSlider from '../pages/ViewSlider'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'


export default function Dashboard() {
  return (
    <>
    <Header/>
    <div>
 <Row>
  <Col lg={3}>
    <div >
    <div class="accordion " id="accordionExample">
  <div class="accordion-item bg-black text-white">
    <h2 class="accordion-header text-white">
      <button class="accordion-button bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       PRODUCT
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show text-white" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <ul>
          
          <Link to = "/Addproduct"> 
          <li className='text-white'> ADD PRODUCT</li>
          </Link>
          
          <Link to = "/Viewproduct"> 
          <li>VIEW PRODUCT</li>
          </Link>
        </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-black text-white">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       CATEGORY
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
       <ul>
       <Link to = "/Addcategory"> 
        <li>ADD CATEGORY</li>
        </Link>

        <Link to = "/Viewcategory"> 
        <li> VIEW CATEGORY</li>
        </Link>
       </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-black text-white">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        SLIDER
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <ul>
      <Link to = "/Addslider"> 
        <li>ADD SLIDER</li>
        </Link>
        <Link to = "/Viewslider"> 
        <li> VIEW SLIDER</li>
        </Link>
       </ul>
      </div>
    </div>
  </div>
  <div class="accordion-item bg-black text-white">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        TEAM
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      
      </div>
    </div>
  </div>
  <div class="accordion-item bg-black text-white">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed bg-black text-white" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        USERS
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      
      </div>
    </div>
  </div>
</div>
    </div>
  </Col>
  <Col lg={9}>
    <div>
   <Home/>
    </div>
  </Col>
 </Row>
 </div>

    </>
   
    
  )
}
