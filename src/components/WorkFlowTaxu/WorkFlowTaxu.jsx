import React from 'react'
import './WorkFlowTaxu.css'
import loupe from './loupe.png'
import ticket from './ticket.png'
import payment from './payment-method.png'
import professional from './professional-success.png'

const workFlowData = [
    {
        imageLink:'./loupe.png',
        imageName:loupe,
        heading:"Explore Our Services",
        description:"Browse our wide range of tax filing and accounting solutions tailored to your needs"
    },
    {
        imageLink:'./ticket.png',
        imageName:ticket,
        heading:"Choose Your Service",
        description:"Select the service that fits your requirements and business goals."
    },
    {
        imageLink:'./payment-method.png',
        imageName:payment,
        heading:"Make a Secure Payment ",
        description:"Complete your booking with our easy and secure payment options."
    },
    {
        imageLink:'./professional-success.png',
        imageName:professional,
        heading:"Connect with an Expert",
        description:"Our financial expert will reach out to provide personalized support and guidance."
    }
]
const WorkFlowTaxu = () => {
  return (
    <section className='WorkFlowTaxuSection'>
        <h1 className='workFlowHeading'>How It works</h1>
        <p className='workFlowParagraph'>4 Simple-steps to e-file your <span>Income Tax Returns</span></p>
        <div className='flowOfProcessBlock'>
            <ul className='workFlowContainer'>
               {
                workFlowData.map((each)=>
                    <li className='eachWorkFlowBlock'>
                        <img src={each.imageName} alt={each.imageName} className='eachLinkImageWorkFlow'/>
                        <h1 className='listPointHead'>{each.heading}</h1>
                        <p className='listPointdescription'>{each.description}</p>
                    </li>
                )
               }
            </ul>
        </div>
    </section>
  )
}

export default WorkFlowTaxu