import React from 'react'
import './PaymentDetails.css'

const statesData = [
    { "stateName": "Andhra Pradesh" },
    { "stateName": "Arunachal Pradesh" },
    { "stateName": "Assam" },
    { "stateName": "Bihar" },
    { "stateName": "Chhattisgarh" },
    { "stateName": "Goa" },
    { "stateName": "Gujarat" },
    { "stateName": "Haryana" },
    { "stateName": "Himachal Pradesh" },
    { "stateName": "Jharkhand" },
    { "stateName": "Karnataka" },
    { "stateName": "Kerala" },
    { "stateName": "Madhya Pradesh" },
    { "stateName": "Maharashtra" },
    { "stateName": "Manipur" },
    { "stateName": "Meghalaya" },
    { "stateName": "Mizoram" },
    { "stateName": "Nagaland" },
    { "stateName": "Odisha" },
    { "stateName": "Punjab" },
    { "stateName": "Rajasthan" },
    { "stateName": "Sikkim" },
    { "stateName": "Tamil Nadu" },
    { "stateName": "Telangana" },
    { "stateName": "Tripura" },
    { "stateName": "Uttar Pradesh" },
    { "stateName": "Uttarakhand" },
    { "stateName": "West Bengal" },
    { "stateName": "Andaman and Nicobar Islands" },
    { "stateName": "Chandigarh" },
    { "stateName": "Dadra and Nagar Haveli and Daman and Diu" },
    { "stateName": "Lakshadweep" },
    { "stateName": "Delhi" },
    { "stateName": "Puducherry" }
]
  


const PaymentDetails = () => {
    const ProductData = JSON.parse(localStorage.getItem('text'));
    const price = parseFloat(ProductData.prices.currentPrice).toFixed(2);
    const discount = parseFloat(ProductData.prices.currentPrice*0.05).toFixed(2);
    const Amount = price-discount;
    const gst =  parseFloat(Amount*0.18).toFixed(2);
    const total = parseFloat(parseFloat(Amount)+parseFloat(gst)).toFixed(2);


    const onSubmit = async (event) => {
        event.preventDefault();
        // setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cea2f17c-2cbe-4948-a250-0c79a2a012c9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
           // setResult("Form Submitted Successfully Our Team will contact you soon.");
            event.target.reset();
            alert("Payment Succesfull");
            // window.location.href='/products';
            // localStorage.clear();
        } else {
            console.log("Error", data);
            // setResult(data.message);
        }
    };

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
                        <p className='subHeading'>gst@18%</p>
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
                        <button type='button' className='couponSubmit btn btn-primary'>Apply</button>
                        <p className='subHeadingValue'>{total}<span className='forwardslash'>/-</span></p>
                    </div>
                </div>
            </div>
            {/* <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <button className='submitCheckout' onClick={()=>{
                    alert("Payment Succesfull");
                    window.location.href='/products';
                }}>checkout</button>
            </div> */}

        </div>
        <div className='paymentRightPart'>
            <form class="row g-3 needs-validation" novalidate onSubmit={onSubmit}>
                <input type='text' name='Plan name' value={ProductData.name} style={{display:'none'}}/>
                <input type='text' name='Amount paid' value={total} style={{display:'none'}} />
                <div class="col-md-7">
                    <label for="validationCustom01" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>First name</label>
                    <input type="text" class="form-control" style={{border:'2px solid rgb(91, 91, 254)'}} name='Customer Name' id="validationCustom01" required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-7">
                    <label for="validationCustomUsername" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>Phone Number</label>
                    <div class="input-group has-validation">
                    <input type="text" minLength={10} max={13} class="form-control" style={{border:'2px solid rgb(91, 91, 254)'}} name='phone Number' id="validationCustomPhoneNumber" aria-describedby="inputGroupPrepend" required/>
                    <div class="invalid-feedback">
                        Please enter phone number.
                    </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <label for="validationCustomUsername" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>Email</label>
                    <div class="input-group has-validation">
                    <input type="email" class="form-control" style={{border:'2px solid rgb(91, 91, 254)'}} name='Email' id="validationCustomEmail" aria-describedby="inputGroupPrepend" required/>
                    <div class="invalid-feedback">
                        Please check Email.
                    </div>
                    </div>
                </div>
                <div class="col-sm-6 col-md-7 col-lg-6">
                    <label for="validationCustom04" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>State</label>
                    <select class="form-select" style={{border:'2px solid rgb(91, 91, 254)'}} name="State" id="validationCustom04" required>
                    {statesData.map((eachState)=><option key={eachState.stateName} value={eachState.stateName}>{eachState.stateName}</option>)}
                    </select>
                    <div class="invalid-feedback" style={{fontWeight:'500', letterSpacing:'1px'}}>
                        Please select State.
                    </div>
                </div>
                <div class="col-sm-6 col-md-7 col-lg-6">
                    <label for="validationCustom04" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>Language</label>
                    <select class="form-select" style={{border:'2px solid rgb(91, 91, 254)'}} name="Language" id="validationCustom04" required>
                    <option value="English" selected>English</option>
                    <option value="Telugu">Telugu</option>
                    <option value="Hindi">Hindi</option>
                    </select>
                    <div class="invalid-feedback" style={{fontWeight:'500', letterSpacing:'1px'}}>
                        Please select Language.
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustom05" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>Address</label>
                    <textarea class="form-control" style={{border:'2px solid rgb(91, 91, 254)'}} name='Address' id="exampleFormControlTextarea1" rows="3" required></textarea>
                    <div class="invalid-feedback" style={{fontWeight:'500', letterSpacing:'1px'}}>
                        Please provide Address for contacting us.
                    </div>
                </div>
                <div class="col-12">
                    <div class="form-check">
                    <input class="form-check-input" style={{border:'2px solid rgb(91, 91, 254)'}} type="checkbox" value="" id="invalidCheck" required/>
                    <label class="form-check-label" for="invalidCheck" style={{fontWeight:'500', letterSpacing:'1px'}}>
                        Agree to terms and conditions
                    </label>
                    <div class="invalid-feedback" style={{fontWeight:'500', letterSpacing:'1px'}}>
                        You must agree before submitting.
                    </div>
                    </div>
                </div>
                <div class="col-12">
                    <button className="btn btn-primary btnPlaceOrder" style={{backgroundColor: 'rgb(50, 82, 180)'}} type="submit">Place Order</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default PaymentDetails