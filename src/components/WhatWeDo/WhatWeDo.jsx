import React from 'react'
import './WhatWeDo.css'
import tax from './tax.png'
import accounting from './accounting.png'
import compliances from './compliances.png'

const WhatWeDoData = [
    {
        heading:"ITR Filing",
        description:"We offer hassle-free Income Tax Return (ITR) filing services to ensure you meet all your tax obligations accurately and on time. Our experts handle everything from tax calculation to submission, making the process seamless and stress-free for you.",
        btn:"Explore",
        image:tax,
        direction:"row"
    },
    {
        heading:"Accounting",
        description:"Our comprehensive accounting services cover everything from bookkeeping and financial reporting to budgeting and analysis. We help businesses of all sizes maintain accurate and up-to-date financial records, allowing you to focus on growing your business.",
        btn:"Explore",
        image:accounting,
        direction:"row-reverse"
    },
    {
        heading:"Compliances",
        description:"Staying compliant with ever-changing regulations can be challenging. Our compliance services ensure that your business adheres to all relevant laws and regulations, minimizing risks and keeping you on the right side of the law. We handle everything from GST registrations and filings to company law compliances.",
        btn:"Explore",
        image:compliances,
        direction:"row"
    }
]
const WhatWeDo = () => {
  return (
    <section className='WhatWeDoSection'>
        <h1 className='WhatWeDoMainHeading'>What we do?</h1>
        {
            WhatWeDoData.map((each)=>{
                return(
                    <div id='WhatWeDoEachBlock' style={{flexDirection:`${each.direction}`}} key={each.heading}>
                        <div className='WhatWeDoBlockLeftPart col-5 col-md-6 col-lg-7'>
                            <h1 className='WhatWeDoHeading'>{each.heading}</h1>
                            <p className='WhatWeDoDescription'>{each.description}</p>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <button className='WhatWeDoBtn' style={{display:'none'}}>{each.btn}</button>
                            </div>
                        </div>
                        <div className='WhatWeDoBlockRightPart col-6 col-md-4 col-lg-4 col-xl-3'>
                            <figure>
                                <img src={each.image} alt='Gst filling' className='WhatWeDoImage'/>
                            </figure>
                        </div>
                    </div>
                )
            })
        }
    </section>
  )
}

export default WhatWeDo