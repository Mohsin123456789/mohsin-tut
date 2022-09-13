import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd } from '@fortawesome/free-solid-svg-icons'
import HalfData from './HalfData'
function AskQuestion() {
    return (
        <>
            <div className='d-flex justify-content-center mt-5'>
                <button className='bg-danger '>click me</button>
            </div>

            <h3 className='text-center mt-3'>Ask Question</h3>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10 mx-auto'>
                        <div className='row'>
                            <div className='col-lg-6 d-flex flex-column'>
                                <div className='d-flex justify-content-between' style={{ height: "60px" }}>
                                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                                    <FontAwesomeIcon icon={faAdd} style={{ marginTop: "5px" }} />
                                </div>
                                <div className='d-flex justify-content-between' style={{ height: "60px" }}>
                                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                                    <FontAwesomeIcon icon={faAdd} style={{ marginTop: "5px" }} />
                                </div>
                                <div className='d-flex justify-content-between' style={{ height: "60px" }}>
                                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                                    <FontAwesomeIcon icon={faAdd} style={{ marginTop: "5px" }} />
                                </div>

                            </div>
                            <div className='col-lg-6 d-flex flex-column'>
                                <div className='d-flex justify-content-between ' style={{ height: "60px" }}>
                                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                                    <FontAwesomeIcon icon={faAdd} style={{ marginTop: "5px" }} />
                                </div>
                                <div className='d-flex justify-content-between' style={{ height: "60px" }}>
                                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                                    <FontAwesomeIcon icon={faAdd} style={{ marginTop: "5px" }} />
                                </div>
                                <div className='d-flex justify-content-between' style={{ height: "60px" }}>
                                    <p>Lorem Ipsum is simply dummy text of the printing </p>
                                    <FontAwesomeIcon icon={faAdd} style={{ marginTop: "5px" }} />
                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>


<HalfData/>

        </>
    )
}

export default AskQuestion
