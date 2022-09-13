import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, } from '@fortawesome/free-solid-svg-icons'  //it is use for older icon 
import { faFacebook, faYoutube, faLinkedin, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons" //it is use for new icon


function Footer() {
  return (
    <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-4'>
            <p>all rights are reserverd:AssianSol</p>
          </div>
          <div className='col-lg-4 '>
            <p>lorem ipsum is a demy text </p>
          </div>
          <div className='col-lg-4 d-flex justify-content-center'>
            <button style={{ width: "30px", height: "30px", border: "0px", margin: "5px" }}>

              <FontAwesomeIcon icon={faFacebook} />

            </button>
            <button style={{ width: "30px", height: "30px", border: "0px", margin: "5px" }}>
              <FontAwesomeIcon icon={faYoutube} />
            </button>
            <button style={{ width: "30px", height: "30px", border: "0px", margin: "5px" }}>
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
            <button style={{ width: "30px", height: "30px", border: "0px", margin: "5px" }}>
              <FontAwesomeIcon icon={faInstagram} />
            </button>
            <button style={{ width: "30px", height: "30px", border: "0px", margin: "5px" }}>
              <FontAwesomeIcon icon={faTiktok} />
            </button>

          </div>

        </div>
      </div>
    </>
  )
}

export default Footer
