import React from 'react';
import Googlelogin from './Googlelogin';
import '../css/Home.css';
import imageSrc from '../media/Header.png'; // header image
import rectangleImageSrc from '../media/Rolling.gif'; // home box image
import logoSrc from '../media/casset.png';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userSpotifyID")
    localStorage.removeItem("tokenType");
    localStorage.removeItem("expiresIn");
    localStorage.removeItem("refresh_token");
    localStorage.removeItem("profileExists");
  }, []);

  return (
    <div>
      <img src={imageSrc} alt="CASSET" className="header" />
      <div className="container">
        <div className="rectangle-container">
          <img src={rectangleImageSrc} alt="Rectangle Image" className="rectangle-image" />
          <Googlelogin />
        </div>
      </div>
      <footer>
        <img src={logoSrc} alt="logo" style={{maxWidth: "50px"}}/>
        &emsp;© 2024 CasSet&emsp;About&emsp;Privacy Policy&emsp;Contact
      </footer> 
    </div>
  );
}