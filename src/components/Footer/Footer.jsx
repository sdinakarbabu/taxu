import React from 'react'
import './Footer.css';
const data = [
    {
        name:"Quick Links",
        subList:[
            {
                name:"About",
                link:'about'
            },
            {
                name:"Contact",
                link:'contact'
            }
        ]
    },
    {
        name:"Products",
        subList:[
            {
                name:"ITR Filing",
                link:'products/#itrPlanSection'
            },
            {
                name:"GST Filing",
                link:'products/#itrPlanSection'
            },
            {
                name:"Accounting",
                link:'products/#itrPlanSection'
            },
            {
                name:"TDS & Tax planning",
                link:'products/#itrPlanSection'
            }
        ]
    },
    {
        name:"Services For Individuals",
        subList:[
            {
                name:"ITR Filing",
                link:'products/#itrPlanSection'
            },
            {
                name:"Tax planning",
                link:'products/#BusinessRelatedSection'
            },
            {
                name:"Business consultion",
                link:'products/#BusinessRelatedSection'
            },
            {
                name:"HUF Registration",
                link:'products/#BusinessRelatedSection'
            },
            {
                name:"Pancard",
                link:'products/#itrPlanSection'
            },
            {
                name:"PF & ESI",
                link:'products/#BusinessRelatedSection'
            }
        ]
    },
    {
        name:"Services For Business",
        subList:[
            {
                name:"ITR Filing",
                link:'products/#itrPlanSection'
            },
            {
                name:"GST Filing",
                link:'products/#BusinessRelatedSection'
            },
            {
                name:"Budgeting",
                link:'products/#BusinessRelatedSection'
            },
            {
                name:"Business Registrations",
                link:'products/#BusinessRelatedSection'
            },
            {
                name:"Accounting",
                link:'products/#BusinessRelatedSection'
            },
            {
                name:"Financial Planning",
                link:'products/#BusinessRelatedSection'
            }
        ]
    }
]

const Footer = () => {
  return (
    <section className='footerSection'>
        {data.map((each)=>{
            return(
                <ul key={each.name}>
                    <li className='item-name'>{each.name}</li>
                    <ul>
                        {each.subList.map((eachInner)=><li className='inner-eachItem eachListPoint' key={eachInner.name}><a href={`/${eachInner.link}`} className='anchorTagListPoint'>{eachInner.name}</a></li>)}
                    </ul>
                </ul>
            )
        })}
           
    </section>
  )
}

export default Footer