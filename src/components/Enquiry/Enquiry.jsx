import React from 'react'
import './Enquiry.css'
import logo from './expert.jpg'
import Itr from './Itrfiles.webp'
import WhyToChoose from '../WhyToChoose/WhyToChoose';
import WorkFlowTaxu from '../WorkFlowTaxu/WorkFlowTaxu';
import InterestingFact from '../InterestingFact/InterestingFact';

const Enquiry = (props) => {
  const {setChange,contactOn} = props
  const changeState = ()=>{
    setChange(!contactOn)
}
  return (
    <>
    <section className='EnquirySection'>
        <h1 className='mainQuoteHeading'>"Simplify Your Finances with Expert Tax Filing and Accounting Services."</h1>
        <div className='EnquiryContainer'>
          <div className='enquiryBlock'>
              <img src={logo} alt={logo} className='img-expert'/>
             <div className='flex-aliginleft'>
                <h1 className='enquiryHeading'>Lets connect with our expert</h1>
                <p className='enquiryDescription'>Streamline your finances with professional expertise, ensuring accuracy and compliance while you focus on what matters most.</p>
                <button className='BtnEnquiry' type='button' onClick={changeState}>Connect   ➜</button>
              </div>
          </div>
          <div className='enquiryBlock'>
              <img src={Itr} alt={Itr} className='img-expert img-expert2'/>
              <div className='flex-aliginleft2'>
                <h1 className='enquiryHeading enquiryHeading2'>Start Exploring Services/Products</h1>
                <p className='enquiryDescription enquiryDescription2'>Begin your journey towards financial freedom with our comprehensive offerings tailored just for you.</p>
                <button className='BtnEnquiry' onClick={()=>window.location.href="#ContactFormSection"}>Explore   ➜</button>
              </div>
          </div>
        </div>
    </section>
    <WhyToChoose/> <WorkFlowTaxu/> <InterestingFact/><hr/>
    </>
  )
}

export default Enquiry