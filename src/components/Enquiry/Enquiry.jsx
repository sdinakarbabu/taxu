import React from 'react'
import './Enquiry.css'
// import logo from './expert.jpg'
// import Itr from './Itrfiles.webp'

const AccountingData = [
  {
    heading:"LETS CONNECT WITH EXPERT",
    description:"Streamline your finances with professional expertise, ensuring accuracy and compliance while you focus on what matters most.",
    btn:"Contact",
    link:"/contact"
  },
  {
    heading:"EXPLORE",
    description:"Begin your journey towards financial freedom with our comprehensive offerings tailored just for you.",
    btn:"Explore",
    link:"/products"
  }
]

const Enquiry = (props) => {
  const {setChange,contactOn} = props
  const changeState = ()=>{
    setChange(!contactOn)
  }
  return (
    <section className='EnquirySection' id='EnquirySection'>
      <h1 className='mainQuoteHeading'>"Simplify Your Finances with Expert Tax Filing and Accounting Services."</h1>
      <div className='accountingServicesContainer'>
        {
          AccountingData.map((ele)=>{
            return(
              <div className='accountingServicesEachBlock' key={ele.heading}>
                <h1 className='serviceHeading'>{ele.heading}</h1>
                <p className='serviceDescription'>{ele.description}</p>
                <a href={ele.link}><button className='serviceBtn'>{ele.btn}</button></a>
              </div>
            )
          })
        }
      </div> 
    </section>
  )
}

export default Enquiry