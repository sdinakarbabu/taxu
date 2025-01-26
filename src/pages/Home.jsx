import React from 'react'
import Greetings from '../components/Greetings/Greetings';
import ContactForm from '../components/ContactForm/ContactForm';
import { useEffect, useState } from 'react';
import Enquiry from '../components/Enquiry/Enquiry';
const Home = () => {
    const [contactOn,contactOff] = useState(false);
    const [check,setCheck] = useState(true)
      useEffect(() => {
        const timer = setTimeout(() => {
            setCheck(!check)
        }, 5000);
          return () => clearTimeout(timer);
      },[]);
  return (
    <>
        {(check)?<Greetings/>:<Enquiry setChange={contactOff} contactOn={contactOn}/>}
        <ContactForm setChange={contactOff} contactOn={contactOn}/>
    </>
    )
}

export default Home