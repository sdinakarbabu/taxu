import React from 'react'
import './Footer.css';
const data = [
    {
        name:"Quick Links",
        subList:[
            {
                name:"About"
            },
            {
                name:"Contact"
            }
        ]
    },
    {
        name:"Products",
        subList:[
            {
                name:"ITR Filing"
            },
            {
                name:"GST Filing"
            },
            {
                name:"Accounting"
            },
            {
                name:"TDS & Tax planning"
            }
        ]
    },
    {
        name:"Services For Individuals",
        subList:[
            {
                name:"ITR Filing"
            },
            {
                name:"Tax planning"
            },
            {
                name:"Business consultion"
            },
            {
                name:"HUF Registration"
            },
            {
                name:"Pancard"
            },
            {
                name:"PF & ESI"
            }
        ]
    },
    {
        name:"Services For Business",
        subList:[
            {
                name:"ITR Filing"
            },
            {
                name:"GST Filing"
            },
            {
                name:"Budgeting"
            },
            {
                name:"Business Registrations"
            },
            {
                name:"Accounting"
            },
            {
                name:"Financial Planning"
            }
        ]
    }
]

const Footer = () => {
  return (
    <section className='footerSection'>
        {data.map((each)=>{
            return(
                <ul>
                    <li className='item-name'>{each.name}</li>
                    <ul>
                        {each.subList.map((eachInner)=><li className='inner-eachItem'>{eachInner.name}</li>)}
                    </ul>
                </ul>
            )
        })}
           
    </section>
  )
}

export default Footer