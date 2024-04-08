import React from "react";
import Link from "next/link";
import FooterLogo from "../../../public/logo/footerlogo.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer style={{ padding: "20px"}}>
      <Image src={FooterLogo} width = "400" alt="FooterLogo"/>
    </footer>
  );
};  

export default Footer;