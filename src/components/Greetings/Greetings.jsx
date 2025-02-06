import { useEffect, useState } from 'react';
import './Greetings.css'
const Greetings=()=> {
  const [start,stop]=useState(true)
  if(start){
    const timer = setTimeout(() => {
      window.location.href = '/home';
    }, 5000);
    stop(false)
    return ()=> clearTimeout(timer);
  }

    return (
        <div className='greetingBox'>
            <h1 className='greetingText'>Welcome</h1>
            <p className='greetingsDescription'>Smart Money moves</p>
        </div>
    )
 
}

export default Greetings