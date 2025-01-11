import React from 'react'
import './Enquiry.css'
import logo from './expert.jpg'
import Itr from './Itrfiles.webp'
const Enquiry = () => {
  return (
    <section className='EnquirySection'>
        <h1 className='mainQuoteHeading'>"Simplify Your Finances with Expert Tax Filing and Accounting Services."</h1>
        <div className='EnquiryContainer'>
          <div className='enquiryBlock'>
              <img src={logo} className='img-expert'/>
             <div className='flex-aliginleft'>
                <h1 className='enquiryHeading'>Lets connect with our expert</h1>
                <p className='enquiryDescription'>Streamline your finances with professional expertise, ensuring accuracy and compliance while you focus on what matters most.</p>
                <button className='BtnEnquiry'>Connect   ➜</button>
              </div>
          </div>
          <div className='enquiryBlock'>
              <img src={Itr} className='img-expert img-expert2'/>
              <div className='flex-aliginleft2'>
                <h1 className='enquiryHeading enquiryHeading2'>Start Exploring Services/Products</h1>
                <p className='enquiryDescription enquiryDescription2'>Begin your journey towards financial freedom with our comprehensive offerings tailored just for you.</p>
                <button className='BtnEnquiry'>Explore   ➜</button>
              </div>
          </div>
        </div>
    </section>
  )
}

export default Enquiry