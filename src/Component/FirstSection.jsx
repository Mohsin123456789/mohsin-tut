import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone ,faHome,faQuoteLeft,faQuoteRight,faBook} from '@fortawesome/free-solid-svg-icons'

function FirstSection() {

    const section = [
        {
            icon: faPhone,
            heading: "Web Developer",
            desc: "Lorem Ipsum has been the industry's standard dummy "
        }
        ,
        {
            icon: faHome,
            heading: "full stack developer",
            desc: "Lorem Ipsum has been the industry's standard dummy "
        }
        , {
            icon: faQuoteLeft,
            heading: "front end developer",
            desc: "Lorem Ipsum has been the industry's standard dummy "
        }
        , {
            icon: faQuoteRight,
            heading: "data science developer",
            desc: "Lorem Ipsum has been the industry's standard dummy "
        }
        ,
        {
            icon: faBook,
            heading: "java software engineer",
            desc: "Lorem Ipsum has been the industry's standard dummy "
        }
        , {
            icon: faPhone,
            heading: "Web Developer",
            desc: "Lorem Ipsum has been the industry's standard dummy "
        }


    ]
    return (
        <>

            <div className='row mt-5'>
                <div className='col-md-10 mx-auto'>
                    <div className='row'>{
                        section.map((data) => (
                            <div className='col-lg-4 d-flex '>
                                <div style={{ width: "50px", height: "50px", backgroundColor: "orange", padding: "14px 17px", marginRight: "10px", marginTop: "20px" }} >
                                    <FontAwesomeIcon icon={data.icon} />
                                </div>
                                <div className='d-flex flex-column'>
                                    <h3>{data.heading}</h3>
                                    <p>{data.desc}</p>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>


            </div>


        </>
    )
}

export default FirstSection
