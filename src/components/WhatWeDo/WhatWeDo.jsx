import React from 'react'
import './WhatWeDo.css'
import tax from './tax.png'
import accounting from './accounting.png'
import compliances from './compliances.png'

const WhatWeDoData = [
    {
        heading:"1.	ITR Filing",
        description:"We offer hassle-free Income Tax Return (ITR) filing services to ensure you meet all your tax obligations accurately and on time. Our experts handle everything from tax calculation to submission, making the process seamless and stress-free for you.",
        btn:"Explore",
        image:tax,
        direction:"row"
    },
    {
        heading:"2.	Accounting",
        description:"Our comprehensive accounting services cover everything from bookkeeping and financial reporting to budgeting and analysis. We help businesses of all sizes maintain accurate and up-to-date financial records, allowing you to focus on growing your business.",
        btn:"Explore",
        image:accounting,
        direction:"row-reverse"
    },
    {
        heading:"3.	Compliances",
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
                    <div id='WhatWeDoEachBlock' style={{flexDirection:`${each.direction}`}}>
                        <div className='WhatWeDoBlockLeftPart'>
                            <h1 className='WhatWeDoHeading'>{each.heading}</h1>
                            <p className='WhatWeDoDescription'>{each.description}</p>
                            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                                <button className='WhatWeDoBtn'>{each.btn}</button>
                            </div>
                        </div>
                        <div className='WhatWeDoBlockRightPart'>
                            <figure>
                                <img src={each.image} alt='Gst filling' style={{display:'none'}} className='WhatWeDoImage'/>
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