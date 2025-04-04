import React from 'react'
import './Footer.css';
import logoTaxu from '../../assests/taxu.jpeg'

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
        <div className='taxu-part-block'>
            <img src={logoTaxu} alt='taxu logo' className='logo-image-footer' onClick={()=> {
                window.location.href="/home";
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
                localStorage.setItem('navLink','home');
            }} />
            <span className='taxu-heading-part d-none'>Taxu</span>
        </div>
       <div className='footerLinks' >
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
       </div>
           
    </section>
  )
}

export default Footer