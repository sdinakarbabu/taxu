import React from 'react'
import './About.css'
import Fqa from '../../components/Fqa/Fqa'

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


const About = () => {
  return (
    <section className='aboutSection' >
      <div className='fqaContainer'>
        <h1 className='FqaHeading'>FQA's</h1>
        <ul className='FqaBlock'>
          {
            FqasData.map(element => {
            return <Fqa ques={element.question} ans={element.answer}  key={element.question}/>
            })
          }
        </ul>
      </div>
        
    </section>
  )
}

export default About