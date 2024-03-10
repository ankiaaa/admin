import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../img/f3791b4e-2be0-4500-80dd-f2779658d5e4.jpeg"
export default function header() {
  return (
    <>
    
       
        <nav class="navbar bg-black " data-bs-theme="white">
  <div class="container-fluid text-white">
    <a class="navbar-brand">
      <img src={logo} width={200}/>
    </a>
    <form class="d-flex" role="search">
    <button class=" btn-outline-DARK bg-black p-2 rounded text-white" type="submit">Log out </button>
      <button class=" bg-black p-2 rounded ms-2 text-white" type="submit">MY PROFILE</button>
    </form>
  </div>
</nav>

           
   
    </>
  )
}
