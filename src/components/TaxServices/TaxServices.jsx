import React from 'react'
import './TaxServices.css'

const TaxServices = (props) => {
    const {TaxServicesList} = props;
  return (
    <section className='taxServicesContainer'>
          {
            TaxServicesList.map((each)=>{
              return(
                <div className='eachTaxBox'>
                  <h1 className='taxserviceName'>{each.name}</h1>
                  <p className='taxserviceDescription'>{each.description}</p>
                  <button className='taxserviceBtn'>{each.btnName}</button>
                </div>
              )
            })
          }
      </section>
  )
}

export default TaxServices