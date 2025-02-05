import React from 'react'
import './Explore.css'
import arrow from '../../components/ItrPlanProduct/arrow.png'
import TaxServices from '../../components/TaxServices/TaxServices'
import ItrPlanProduct from '../../components/ItrPlanProduct/ItrPlanProduct'

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

  return (
    <section id='explorePageSection'>
        <TaxServices TaxServicesList={TaxServicesList} />
        <section className='itrPlanContainer' id='itrPlanSection'>
          <h1 className='itrPlansHeading'>ITR Plans</h1>
          <ul className='itrFlexBlock'>
              {
                itrPlaningData.map((each)=><ItrPlanProduct  each={each} key={each.name} />)
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
                    <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                      <a href='/contact'><button className='productBtn connect' onClick={()=>{localStorage.setItem('text',"Expert Assistance Require")}}>Connect Now</button></a>
                    </div>
                </div>
              </li>
          </ul>
        </section>
        <section className='itrPlanContainer' id='BusinessRelatedSection'>
          <h1 className='itrPlansHeading'>Business related services</h1>
          <ul className='itrFlexBlock' style={{justifyContent:'space-around'}}>
            <li className='EachItrPlanContainer'>
              <p className='itrPlanHeading'>GST services</p>
              <div className='ItrPart-2'>
                  <div className='priceBlock'>
                    <p className='currentPrice'><span style={{fontSize:'12px',fontWeight:'600'}}>Starts from </span>₹ 999</p>
                    <p className='previousPrice'>2000</p>
                    <p className='discountPrice'>Save 50%</p>
                  </div>
                  <div className='coversBlock'>
                    <p className='coversHeading'>Covers:</p>
                    <ul>
                      <li className='eachCoverItemBlock'>
                        <img src={arrow} alt='arrow' className='arrowImage'/>
                        <p className='eachCoverPoint'>GST Registration</p>
                      </li>
                      <li className='eachCoverItemBlock'>
                        <img src={arrow} alt='arrow' className='arrowImage'/>
                        <p className='eachCoverPoint'>GST fillings</p>
                      </li>
                      <li className='eachCoverItemBlock'>
                        <img src={arrow} alt='arrow' className='arrowImage'/>
                        <p className='eachCoverPoint'>Other GST services</p>
                      </li>
                    </ul>
                  </div>
                  <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <a href='/contact'><button className='productBtn' onClick={()=>{localStorage.setItem('text',"GST services")}}>Get a quote</button></a>
                  </div>
              </div>
            </li>
            <li className='EachItrPlanContainer'>
              <p className='itrPlanHeading'>Accounting services</p>
              <div className='ItrPart-2'>
                  <div className='priceBlock'>
                    <p className='currentPrice'><span style={{fontSize:'12px',fontWeight:'600'}}>Starts from </span>₹ 2999</p>
                    <p className='previousPrice'>6000</p>
                    <p className='discountPrice'>Save 50%</p>
                  </div>
                  <div className='coversBlock'>
                    <p className='businessParagraph'>
                      Our Accounting Filing service covers all aspects of financial reporting, bookkeeping, and tax preparation to ensure your business runs efficiently and stays compliant with local regulations. From maintaining accurate records in Xero, QuickBooks, or Zoho Books, to preparing your financial statements and tax filings, we take care of your accounting needs so you can focus on your growing business
                    </p>
                  </div>
                  <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <a href='/contact'><button className='productBtn' onClick={()=>{localStorage.setItem('text',"Accounting services")}}>Get a quote</button></a>
                  </div>
              </div>
            </li>
            <li className='EachItrPlanContainer'>
              <p className='itrPlanHeading'>Other services</p>
              <div className='ItrPart-2'>
                  <div className='priceBlock'>
                    <p className='currentPrice'><span style={{fontSize:'12px',fontWeight:'600'}}>Starts from </span>₹ 999</p>
                    <p className='previousPrice'>2000</p>
                    <p className='discountPrice'>Save 50%</p>
                  </div>
                  <div className='coversBlock'>
                  </div>
                  <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                    <a href='/contact'><button className='productBtn' onClick={()=>{localStorage.setItem('text',"Other services require")}}>Get a quote</button></a>
                  </div>
              </div>
            </li>
          </ul>
        </section>
        {/* <ContactForm setChange={contactOff} contactOn={contactOn} /> */}
    </section>
  )
}

export default Explore