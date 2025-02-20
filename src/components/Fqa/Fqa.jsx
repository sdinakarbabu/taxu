import React, { useState } from 'react'
import downArrow from './downArrow.png'
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
            <img src={downArrow} alt='down-arrow' className='arrowMark' style={(answer)?{transform: 'rotate(0deg)'}: {transform: 'rotate(180deg)'}} />
        </div>
        <div className='answerBlock' style={(answer)?displayNone:{}}> 
            <p>{ans}</p>
        </div>

    </li>
  )
}

export default Fqa