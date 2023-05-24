import React from "react";


function About() {
  return (
    <div class="about-us-content">
        <div class="title">
            <h2>About Us!</h2>
        </div>
        <div class="divider">
        <p>Welcome to our website!<br></br>We are a company that specializes in providing high-quality products and services. Our goal is to make your life easier by providing you with the best products and services available on the market today.We are a team of passionate individuals who are dedicated to providing the best service to our customers.With years of experience in the industry, we have built a reputation for being reliable and trustworthy. We believe that honesty and transparency are the keys to success, and we strive to maintain these values in all our dealings with our customers.</p>
        <p>Thank you for choosing us as your provider. We look forward to serving you!</p>
        </div>
        <div className="go-to-contact">
            <button onClick={() => {window.location.href = '/contact';}}>
                Click Here To Get In Contact With Us!
            </button>
        </div>
    </div>
  );
}

export default About;

