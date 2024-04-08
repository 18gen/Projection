import React from "react";
import Link from "next/link";
import { Content } from "next/font/google";
import Image from "next/image";
import gdscLogo from "../../../public/logo/gdsclogo.png";
import "./styles.css";
const Header = () => {
    return (
        <div className="header">
            <div style={{ justifyContent: "left", display: "flex"}}>
                <Image src={gdscLogo} width = "60" alt="gdscLogo" />
                <Link href="/" className="nav">About</Link>
                <Link href="#sponsor" className="nav">Sponsor</Link>
                <Link href="/" className="nav">FAQ</Link>
                {/*<Link href="/" className="nav">Devpost</Link> */}
            </div>
            <div className="rightContent">
                <Link href="/users" >Apply Now | Log In</Link>
            </div>
        </div>
    );
};

export default Header;