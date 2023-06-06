import React from 'react';
import '../App.css';
import '../mobile.css';
import Background from '../Pictures/IMG_7246.jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faUserGroup} from '@fortawesome/free-solid-svg-icons';
import {faBuilding} from '@fortawesome/free-solid-svg-icons';
import {faMoneyBill} from '@fortawesome/free-solid-svg-icons';
import {faMessage} from '@fortawesome/free-solid-svg-icons';
import {faHouse} from '@fortawesome/free-solid-svg-icons';





function Home (){
    return (
<div className='Home'>
        <div className='backgroundhome'>
            <img src={Background} alt='Background'/>
            <div className='Center'>
                <h1>RENOVATION</h1>
                <p>Residential & Commercial</p>
                <p>Your Partner in Construction, Bringing Ideas to Life</p>
                <button onClick={() => {window.location.href = '/Residental';}}>View Projects</button>
            </div>
            <div className="container">
                <div className="card">
                    <h1>What We Can Provide For You</h1>
                </div>
                <div className="box-container">
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faUserGroup} />
                        </div>
                        <div className="content">
                            <h3>Community of Hardworking Employees</h3>
                        <p>
                            Our community of hardworking employees is made up of individuals
                            from diverse backgrounds and experiences, but we are all united
                            in our commitment to excellence.
                        </p>
                        </div>
                        </div>
                        <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faBuilding} />
                        </div>
                        <div className="content">
                            <h3>20+ Years of Experience</h3>
                            <p>
                            We are proud to have successfully completed a high number of jobs
                            over the course of this business with numerous of satisfied
                            customers.
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="box-container">
                        <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMoneyBill} />
                        </div>
                        <div className="content">
                            <h3>Reliable and Low Cost</h3>
                            <p>
                            We pride ourselves on delivering high quality work at affordable
                            prices, and we have a proven track record of meeting our clients'
                            expectations and deadlines.
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FontAwesomeIcon icon={faMessage} />
                        </div>
                        <div className="content">
                            <h3>Contact Us</h3>
                            <p>
                            To get in touch with us, you can either call us directly (Phone
                            number given under contact information) or fill out the contact
                            form on our website.
                            </p>
                        </div>
                    </div>
                </div> 
            </div>
            <div>
                <div className="provide">
                    <div className="container2">
                            <h1>We are versatile in our type of work</h1>
                            <p>As a construction company, we are proud to offer a wide range of services to meet the diverse needs of our clients. We have experience working on a variety of projects, including residential and commercial buildings.</p>
                        </div>
                        <div className="box-container2">
                            <div className="box2">
                                <FontAwesomeIcon icon={faHouse} />
                                <h2>Residential</h2>
                                <p>Whether you are looking to renovate an existing space, or remodel your home, we have the ability to help.</p>
                            </div>
                            <div className="box2">
                                <FontAwesomeIcon icon={faBuilding} />
                                <h2>Commercial</h2>
                                <p>From small retail spaces to large office/clinic buildings, we have the expertise and resources to handle any type of commercial construction project.</p>
                            </div>
                            </div>
                    </div>
                </div>
        </div>
</div>
    )
}
  
export default Home;