import React from 'react'

const startedLoginAccount = ()=>{
    alert("jscak")
}


const Google = () => {
    const googleBtn = {
        width:'120px',
        backgroundColor:'red',
        border:'none',
        height:'35px',
        fontSize:'18px',
        color:'#fff'
    }
  return (
    <div>
        <button style={googleBtn} onClick={startedLoginAccount}>Google</button>
    </div>
  )
}

export default Google