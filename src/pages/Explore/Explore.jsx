import React from 'react'
import './Explore.css'
import TaxServices from '../../components/TaxServices/TaxServices'
import ItrPlanProduct from '../../components/ItrPlanProduct/ItrPlanProduct'

const TaxServicesList = [
  {
    name:"ITR filing",
    description:"Our IT Filing services are designed to help individuals and businesses comply with tax regulations while maximizing their tax benefits. Whether you're a freelancer, small business, or corporation, we provide accurate and timely filing of income tax returns. Our expertise ensures you avoid penalties, claim eligible deductions, and maintain smooth tax operations year-round.",
    btnName:"Explore"
  },
  {
    name:"Business related services",
    description:"Our Accounting Filing service covers all aspects of financial reporting, bookkeeping, and tax preparation to ensure your business runs efficiently and stays compliant with local regulations. From maintaining accurate records in Xero, QuickBooks, or Zoho Books, to preparing your financial statements and tax filings, we take care of your accounting needs so you can focus on growing your business.",
    btnName:"Explore"
  }
]

const Explore = () => {
  return (
    <div>
        <TaxServices TaxServicesList={TaxServicesList} />
        <section className='itrPlanContainer'>
          <h1 className='itrPlansHeading'>ITR Plans</h1>
          <ItrPlanProduct/>
        </section>
    </div>
  )
}

export default Explore