import React,{useContext} from 'react'
import IMG from '../../assests/about.png'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {BsBuilding} from 'react-icons/bs'
import {FiUsers} from 'react-icons/fi'
import './about.css'
import IMG1 from '../../assests/about1.jpg'
import IMG2 from '../../assests/about2.svg'
import IMG3 from '../../assests/about3.png'
import IMG4 from '../../assests/about4.png'
import IMG5 from '../../assests/about5.png'
import IMG6 from '../../assests/about6.png'

const About = () => {
 
  return (
    <>
      <section className='about_achievements'>
        <div className="container about_achievements-container">
          <div className="about_achievements-left">
            <img src={IMG} alt="img" />
          </div>

          <div className="about_achievements-right">
            <h1>Achivements</h1>
            <p>Rise to meet every opportunity in your digital future with a bold, everything-as-a-service solution for enhancing your power, flexibility and scale.


            </p>
            <div className="achievements_cards">
              <article className='achievements_card'>
                <span className='achievements_icon'><AiOutlineFundProjectionScreen/></span>
                <h3>40+</h3>
                <p>Projects</p>
              </article>

              <article className='achievements_card'>
                <span className='achievements_icon'><BsBuilding/></span>
                <h3>200+</h3>
                <p>Companies</p>
              </article>

              <article className='achievements_card'>
                <span className='achievements_icon'><FiUsers/></span>
                <h3>700+</h3>
                <p>Developers</p>
              </article>
            </div>
          </div>
        </div>
      </section>



      {/*========== END OF ACHIEVEMENTS ======== */}

      <section className='team'>
        <h2>Technology We Use</h2>
        <div className="container team_container">
          <article className='team_member'>
            <div className="team_member-image">
              <img src={IMG1} alt="img" />
            </div>
            <div className="team_member-info">
              <h4>Rect.js</h4>
              <p>Frontend</p>
            </div>
          </article>

          <article className='team_member'>
            <div className="team_member-image">
              <img src={IMG2} alt="img" />
            </div>
            <div className="team_member-info">
              <h4>Node.js</h4>
              <p>Backend</p>
            </div>
          </article>

          <article className='team_member'>
            <div className="team_member-image">
              <img src={IMG3} alt="img" />
            </div>
            <div className="team_member-info">
              <h4>Express.js</h4>
              <p>Backend</p>
            </div>
          </article>

          <article className='team_member'>
            <div className="team_member-image">
              <img src={IMG4} alt="img" />
            </div>
            <div className="team_member-info">
              <h4>MongoDB</h4>
              <p>Database</p>
            </div>
          </article>

          <article className='team_member'>
            <div className="team_member-image">
              <img src={IMG5} alt="img" />
            </div>
            <div className="team_member-info">
              <h4>Html</h4>
              <p>Frontend</p>
            </div>
          </article>

          <article className='team_member'>
            <div className="team_member-image">
              <img src={IMG6} alt="img" />
            </div>
            <div className="team_member-info">
              <h4>Rect.js</h4>
              <p>Frontend Design</p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}

export default About;