import React from 'react';
import FooterImage from "../image/Footer.png";

const Footer = () => {
  return (
    <div style={{
        width:"100Vw",
        height:"180px",
        bottom:0
    }}
    >
    <img src={FooterImage} height={"100%"} width={"100%"}></img>
    </div>
  )
}

export default Footer;