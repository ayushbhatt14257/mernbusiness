import React from 'react'
import './services.css'
import IMG1 from '../../assests/services1.jpg'
import IMG2 from '../../assests/service22.png'
import IMG3 from '../../assests/service3.png'
import IMG4 from '../../assests/service4.jpg'
import IMG5 from '../../assests/service5.jpg'
import IMG6 from '../../assests/service6.png'
import IMG7 from '../../assests/service7.jpg'
import IMG8 from '../../assests/service8.jpg'
import IMG9 from '../../assests/service9.jpg'

const Services = () => {
  return (
    <>
      <section className='courses'>
        <h2>Our Services</h2>
        <div className="container courses_container">
          <article className='course'>
            <div className="course_image">
              <img src={IMG1} alt="img" />
            </div>
            <div className="course_info">
              <h4>Ecommerce Website</h4>
              <p>Fully Customized E-commerce website solution for Your Business
                Our partner agencies have built Multi-vendor and Single-vendor E-Commerce websites across Industries. </p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG2} alt="img" />
            </div>
            <div className="course_info">
              <h4>Dating Website</h4>
              <p>Looking for a dating website development team to turn your idea into a working reality? Hire top developers who bring in the market a dating portal that brings the right pairs together.

              </p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG3} alt="img" />
            </div>
            <div className="course_info">
              <h4>Corporte Webstie</h4>
              <p>Your website is the first thing that your customer notices before taking any action so it is high time you should leave an ever lasting impression on your customer.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG4} alt="img" />
            </div>
            <div className="course_info">
              <h4>Travel Website</h4>
              <p>Our developers have the extensive technical know-how and a passion for building travel specific websites. We also offer fully-functional tourism portal development services depending upon your custom requirements.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG5} alt="img" />
            </div>
            <div className="course_info">
              <h4>Video Streaming Website</h4>
              <p>With our fully customizable and easy-to-integrate Live SDK, you can quickly build reliable, scalable, and interactive live streaming into your mobile, web, and desktop apps.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG6} alt="img" />
            </div>
            <div className="course_info">
              <h4>IT Service Website</h4>
              <p>Client-focused, customer-centric, creating website solutions that deliver tangible business results, Appnovation's web developers helps brands the ever-changing digital landscape.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG7} alt="img" />
            </div>
            <div className="course_info">
              <h4>Construction Website</h4>
              <p>We develop conversion-ready websites that attract, educate, nurture and convert your visitors to customers in one place.</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG8} alt="img" />
            </div>
            <div className="course_info">
              <h4>School Mangement Website</h4>
              <p> we are a creative team that helps small and large business tell their story to the world. We aim to create something that is authentic and can be found nowhere else!</p>
            </div>
          </article>

          <article className='course'>
            <div className="course_image">
              <img src={IMG9} alt="img" />
            </div>
            <div className="course_info">
              <h4>Marketing Website</h4>
              <p>We automate complete sales and marketing tasks by automating your repetitive task in real time to provide a personalised experience to your visitors and convert them to customers at oneplace.</p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default Services;