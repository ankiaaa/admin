import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from "../img/Myntra Logo.jpeg"
import Home  from "../pages/Home"
import Dashboard from '../common/Dashboard'
export default function Login() {
  return (
    <>
    <Container fluid className='p-0'>
     <div className='bg-black m-0 p-5 position-relative'>
      <div className='text-center p-5'>
        <img src={logo} width={300}/>
      </div>
     
     <div className='p-4 bg-white mx-auto form border shadow'>
         <form>
             <h2 className='text-center'>  SIGN IN  </h2>
             <p>USERNAME</p>
             <input type='text' className='w-100 p-2 mb-2 rounded' placeholder='USERNAME'/>
             <p>PASSWORD</p>
             <input type='text' className='w-100 p-2 mb-2 rounded'  placeholder='PASSWORD'/>
             <Row>
                <Col lg={6}>
                 <div>
                     <input type= "checkbox" className='me-1'/> Stay signed in
                 </div>
                </Col>
                <Col lg={6}>
                 <div className='text-end'>
                     <a href='' style={{color:'grey'}}>
                     Forget Password ?
                     </a>
                 </div>
                </Col>
             </Row>
             <Link to = "/Dashboard">
            <button className='bg-black w-100 p-2 mt-3 text-white mb-3' >
             SIGN IN
            </button>
            </Link>
         </form>
     </div>
     </div>
     
    </Container>
    </>
  )
}
