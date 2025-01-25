import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = (props) => {
    const {setChange,contactOn} = props
    const [result, setResult] = useState("");

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
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };
    const changeState = ()=>{
        setChange(!contactOn)
    }
  return (
    <section id='ContactFormSection' style={(contactOn)?{zIndex:"100",display:'block'}:{zIndex:"-100",display:'none'}}>
        <div class="container">
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <h1 class="text"> Contact us Form</h1>
            <button type='button' style={{width:"45px",height:"25px", backgroundColor:"#fff",border:"none", fontSize:"18px"}} onClick={changeState}>Close</button>
        </div>
        <form class="row g-3 needs-validation" novalidate onSubmit={onSubmit}>
            <div class="col-md-4">
                <label for="validationCustom01" class="form-label">First name</label>
                <input type="text" class="form-control" name='Firstname' id="validationCustom01" required/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div class="col-md-4">
                <label for="validationCustom02" class="form-label">Last name</label>
                <input type="text" class="form-control" name='LastName' id="validationCustom02" required/>
                <div class="valid-feedback">
                Looks good!
                </div>
            </div>
            <div class="col-md-6">
                <label for="validationCustomUsername" class="form-label">Email</label>
                <div class="input-group has-validation">
                <input type="email" class="form-control" name='Email' id="validationCustomUsername" aria-describedby="inputGroupPrepend" required/>
                <div class="invalid-feedback">
                    Please choose a username.
                </div>
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom04" class="form-label">Language</label>
                <select class="form-select" name="Language" id="validationCustom04" required>
                <option value="English" selected>English</option>
                <option value="Telugu">Telugu</option>
                <option value="Hindi">Hindi</option>
                </select>
                <div class="invalid-feedback">
                    Please select Language.
                </div>
            </div>
            <div class="col-md-3">
                <label for="validationCustom05" class="form-label">Zip</label>
                <input type="text" class="form-control" id="validationCustom05" required/>
                <div class="invalid-feedback">
                    Please provide a valid zip.
                </div>
            </div>
            <div class="col-12">
                <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                <label class="form-check-label" for="invalidCheck">
                    Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
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