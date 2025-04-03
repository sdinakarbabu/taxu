import React from 'react'
import Greetings from '../components/Greetings/Greetings';
import Enquiry from '../components/Enquiry/Enquiry';
import WhyToChoose from '../components/WhyToChoose/WhyToChoose';
import WorkFlowTaxu from '../components/WorkFlowTaxu/WorkFlowTaxu';
import InterestingFact from '../components/InterestingFact/InterestingFact';
import WhatWeDo from '../components/WhatWeDo/WhatWeDo';
import Fqa from '../components/Fqa/Fqa';
import './Home.css'
const FqasData = [
  {
    question:"What services do you offer? ",
    answer:"We provide a range of taxation and accounting services, including tax filing, financial statement preparation, bookkeeping, payroll processing, tax advisory, and compliances."
  },
  {
    question:"Do you handle both personal and business taxes? ",
    answer:"Yes, we handle both personal and business taxes. Whether you're an individual or a business owner, we can assist with your tax needs."
  },
  {
    question:"What is the process for starting with your services? ",
    answer:"To get started, simply visit products or contact us through our website. We'll schedule an initial consultation to understand your needs and provide a tailored service plan."
  },
  {
    question:"Can you help with tax disputes or audits?",
    answer:" Yes, we can assist with tax disputes and audits. Our team has experience in resolving tax-related issues and representing clients during audits."
  },
  {
    question:"Do you offer any guarantees on your services? ",
    answer:"We stand by the quality of our services and offer a satisfaction guarantee. If you're not satisfied with our work, we'll make it right."
  },
  {
    question:"How can I contact you for more information or to schedule a consultation?",
    answer:" You can contact us through our website's contact form. We're here to help!"
  }
]

const Home = () => {
    
  return (
    <>
      <Enquiry/>
      <WhatWeDo/>
      <WhyToChoose/>
      <WorkFlowTaxu/>
      <InterestingFact/>
      <section className='aboutSection' >
        {/* <div>
          <img src=''/>
        </div> */}
        <div className='fqaContainer'>
          <h1 className='FqaHeading'>FQA's</h1>
          <ul className='FqaBlock col-12'>
            {
              FqasData.map(element => {
              return <Fqa ques={element.question} ans={element.answer}  key={element.question}/>
              })
            }
          </ul>
        </div>
          
      </section>
    </>
    )
}

export default Home