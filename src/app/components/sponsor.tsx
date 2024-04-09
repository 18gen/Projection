'use client';
import React, { useRef, useEffect } from 'react';
import Link from "next/link";
import "./styles.css";
// import "../globals.css";
import { sponsors, partners } from './sponsorsData';

const SponsorCardTier1 = ({ name, logo, description, link }: { name: string; logo: string; description: string; link: string }) => {
  return (
    <div className="sponsor-card">
      <div className="sponsor-logo">
        <img src={logo} alt={`${name} Logo`} />
      </div>
      <div className="sponsor-description">
        <p>{description}</p>
        <Link href={link}> Explore {name}</Link>
      </div>
    </div>
  );
};

const SponsorCardTier = ({ name, logo, link }: { name: string; logo: string; link: string }) => {
    return (
        <div className="partner-card">
            <div className="partner-logo">
                <img src={logo} alt={`${name} Logo`} />
            </div>
        </div>
    );
};
// PartnerCard component
const PartnerCard =  ({ name, logo, link }: { name: string; logo: string; link: string }) =>  {
  return (
    <div className="partner-card">
      <div className="partner-logo">
        <img src={logo} alt={`${name} Logo`} />
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
        <SponsorCardTier1
          key={index}
          name={sponsor.name}
          logo={sponsor.logo}
          description={sponsor.description}
          link={sponsor.link}
        />
      ))}
        <div className="sponsor-tier2">
            {sponsors.map((sponsor, index) => (
          <SponsorCardTier
            key={index}
            name={sponsor.name}
            logo={sponsor.logo}
            link={sponsor.link}
          />
            ))}
        </div>
        <div className="sponsor-tier3">
            {partners.map((partner, index) => (
          <SponsorCardTier
            key={index}
            name={partner.name}
            logo={partner.logo}
            link={partner.link}
          />
            ))}
        </div>
      <h1 className='h2'>Partner with Us</h1>
      <div className="partner-card-containers">
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
