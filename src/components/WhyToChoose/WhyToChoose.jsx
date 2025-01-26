import React from 'react'
import './WhyToChoose.css'
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
              listPoints.map((each)=> <li className='eachChoosePoint' key={each.description}>➣ {each.description}</li>)
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