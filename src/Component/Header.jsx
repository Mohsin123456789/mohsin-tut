import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import ImageCap from './ImageCap'

function Header() {
  return (
    <>
            <header className='header '>

<div className='container'>
  <div className='row'>

    <div className='col-md-12 mx-auto'>
      <nav class="navbar navbar-expand-lg navbar-light  ">
        <div class="container-fluid">
          <a class="navbar-brand text-light" href="#">Navbar</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li class="nav-item mx-md-4">
                <a class="nav-link  text-light" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item mx-md-4">
                <a class="nav-link text-light" href="#">Link</a>
              </li>
              <li class="nav-item mx-md-4">
                <a class="nav-link  text-light" href="#"  >Disabled</a>
              </li>
              <li class="nav-item mx-md-4">
                <a class="nav-link text-light " href="#"  >Disabled</a>
              </li>
            </ul>
            <div class="d-flex">
              <FontAwesomeIcon icon={faPhone} style={{ marginTop: "5px", marginRight: "15px" }} />
              <div class="d-flex flex-column  " style={{ lineHeight: "6px" }}>

                <p>Contact US</p>
                <p >+923094148312</p>

              </div>
            </div>
          </div>
        </div>
      </nav>

    </div>
    <ImageCap/>
  </div>
</div>


</header>

    </>
  )
}

export default Header
