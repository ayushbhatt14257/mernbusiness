import React from 'react'
import { useState, useEffect } from 'react'
import './home.css'
import IMG from '../../assests/home.png'
import {AiFillFormatPainter} from 'react-icons/ai'
import {AiOutlineCode} from 'react-icons/ai'
import {HiOutlineLightBulb} from 'react-icons/hi'
import {BsSpeedometer2} from 'react-icons/bs'
import {RiSecurePaymentFill} from 'react-icons/ri'
import {BsPhone} from 'react-icons/bs'

const Home = () => {

    const [, setUserData] = useState('');
  
    const callHomePage = async () => {
      try {
        const res = await fetch('/getData', {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          },
          // credentials: "include"
        });
  
        const data = await res.json();
        console.log(data);
        setUserData(data.name);
  
  
      } catch (error) {
        console.log(error);
  
      }
    }
  
  
    useEffect(() => {
      callHomePage();
    }, []) // eslint-disable-line react-hooks/exhaustive-deps

  return (

    <>
    <header>
      <div className="container header_container">
        <div className="header_left">
          <h1>We help to grow your business online</h1>
          <p>We are an IT company aims to find the best solutions for you as per your requirement. Our aim is to provide the best technology products strategically designed & created by us. We design & develop websites, custom softwares, technology integration, and more solutions.</p>
          <a href="/contact" className='btn btn-primary'>Get Started</a>
        </div>

        <div className="header_right">
          <div className="header_right-img">
            <img src={IMG} alt="Img"/>
          </div>
        </div>
      </div>
    </header>

{/* ====================== END OF HEADER ======= */}

    <section className='categories'>
      <div className="container categories_container">
        <div className="categories_left">
          <h1>Categories</h1>
          <p>Your website is the face of your business. A well-designed website puts your best foot forward, establishing credibility and authority with your potential clients, furthermore communicating your most interesting values, messages, and mission statements.</p>

          <a href="/services" className='btn'>Learn More</a>
        </div>

        <div className="categories_right">
          <article className='category'>
            <span className='category_icon'><AiFillFormatPainter/></span>
            <h5>UI/UX</h5>
            <p>We Provide the best UI/UX for the ultimate user experience by following the latest trends of the market.</p>
          </article>

          <article className='category'>
            <span className='category_icon'><AiOutlineCode/></span>
            <h5>Bussiness Logic</h5>
            <p>Our payment gateway supports ; Debit card, Credit card, Net banking, UPI, Wallets EMI and bank transfer.</p>
          </article>

          <article className='category'>
            <span className='category_icon'><HiOutlineLightBulb/></span>
            <h5>Creative Ideas</h5>
            <p>Client Satisfaction is our first priority and we are best at it. We make sure our client is satisfied with our after-sales services.</p>
          </article>

          <article className='category'>
            <span className='category_icon'><BsSpeedometer2/></span>
            <h5>Fast Loding</h5>
            <p>Your website will be hosted on Industry level servers, which will be safe, secure and amazingly fast.</p>
          </article>

          <article className='category'>
            <span className='category_icon'><RiSecurePaymentFill/></span>
            <h5>Secure</h5>
            <p>The focus on security has never been more important than in the current times. In the IT world, it gains more relevance every day. </p>
          </article>

          <article className='category'>
            <span className='category_icon'><BsPhone/></span>
            <h5>Responsive</h5>
            <p>100% web app ready and mobile responsive e-commerce website will just make your work easier.</p>
          </article>
        </div>
      </div>
    </section>

    </>
  )
}

export default Home;