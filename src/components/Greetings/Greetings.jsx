import { useEffect, useState } from 'react';
import './Greetings.css'
import Enquiry from '../Enquiry/Enquiry';
import Footer from '../Footer/Footer';
import DidYouKnow from '../DidYouKnow/DidYouKnow';
const Greetings=()=> {
    const [check,setCheck] = useState(true)
    useEffect(() => {
      const timer = setTimeout(() => {
          setCheck(!check)
      }, 5000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {(check)?<div className='greetingBox'><h1 className='greetingText'>Welcome !</h1>
            <p className='greetingsDescription'>Smart Money moves</p></div>:<> <Enquiry /> <DidYouKnow/> <hr/> <Footer/><hr/></>}
        </>
    )
 
}

export default Greetings