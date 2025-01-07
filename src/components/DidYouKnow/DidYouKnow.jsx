import React from 'react'
import './DidYouKnow.css'
import thinkingemoji from './thinkingemoji.png'
const DidYouKnowData = {
    image:thinkingemoji,
    description:"In FY 2023-24, 6.68% of the population filed Income Tax Returns (ITR), with 8 croce returns submitted. Over the past 5 years, the number of individuals declaring zero taxable income has varied, with 4.9 lakh filings in 2023-24."
}
const DidYouKnow = () => {
  return (
    <section className='didYouKnowSection'>
        <h1 className='didYouKnowHeading'>Do You Know?</h1>
        <div className='didYouKnowBlock'>
            <img src={DidYouKnowData.image} alt='didYouKnow-image' className='didYouKnowImage'/>
            <p className='didYouKnowDescription'>{DidYouKnowData.description}</p>
        </div>
    </section>
  )
}

export default DidYouKnow