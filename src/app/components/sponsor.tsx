`use client`;
import React, { useRef, useEffect } from 'react';
import Link from "next/link";
import "./styles.css";
import { sponsors } from './sponsorsData';

const SponsorCard = ({ name, logo, description, link }: { name: string; logo: string; description: string; link: string }) => {
    return (
      <div className="sponsor-card">
        <div className="sponsor-logo">
          <img src={logo} alt={`${name} Logo`} />
        </div>
        <div className="sponsor-description">
          <p>{description}</p>
          <Link href={link}>Explore {name}</Link>
        </div>
      </div>
    );
  };


const PartnerCard = () => {

}

const Sponsor = () => {
    return (
        <div style={{ padding: '2rem' }}>
        <h1 className='h2'>Sponsor our Special Journey</h1>
        <p className="text" style = {{marginTop: "20px"}}>
            Check out the Sponsor Package <span/>
            <Link className="view-modal" href=""> {/* link to sponsor package */}
                View Detail
            </Link>
        </p>
        <p className="text2" style = {{marginTop: "10px"}}>or Send us an inquiry at
            <Link  href=""> {/* link to projection email */}
                "gdscprojection@gmail.com"
            </Link>
        </p>
        {sponsors.map((sponsor, index) => (
        <SponsorCard
          key={index}
          name={sponsor.name}
          logo={sponsor.logo}
          description={sponsor.description}
          link={sponsor.link}
        />
      ))}
        <h1 className='h2'>Partner with Us</h1>
      </div>
    );
  };
  
  export default Sponsor;
  