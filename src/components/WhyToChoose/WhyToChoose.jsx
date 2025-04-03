import React from 'react'
import './WhyToChoose.css'
const listPoints = [
  {
    heading:"Expertise You Can Trust",
    description:"Our experienced team provides top-notch ITR filing, accounting, and compliance services."
  }
  ,{
    heading:"Tailored Solutions:",
    description:"We tailor our services to meet your unique needs, ensuring the most effective results."
  },
  {
    heading:"Competitive Pricing",
    description:"We provide exceptional services at affordable rates with a transparent pricing structure."
  },
  {
    heading:"Commitment to Excellence",
    description:"We strive for excellence in everything we do, with a focus on detail and proactive support."
  }
]
const WhyToChoose = () => {
  return (
    <section className='didYouKnowSection' id='didYouKnowSection'>
      <h1 className='didYouKnowMainHeading'>Why Choose Taxu?</h1>
        <div className='didYouKnowContainer col-12'>
          <ul className='didYouKnowBlockLeft col-12 col-xl-6'>
            {
              listPoints.map((each)=> {
                return(
                  <li key={each.heading} className='didYouKnowEachBlock col-10 col-md-5'>
                    <h1 className='didYouKnowHeading'>{each.heading}</h1>
                    <p className='didYouKnowDescription'>{each.description}</p>
                  </li>
                )
              })
            }
          </ul>
          <div className='didYouKnowBlockRight col-12 col-xl-6'>
            Trusted By Many Customers Reviews
            <img src='#' alt='didYouKnow-image' className='didYouKnowImage'/>
          </div>
        </div>
    </section>
  )
}

export default WhyToChoose