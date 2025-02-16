import React, { useState } from 'react'
import './Fqa.css'

const Fqa = (props) => {
    const {ques,ans} = props;
    const [answer,setAnswer] = useState(true)
    const displayNone = {
        display:'none'
    }
   
    const displayAnswer = ()=>{
        setAnswer(!answer)
    }
  return (
    <li className='dropdownEachBlock'>
        <div className='questionBLock' onClick={displayAnswer}>
            <p style={{textAlign:'left',padding:'10px 0 0 15px'}}>{ques}</p>
            <p className='arrowMark'>></p>
        </div>
        <div className='answerBlock' style={(answer)?displayNone:{}}> 
            <p>{ans}</p>
        </div>

    </li>
  )
}

export default Fqa