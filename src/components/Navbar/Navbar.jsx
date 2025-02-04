import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <section className='navbar-container'>
        <div className='part-1'> 
            <ul className='nav-items'>
                <li className='item-headings' onClick={()=>window.location.href="/"}><p>Home</p></li>
                <li className='item-headings' onClick={()=>window.location.href="/products"}><p>Products</p></li>
            </ul>
        </div>
        <div className='part-2'>Taxu</div>
        <div className='part-3'>
          <button className='reqBtn' onClick={()=>window.location.href="/contact"}>Get Started</button>
        </div>
    </section>
  )
}

export default Navbar