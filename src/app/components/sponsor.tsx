`use client`;
import React, { useRef, useEffect } from 'react';
import Link from "next/link";
import "./styles.css";
// import { sponsors } from './sponsorsData';

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

// Dummy data for sponsors
const sponsors = [
  {
    name: 'Google',
    logo: '/path/to/google-logo.png', // Replace with actual path to logo
    description: 'Leading global technology company focusing on search and advertising services.',
    link: '/google'
  },
  {
    name: 'Sun Life',
    logo: '/path/to/sunlife-logo.png', // Replace with actual path to logo
    description: 'A leading financial services organization dedicated to helping clients achieve lifetime financial security and live healthier lives.',
    link: '/sunlife'
  },
  // Add more dummy sponsor data here
];

// Dummy data for partners
const partners = [
  {
    name: 'University of Waterloo',
    logo: '/path/to/uwaterloo-logo.png', // Replace with actual path to logo
    link: '/uwaterloo'
  },
  {
    name: 'CS-CAN | INFO-CAN',
    logo: '/path/to/cs-can-logo.png', // Replace with actual path to logo
    link: '/cs-can'
  },
  // Add more dummy partner data here
  {
    name: 'CS-CAN | INFO-CAN',
    logo: '/path/to/cs-can-logo.png', // Replace with actual path to logo
    link: '/cs-can'
  },
  {
    name: 'CS-CAN | INFO-CAN',
    logo: '/path/to/cs-can-logo.png', // Replace with actual path to logo
    link: '/cs-can'
  },
  {
    name: 'CS-CAN | INFO-CAN',
    logo: '/path/to/cs-can-logo.png', // Replace with actual path to logo
    link: '/cs-can'
  },
  {
    name: 'CS-CAN | INFO-CAN',
    logo: '/path/to/cs-can-logo.png', // Replace with actual path to logo
    link: '/cs-can'
  },

];

// SponsorCard component (already provided)

interface PartnerProps {
  name: string;
  logo: string;
  link: string;
}

// PartnerCard component
const PartnerCard = ({ name, logo, link}: PartnerProps) => {
  return (
    <div className="partner-card">
      <div className="partner-logo">
        <img src={logo} alt={`${name} Logo`} />
      </div>
      <div className="partner-description">
        <Link href={link}>{name}</Link>
      </div>
    </div>
  );
};

// Sponsor component (already provided, updated to include PartnerCard rendering)
const Sponsor = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 className='h2'>Sponsor our Special Journey</h1>
      <p className="text" style={{ marginTop: "20px" }}>
        Check out the Sponsor Package <span />
        <Link className="view-modal" href=""> {/* link to sponsor package */}
          View Detail
        </Link>
      </p>
      <p className="text2" style={{ marginTop: "10px" }}>or Send us an inquiry at
        <Link href=""> {/* link to projection email */}
          gdscprojection@gmail.com
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
      <div className='partner-card-containers'>


        {partners.map((partner, index) => (
          <PartnerCard
            key={index}
            name={partner.name}
            logo={partner.logo}
            link={partner.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
