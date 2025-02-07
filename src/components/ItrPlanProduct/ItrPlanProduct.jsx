import React, { useState } from 'react'
import './ItrPlanProduct.css'
import arrow from './arrow.png'


const ItrPlanProduct = (props) => {
  const {each}=props

  return (
    <li className='EachItrPlanContainer'>
        <p className='itrPlanHeading'>{each.name}</p>
        <div className='ItrPart-2'>
            <div className='priceBlock'>
              <p className='currentPrice'>₹ {each.prices.currentPrice}</p>
              <p className='previousPrice'>{each.prices.previousPrice}</p>
              <p className='discountPrice'>{each.prices.discountPrice}</p>
            </div>
            <div className='coversBlock'>
              <p className='coversHeading'>Covers:</p>
              <ul>
                {each.covers.map(element => {
                    return(
                      <li className='eachCoverItemBlock' key={element.text}>
                        <img src={arrow} alt='arrow' className='arrowImage'/>
                        <p className='eachCoverPoint'>{element.text}</p>
                      </li>
                    )
                })
                }
                
                
              </ul>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
              <a href='/payment'  onClick={()=>{localStorage.setItem('text',JSON.stringify(each))}}><button className='productBtn'>{each.btnName}</button></a>
            </div>
        </div>
    </li>
  )
}

export default ItrPlanProduct