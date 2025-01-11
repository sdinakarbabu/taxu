import React from 'react'
import './InterestingFact.css'
const InterestingFactData = {
    heading:"INTERESTING FACTS",
    description:"In FY 2023-24, 6.68% of the population filed Income Tax Returns (ITR), with 8 crore returns submitted. Over the past 5 years, the number of individuals declaring zero taxable income has varied, with 4.9 lakh filings in 2023-24."
}
const InterestingFact = () => {
  return (
    <div className='InterestingFactSection'>
        <h1 className='InterestingFactHeading'>{InterestingFactData.heading}</h1>
        <p className='InterestingFactDescription'>{InterestingFactData.description}</p>
    </div>
  )
}

export default InterestingFact