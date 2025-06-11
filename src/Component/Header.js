import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { MdFacebook} from 'react-icons/md';
import '../Style/Header.css';
import dgplogo from '../Assets/dgp.png';


 export default function Header() {
  return (
    <div>
      <div className="header-titles">
    <div>
  <img src={dgplogo} alt='logo' className="logo" />
</div>

        <nav>
          <ol id="navigation">
            <li>< Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/Gallery">Gallery</Link></li>
           {/*  <li>
              Blog menu with submenu 
              <Link to="/blog">Blog</Link>
              <ul className="submenu">
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/blog-details">Blog Details</Link></li>
                <li><Link to="/elements">Elements</Link></li>
              </ul>
            </li>*/}
            <li><Link to="/contact">Contact Us</Link></li>
            <li> <Link to = "https://web.facebook.com/dgpfashion"> <MdFacebook/></Link></li>
          </ol>
        </nav>
      </div>
    </div>
  );
}

