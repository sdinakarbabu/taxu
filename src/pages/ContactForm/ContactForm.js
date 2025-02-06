import React, { useState } from 'react'
import './ContactForm.css'
import contactImage from './Contact us-pana.png'

const ContactForm = () => {
    const [result, setResult] = useState("");
    const [dataFromProduct, setDataFromProduct] = useState(localStorage.getItem('text'));

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "cea2f17c-2cbe-4948-a250-0c79a2a012c9");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully Our Team will contact you soon.");
            event.target.reset();
            localStorage.clear();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
  return (
    <section id='ContactFormSection'>
        <div className='ContactFormLeftPart'>
            <h1 className='contactHeading'>Taxu</h1>
            <img src={contactImage} alt='contact-image' className='contactImage' />
        </div>
        <div className='ContactFormRightPart'>
            <div style={{display:'flex', justifyContent:'space-around', alignItems:'center'}}>
                <h1 class="text"> Contact Us</h1>
                <a href='/'><button type='button' className='btnContact'>Close</button></a>
            </div>
            <form class="row g-3 needs-validation" novalidate onSubmit={onSubmit}>
                <div class="col-md-7">
                    <label for="validationCustom01" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>First name</label>
                    <input type="text" class="form-control" style={{border:'2px solid rgb(91, 91, 254)'}} name='Firstname' id="validationCustom01" required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-7">
                    <label for="validationCustom02" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>Last name</label>
                    <input type="text" class="form-control" style={{border:'2px solid rgb(91, 91, 254)'}} name='LastName' id="validationCustom02" required/>
                    <div class="valid-feedback">
                    Looks good!
                    </div>
                </div>
                <div class="col-md-7">
                    <label for="validationCustomUsername" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>Phone Number</label>
                    <div class="input-group has-validation">
                    <input type="text" minLength={10} max={13} class="form-control" style={{border:'2px solid rgb(91, 91, 254)'}} name='phoneNumber' id="validationCustomPhoneNumber" aria-describedby="inputGroupPrepend" required/>
                    <div class="invalid-feedback">
                        Please enter phone number.
                    </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <label for="validationCustomUsername" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>Email</label>
                    <div class="input-group has-validation">
                    <input type="email" class="form-control" style={{border:'2px solid rgb(91, 91, 254)'}} name='Email' id="validationCustomEmail" aria-describedby="inputGroupPrepend" required/>
                    <div class="invalid-feedback">
                        Please check Email.
                    </div>
                    </div>
                </div>
                <div class="col-md-3">
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
                    <label for="validationCustom05" class="form-label" style={{fontWeight:'500', letterSpacing:'1px'}}>Message</label>
                    <textarea class="form-control" style={{border:'2px solid rgb(91, 91, 254)'}} name='Message' id="exampleFormControlTextarea1" rows="3">{dataFromProduct}</textarea>
                    <div class="invalid-feedback" style={{fontWeight:'500', letterSpacing:'1px'}}>
                        Please provide Message for contacting us.
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
                    <button class="btn btn-primary" type="submit">Submit form</button>
                </div>
            </form>
            <p>{result}</p>
        </div>
    </section>

  )
}

export default ContactForm