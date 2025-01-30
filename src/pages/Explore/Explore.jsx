import React, { useState } from 'react'
import './Explore.css'
import TaxServices from '../../components/TaxServices/TaxServices'
import ItrPlanProduct from '../../components/ItrPlanProduct/ItrPlanProduct'
import ContactForm from '../../components/ContactForm/ContactForm'

const TaxServicesList = [
  {
    name:"ITR filing",
    description:"Our IT Filing services are designed to help individuals and businesses comply with tax regulations while maximizing their tax benefits. Whether you're a freelancer, small business, or corporation, we provide accurate and timely filing of income tax returns. Our expertise ensures you avoid penalties, claim eligible deductions, and maintain smooth tax operations year-round.",
    btnName:"Explore",
    btnLink:"#itrPlanSection"
  },
  {
    name:"Business related services",
    description:"Our Accounting Filing service covers all aspects of financial reporting, bookkeeping, and tax preparation to ensure your business runs efficiently and stays compliant with local regulations. From maintaining accurate records in Xero, QuickBooks, or Zoho Books, to preparing your financial statements and tax filings, we take care of your accounting needs so you can focus on growing your business.",
    btnName:"Explore",
    btnLink:"#BusinessRelatedSection"
  }
]

const itrPlaningData = [
  {
    name:"Salary or other income",
    prices:{
      currentPrice:"999",
      previousPrice:"2000",
      discountPrice:"Save 50%"
    },
    covers:[{text:'Salary'},{text:'House Property'}, {text:'Other Income'}],
    btnName:"Buy now",
    stateChange:"changeState"
  },
  {
    name:"Capital gains",
    prices:{
      currentPrice:"2,499",
      previousPrice:"5000",
      discountPrice:"Save 50%"
    },
    covers:[{text:'Capital gains from sale of securities & properties'},{text:'Includes salary, house property and other income'}],
    btnName:"Buy now",
    stateChange:"changeState"
  },
  {
    name:"NRI/ Foreign Income",
    prices:{
      currentPrice:"3,499",
      previousPrice:"7000",
      discountPrice:"Save 50%"
    },
    covers:[{text:'NRI income and foreign income'},{text:'Includes capital gain, rental income'}, {text:'RSU’s and DTAA'}],
    btnName:"Buy now",
    stateChange:"changeState"
  },
  {
    name:"Business",
    prices:{
      currentPrice:"4,999",
      previousPrice:"10000",
      discountPrice:"Save 50%"
    },
    covers:[{text:'Professional & freelancing income '},{text:'Income taxable under section 44AD (Applicable Annual Turnover < Rs. 2 cr for businesses)'},{text:'Includes other incomes'},{text:'Audit fees & DSC not included'}],
    btnName:"Buy now",
    stateChange:"changeState"
  },
  {
    name:"Income from Trading",
    prices:{
      currentPrice:"4,499",
      previousPrice:"9000",
      discountPrice:"Save 50%"
    },
    covers:[{text:'Proper Accounts (P&L and Balance sheet)'},{text:'Includes Other incomes'},{text:'Audit fees and DSC not included'}],
    btnName:"Buy now",
    stateChange:"changeState"
  }
]

const Explore = () => {
  const [contactOn,contactOff] = useState(false);
  const changeState = ()=>{
    window.location.href='#taxServicesContainer'
    contactOff(!contactOn)
  }
  return (
    <section id='explorePageSection'>
        <TaxServices TaxServicesList={TaxServicesList} />
        <section className='itrPlanContainer' id='itrPlanSection'>
          <h1 className='itrPlansHeading'>ITR Plans</h1>
          <ul className='itrFlexBlock'>
              {
                itrPlaningData.map((each)=><ItrPlanProduct each={each} changeStates={changeState}/>)
              }
              <li className='EachItrPlanContainer'>
                <p className='itrPlanHeading'>Expert Assistance</p>
                <div className='ItrPart-2'>
                    <div className='priceBlock'>
                    </div>
                    <div className='coversBlock'>
                      <ul>
                        <li className='eachCoverItemBlock'>
                          <p className='eachCoverPoint'>Unable to Find? Connect For Expert Assistance.</p>
                        </li>
                      </ul>
                    </div>
                    <button className='productBtn' onClick={changeState}>Connect Now</button>
                </div>
              </li>
          </ul>
        </section>
        <section className='itrPlanContainer' id='BusinessRelatedSection'>
          <h1 className='itrPlansHeading'>Business related services</h1>
          <ul className='itrFlexBlock'>
              {
                itrPlaningData.map((each)=><ItrPlanProduct each={each} changeStates={changeState}/>)
              }
              <li className='EachItrPlanContainer'>
                <p className='itrPlanHeading'>Expert Assistance</p>
                <div className='ItrPart-2'>
                    <div className='priceBlock'>
                    </div>
                    <div className='coversBlock'>
                      <ul>
                        <li className='eachCoverItemBlock'>
                          <p className='eachCoverPoint'>Unable to Find? Connect For Expert Assistance.</p>
                        </li>
                      </ul>
                    </div>
                    <button className='productBtn' onClick={changeState}>Connect Now</button>
                </div>
              </li>
          </ul>
        </section>
        <ContactForm setChange={contactOff} contactOn={contactOn} />
    </section>
  )
}

export default Explore