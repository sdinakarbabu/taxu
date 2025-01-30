import React from 'react'
import './ItrPlanProduct.css'
import arrow from './arrow.png'


const ItrPlanProduct = (props) => {
  const {each,changeStates} = props
  const changingState = ()=>{
    changeStates()
  }
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
                      <li className='eachCoverItemBlock'>
                        <img src={arrow} alt='arrow' className='arrowImage'/>
                        <p className='eachCoverPoint'>{element.text}</p>
                      </li>
                    )
                })
                }
                
                
              </ul>
            </div>
            <button className='productBtn' onClick={changingState}>{each.btnName}</button>
        </div>
    </li>
  )
}

export default ItrPlanProduct