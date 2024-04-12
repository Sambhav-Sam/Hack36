import React from "react";
import "./HomePage.css";
import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "@mui/material";

const HomePage = () => {
  return (
      <>
      <section class="info">
      <div class="write">
        <h1>Your path to better health begins here.</h1>
        <Link href="/login">
          <button class="btn">Create Account</button>
        </Link>
      </div>
    </section>
    <div class="review">
      <div class="box2">
        <div class="first">
          <h1>Sambhav Sharma</h1>
          <p>
          Patients today have many options while seeking healthcare providers. How can you make your practice stand out from the wide range of options? It’s time to make sure you’re taking advantage of online reviews because 91% of younger customers trust these more than personal recommendations. 
          </p>
        </div>
        <div class="first hide">
          <h1>Sam</h1>
          <p>
          Patients today have many options while seeking healthcare providers. How can you make your practice stand out from the wide range of options? It’s time to make sure you’re taking advantage of online reviews because 91% of younger customers trust these more than personal recommendations.  ❤
          </p>
        </div>
        <div class="first hide">
          <h1>Sammy</h1>
          <p>
          Patients today have many options while seeking healthcare providers. How can you make your practice stand out from the wide range of options? It’s time to make sure you’re taking advantage of online reviews because 91% of younger customers trust these more than personal recommendations. 
          </p>
        </div>
      </div>
      <div class="legalize">
        <div class="column">
          <div class="top_info">
            <h1>LEGAL</h1>
          </div>
          <div class="bottom_info">
            <span>Privacy</span>
            <span>Terms</span>
            <span>Cookie Policy</span>
            <span>Intellectual Property</span>
          </div>
        </div>
        <div class="column">
          <div class="top_info">
            <h1>CAREERS</h1>
          </div>
          <div class="bottom_info">
            <span>Careers Portal</span>
            <span>Tech Blog</span>
          </div>
        </div>
        <div class="column">
          <div class="top_info">
            <h1>Social</h1>
          </div>
          <div class="bottom_info row">
            <span><XIcon /></span>
            <span><InstagramIcon /></span>
            <span><FacebookIcon /></span>
          </div>
        </div>
        <div class="column">
          <div class="top_info">
            <h1>HELP</h1>
          </div>
          <div class="bottom_info">
            <span>FAQ</span>
            <span>Destinations</span>
            <span>Press Room</span>
            <span>Contact</span>
            <span>Promo Code</span>
          </div>
        </div>
      </div>
      <div class="app">
        <div class="app_info">
          <h1>GET THE APP!</h1>
          <img class="app_img" src="/images/apple.webp" alt="" />
          <img class="app_img2" src="/images/google.webp" alt="" />
        </div>
        <div class="app_information">
          <h5>
          Patients today have many options while seeking healthcare providers. How can you make your practice stand out from the wide range of options? It’s time to make sure you’re taking advantage of online reviews because 91% of younger customers trust these more than personal recommendations.  <br />
            <br />
            Patients today have many options while seeking healthcare providers. How can you make your practice stand out from the wide range of options? It’s time to make sure you’re taking advantage of online reviews because 91% of younger customers trust these more than personal recommendations. 
          </h5>
        </div>
      </div>
      <div class="footer">
        <div class="footer_info">
          <span>FAQ</span>/
          <span>Safety Tips</span>/
          <span>Terms</span>/
          <span>Cookie Policy</span>/
          <span>Privacy Settings</span>
        </div>
        <div class="footer_right">
          <span>© 2024 Match Group, Medico, All Rights Reserved.</span>
        </div>
      </div>
    </div>
      </>
  );
};

export default HomePage;
