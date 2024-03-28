import React from "react";
import Link from "next/link";
import { Content } from "next/font/google";
import Image from "next/image";
import GDSCLogo from "../../../public/GDSCLogo.png";

const Header = () => {
    return (
        <div style={{ backgroundColor: "black", color: "white", justifyContent: "space-between", display: "flex", padding: "10px" }}>
            <div style={{ justifyContent: "left", display: "flex" }}>
                <Image src={GDSCLogo} alt="GDSCLogo" />
                <Link href="/" style={{ marginRight: "1rem" }}>About</Link>
                <Link href="/" style={{ marginRight: "1rem" }}>Sponsor</Link>
                <Link href="/" style={{ marginRight: "1rem" }}>FAQ</Link>
                <Link href="/">Devpost</Link>
            </div>

            <div>
                <Link href="/">Apply Now</Link>
            </div>
        </div>
    );
};

export default Header;