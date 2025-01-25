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
    <section id='ContactFormSection' style={(contactOn)?{zIndex:"100"}:{zIndex:"-100"}}>
    <div class="container">
        <div style={{display:"flex", justifyContent:"space-between"}}>
            <h1 class="text"> Contact us Form</h1>
            <button type='button' style={{width:"45px",height:"25px", backgroundColor:"#fff",border:"none", fontSize:"18px"}} onClick={changeState}>Close</button>
        </div>
        <form onSubmit={onSubmit}>
            <div class="form-row">
                <div class="input-data">
                    <input type="text" name='Firstname' required/>
                    <div class="underline"></div>
                    <label for="">First Name</label>
                </div>
                <div class="input-data">
                    <input type="text" name='LastName' required/>
                    <div class="underline"></div>
                    <label for="">Last Name</label>
                </div>
            </div>
            <div class="form-row">
                <div class="input-data">
                    <input type="text" name='Email' required/>
                    <div class="underline"></div>
                    <label for="">Email Address</label>
                </div>
                <div class="input-data">
                    <input type="text" name='PhoneNumber' required/>
                    <div class="underline"></div>
                    <label for="">Phone Number</label>
                </div>
            </div>
            <select className='Language' name="Language">
                <option value="English">English</option>
                <option value="Telugu">Telugu</option>
                <option value="Hindi">Hindi</option>
            </select>
            <div class="form-row">
                <div class="input-data textarea">
                    <textarea rows="8" cols="80" name='message' required></textarea>
                    <br />
                    <div class="underline"></div>
                    <label for="">Write your message</label>
                    <br />
                </div>
                <button type='submit' className='submit-btn' >Submit</button>
            </div>
        </form>
    </div>
    <p>{result}</p>
</section>
  )
}

export default ContactForm