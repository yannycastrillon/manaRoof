import React from 'react';
import css from 'styled-jsx/css';
import footerStyles from './footer.styles';

export const leftSection = () => {
  return (
    <div>
      <p className="r-subheader">
        This website is operated under manaroof Inc.
      </p>
      <p className="r-subheader">
        ManaRoof dedicates to manage and build personal on the construction industry.
      </p>
      <p className="r-subheader">
        Copyright 2018
        <br /> ManaRoof, Inc. All rights reserved
      </p>
      <style jsx>{footerStyles}</style>
    </div>
  )
}

export const middleSection = () => {
  return (
    <div>
      <h3>Company</h3>
      <ul className="r-subheader">
      <li><a href="/about_us">About Us</a></li>
      <li><a href="#" target="_blank">Work with us</a></li>
      <li><a href="#" target="_blank">Mission</a></li>
      <li><a href="#">Vision</a></li>
    </ul>
    <h3>Follow Us</h3>
    <div >
      <ul className="r-subheader">
        <li className="social-links">
          <a href="#" target="_blank"><i className="fa fa-facebook" /></a>
          <a href="#" target="_blank"><i className="fa fa-twitter" /></a>
          <a href="#" target="_blank"><i className="fa fa-instagram" /></a>
        </li>
      </ul>
    </div>
    <style jsx>{ footerStyles }</style>
    </div>
  )
}

export const rightSection = () => {
  return (
    <div>
      <h3>Contact Us</h3>
      <ul>
        <li><a href="mailto:manaroof@example.com">manaroof@example.com</a></li>
        <li><a href="tel:3235715804">323-571-5804</a></li>
      </ul>
      <h3>Legal</h3>
      <ul className="r-subheader">
        <li><a href="/privacy"></a>Privacy Policy</li>
        <li><a href="/terms">Term and Conditions</a></li>
      </ul>
      <style jsx>{footerStyles}</style>
    </div>
  )
}
