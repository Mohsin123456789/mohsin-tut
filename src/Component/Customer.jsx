import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

function Customer() {
    return (
        <>

<div className='container-fluid '>
                <div className='row '>
            
            <div className='d-flex justify-content-center mt-5'>
                <button className='bg-success'>click me</button>
            </div>

            <h3 className='text-center mt-2'>Customer Review</h3>
                    <div className='col-lg-9 mx-auto'>
                        <div className='row d-flex justify-content-between'>
                            <div className='col-lg-4   shadow-sm pb-3' >
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                <h4>lorem ipsum the data</h4>
                                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                            </div>

                            <div className='col-lg-4 shadow-sm pb-3' >
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                <h4>lorem ipsum the data</h4>
                                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                            </div>
                            <div className='col-lg-4 shadow-sm pb-3' >
                                <FontAwesomeIcon icon={faQuoteLeft} />
                                <h4>lorem ipsum the data</h4>
                                <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s</p>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default Customer
