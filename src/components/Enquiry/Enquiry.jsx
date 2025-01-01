import React from 'react'
import './Enquiry.css'
import logo from './expert.jpg'
import Itr from './Itrfiles.webp'
const Enquiry = () => {
  return (
    <section className='EnquiryContainer'>
        <div className='enquiryBlock'>
            <img src={logo} className='img-expert'/>
            <p className='enquiryDescription'>Lets connect with our expert</p>
            <button className='BtnEnquiry'>Connect</button>
        </div>
        <div className='enquiryBlock'>
            <img src={Itr} className='img-expert img-expert2'/>
            <p className='enquiryDescription enquiryDescription2'>Start Exploring Services/Products</p>
            <button className='BtnEnquiry'>Explore</button>
        </div>
    </section>
  )
}

export default Enquiry