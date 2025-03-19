import React from 'react'
import './About.css'
import vision from '../../assests/aboutPage/vision.png'
import arrowMark from '../../assests/aboutPage/arrow.png'
import home from '../../assests/aboutPage/home.png'
import phone from '../../assests/aboutPage/phone.png'
import facebook from '../../assests/aboutPage/face book.png'
import instagram from '../../assests/aboutPage/Instagram.png'
import twitter from '../../assests/aboutPage/twitter.png'
import target from '../../assests/aboutPage/target.png'

import taxu from '../../assests/aboutPage/WhatsApp Image 2025-02-04 at 21.50.00.jpeg'


const About = () => {
  return (
    <section className='AboutPage-section'>
      <div className='about-us-Block'>
        <button className='btn-AboutUs'>About Us</button>
        <p className='about-us-description'>
          Welcome to Taxu, the platform for Nex Gen Tax Consultancy, where we provide expert accounting and taxation solutions at affordable rates. Our team of highly skilled professionals specializes in tax planning, compliance, bookkeeping, and business advisory to help businesses stay financially healthy.<br/>
          Based in Bapatla, Andhra Pradesh, we serve businesses across India and internationally, ensuring financial efficiency and regulatory compliance. Whether you need bookkeeping support, tax filing, or business consulting, we’ve got you covered.
        </p>
      </div>
      <div className='vision-block'>
        <button className='vision-btn'>Vision</button>
        <div className='content-Block'>
          <img src={vision} alt='vision' className='vision-img' />
          <p className='vision-content'> To become a trusted leader in financial solutions, offering innovative, accurate, and affordable services to businesses worldwide.</p>
        </div>
      </div>
      <div className='vision-block'>
        <button className='vision-btn' style={{alignSelf:'start' }}>Mission</button>
        <div className='content-Block' style={{flexDirection:'row-reverse' }}>
          <img src={target} alt='vision' className='vision-img' />
          <ul className='vision-content'> 
            <li className='vision-Point-Block'>
              <img src={arrowMark} alt={arrowMark} className='arrowMark' />
              <p>To deliver cost-effective and efficient financial solutions tailored to each client’s needs. </p>
            </li>
            <li className='vision-Point-Block'>
              <img src={arrowMark} alt={arrowMark} className='arrowMark' />
              <p>To ensure compliance and accuracy in all taxation and accounting matters.  </p>
            </li>
            <li className='vision-Point-Block'>
              <img src={arrowMark} alt={arrowMark} className='arrowMark' />
              <p>To provide seamless bookkeeping services to businesses outside India.  </p>
            </li>
            <li className='vision-Point-Block'>
              <img src={arrowMark} alt={arrowMark} className='arrowMark' />
              <p>To empower businesses with expert financial guidance and innovative solutions for sustained growth. </p>
            </li>
          </ul>
        </div>
      </div>
      <div className='About-address-block'>
        <div className='Address-block'>
          <h1 className='address-heading'>Address:- </h1>
          <div className='vision-Point-Block'>
            <img src={home} alt={home} className='arrowMark' />
            <p className='paragraphAddressPoint'>15-3-19/A, Bapatla Rd, Sharoff Bazar, Besthapalem, Jagannadhapuram, BapatlaAndhra Pradesh-522101, India</p>
          </div>
          <div className='vision-Point-Block'>
            <img src={phone} alt={phone} className='arrowMark' />
            <p className='paragraphAddressPoint'>+91 7659909777</p>
          </div>
          <div className='vision-Point-Block'>
            <a href='#' className='external-social-link'>
              <img src={facebook} alt={facebook} className='arrowMark' />
            </a>
            <a href='#' className='external-social-link'>
              <img src={instagram} alt={instagram} className='arrowMark' />
            </a>
            <a href='#' className='external-social-link'>
              <img src={twitter} alt={twitter} className='arrowMark' />
            </a>
          </div>
        </div>
        <div className='taxuPoint-block'>
          <img src={taxu} alt={taxu} className='vision-address-img' />
          <p className='vision-content taxu-description'> At Taxu, we don’t just offer financial services-we build long-term partnerships, ensuring your business thrives in an ever-evolving financial landscape. Partner with us for stress-free accounting and taxation!</p>
        </div>
      </div>
    </section>
  )
}

export default About