import React from 'react'
import { useEffect } from 'react'
import IMG from '../../assests/contact.png'
import { AiFillPhone } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { GrLocation } from 'react-icons/gr'
import './contact.css'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { useState } from 'react'

const Contact = () => {

  const [userData, setUserData] = useState({ name: '', email: '', phone: '', message: '' });

  const callContactPage = async () => {
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
      setUserData({ ...userData, name: data.name, email: data.email, phone: data.phone });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }

    } catch (error) {
      console.log(error);

    }
  }


  useEffect(() => {
    callContactPage();
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]:value});
  }

  const contactForm = async (e) => {
    e.preventDefault();

    const {name, email, phone, message} = userData;

    const res = await fetch('/contact', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify({
        name, email, phone, message
      })
    });

    const data = await res.json();

    if (!data) {
      console.log('message not send');
    } else {
      alert("Message Send");
      setUserData({...userData, message: ""})
    }
  }

  return (
    <section className='contact'>
      <div className="container contact_container">
        <aside className='contact_aside'>
          <div className="aside_image">
            <img src={IMG} alt="img" />
          </div>
          <h2>Contact Us</h2>
          <p>Let us help your business to grow. We provide technical solutions to help your organization take your digital footprint to the next level. Contact us to get together and discuss business.</p>
          <ul className="contact_details">
            <li>
              <AiFillPhone />
              <h5>+9198898989</h5>
            </li>
            <li>
              <AiOutlineMail />
              <h5>ayushbhatt1425@gmail.com</h5>
            </li>
            <li>
              <GrLocation />
              <h5>Ratlam, IN</h5>
            </li>
          </ul>
          <ul className='contact_socials'>
            <li><a href="www.facebook.com"><AiFillFacebook /></a></li>
            <li><a href="www.instagram.com"><AiFillInstagram /></a></li>
            <li><a href="www.github.com"><AiFillGithub /></a></li>
            <li><a href="www.linkedin.com"><AiFillLinkedin /></a></li>
          </ul>
        </aside>


        <form method='POST' className='contact_form'>
          <div className="form_name">
            <input type="text" name='name' value={userData.name} onChange={handleInput} placeholder='Your Name' required />
            <input type="phone" name='phone' value={userData.phone} onChange={handleInput} placeholder='Your Phone' required />
          </div>
          <input type="email" name="email" value={userData.email} onChange={handleInput} placeholder='Your Email Address' required />
          <textarea name="message" rows="7" value={userData.message} onChange={handleInput} placeholder='Message' required></textarea>
          <button type='submit' onClick={contactForm} className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;