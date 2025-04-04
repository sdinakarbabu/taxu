import React, { useState } from 'react'
import './Navbar.css'
import logoTaxu from '../../assests/taxu.jpeg'


const Navbar = () => {
  const [activeLink, setActiveLink] = useState(
    (localStorage.getItem('navLink') === null)?localStorage.setItem('navLink','home'):localStorage.getItem('navLink')
  ); 
  const handleLinkClick = (link) => {
    localStorage.setItem('navLink',link)
    setActiveLink(link);
  };
  return (
    <section className='navbar-container' id='HomeBar'>
        <div className='part-2'>
          <img src={logoTaxu} alt='taxu logo' className='logo-image' onClick={()=> window.location.href="/home" } />
          <span className='d-none'>Taxu</span>
        </div>
        <div className='part-1'> 
            <ul className='nav-items'>
                <li
                className={activeLink === 'home' ? 'item-headings active' : 'item-headings'}
                 onClick={()=>{
                  handleLinkClick('home')
                  window.location.href="/home"

                 }}><p>Home</p></li>
                <li className={activeLink === 'products' ? 'item-headings active' : 'item-headings'}
                 onClick={()=>{
                  handleLinkClick('products')
                  window.location.href="/products"

                 }}><p>Products</p></li>
                 <li className={activeLink === 'about' ? 'item-headings active' : 'item-headings'}
                 onClick={()=>{
                  handleLinkClick('about')
                  window.location.href="/about"

                 }}><p>About</p></li>
                <li className={activeLink === 'contact' ? 'item-headings active' : 'item-headings'}
                 onClick={()=>{
                  handleLinkClick('contact');
                  localStorage.removeItem('text');
                  window.location.href="/contact"

                 }}><p>Contact</p></li>
            </ul>
        </div>
        <div className='part-3'>
          <button className='reqBtn' onClick={()=>window.location.href="/contact"}>Get Started</button>
        </div>
    </section>
  )
}

export default Navbar