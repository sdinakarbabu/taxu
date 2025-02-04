import React from 'react'
import Greetings from '../components/Greetings/Greetings';
import { useEffect, useState } from 'react';
import Enquiry from '../components/Enquiry/Enquiry';
const Home = () => {
    const [check,setCheck] = useState(true)
      useEffect(() => {
        const timer = setTimeout(() => {
          setCheck(!check)
        }, 5000);
          return () => clearTimeout(timer);
      },[]);
  return (
    <>
        {(check)?<Greetings/>:<Enquiry/>}
    </>
    )
}

export default Home