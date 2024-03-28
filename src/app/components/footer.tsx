import React from "react";
import Link from "next/link";
import FooterLogo from "../../../public/FooterLogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "black", color: "white", padding: "20px"  }}>
      <Image src={FooterLogo} alt="FooterLogo"/>
    </footer>
  );
};  

export default Footer;