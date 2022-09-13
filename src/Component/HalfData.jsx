import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

function HalfData() {
    return (
        <>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-6 bg-primary' style={{ height: "270px" }}>
                        <div className='row'>
                            <div className='col-md-6 mx-auto'>
                                <h4 className='mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</h4>


                            </div>
                        </div>

                    </div>
                    <div className='col-lg-6 bg-danger ' style={{ height: "270px" }} >
                        <div className='row'>
                            <div className='col-md-4 mx-auto '>
                                <div className='mt-5 text-center'>
                                    <FontAwesomeIcon icon={faPhone} />
                                    <h5 className='text-center'> web developer
                                        <br />
                                        9249274987238
                                        <br />
                                        contact us</h5>

                                </div>


                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default HalfData
