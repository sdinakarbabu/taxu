import React from 'react'
import './WhyToChoose.css'
const DidYouKnowData = {
    image:"thinkingemoji",
    description:"In FY 2023-24, 6.68% of the population filed Income Tax Returns (ITR), with 8 croce returns submitted. Over the past 5 years, the number of individuals declaring zero taxable income has varied, with 4.9 lakh filings in 2023-24."
}
const listPoints = [
  {
    description:"Industry Expert Services"
  }
  ,{
    description:"Personalized and Reliable Solutions"
  },
  {
    description:"Competitive Pricing and Timely Support"
  }
]
const WhyToChoose = () => {
  return (
    <section className='didYouKnowSection'>
        <div className='didYouKnowBlockLeft'>
          <h1 className='didYouKnowHeading'>Why Choose Taxu?</h1>
          <ul className='choosePointsBlock'>
            {
              listPoints.map((each)=> <li className='eachChoosePoint'>➣ {each.description}</li>)
            }
          </ul>
        </div>
        <div className='didYouKnowBlockRight'>
            {/* <img src='#' alt='didYouKnow-image' className='didYouKnowImage'/> */}
        </div>
    </section>
  )
}

export default WhyToChoose