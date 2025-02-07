import React from 'react'
import './PaymentDetails.css'

const PaymentDetails = () => {
    const ProductData = JSON.parse(localStorage.getItem('text'));
    const price = parseFloat(ProductData.prices.currentPrice).toFixed(2);
    const discount = parseFloat(ProductData.prices.currentPrice*0.05).toFixed(2);
    const Amount = price-discount;
    const gst =  parseFloat(Amount*0.08).toFixed(2);
  return (
    <section className='paymentDetailsSection'>
        <div className='paymentLeftPart'>
            <h1 className='paymentTaxuHeading'>Taxu</h1>
            <div className='paymentContainer'>
                <p className='orderDetailsHeading'>Order Details</p>
                <hr className='horizontalTag'/>
                <p className='planHeading'>Plan:<span className='paymentDescription'>{ProductData.name}</span></p>
                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    <div>
                        <p className='subHeading'>price</p>
                        <p className='subHeading'>Discount 5%</p>
                        <p className='subHeading'>amount</p>
                        <p className='subHeading'>gst@8%</p>
                    </div>
                    <div>
                        <p className='subHeadingValue'>{price}<span className='forwardslash'>/-</span></p>
                        <p className='subHeadingValue'>{discount}<span className='forwardslash'>/-</span></p>
                        <p className='subHeadingValue'>{Amount}<span className='forwardslash'>/-</span></p>
                        <p className='subHeadingValue'>{gst}<span className='forwardslash'>/-</span></p>
                    </div>
                </div>
                <hr className='horizontalTag'/>
                <div style={{display:'flex', justifyContent:'space-evenly', alignItems:'center'}}>
                    <div>
                        <input type='text' value='TAXU50' className='couponInput'/>
                        <p className='subHeading'>Total</p>
                    </div>
                    <div>
                        <button type='button' className='couponSubmit'>Apply</button>
                        <p className='subHeadingValue'>{parseFloat(parseFloat(Amount)+parseFloat(gst)).toFixed(2)}<span className='forwardslash'>/-</span></p>
                    </div>
                </div>
            </div>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <button className='submitCheckout' onClick={()=>{
                    alert("Payment Succesfull");
                    window.location.href='/products';
                }}>checkout</button>
            </div>

        </div>
    </section>
  )
}

export default PaymentDetails