// refer to https://stackoverflow.com/questions/74965849/youre-importing-a-component-that-needs-usestate-it-only-works-in-a-client-comp
"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import "./styles.css";



const Landing = () => {
  return (
    <div className="container">
      <div className="title-and-video">
        <div className='about-title'>
          <h1 className='h1'>Geese Hacks</h1>
          <p className="setLeft" style={{ fontSize: "20px" }}>September.</p>
          <div className="setLeft" style={{ paddingTop: "50px" }}>
            <Link className="view-modal" href="/users">Apply to UWH</Link>
          </div>
        </div>

        <video autoPlay loop muted className="background-video">
          <source src="/goose.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>


    </div>
  )
}

const initialItems: Array<JSX.Element> = [
  <li key="item1">30+ Spsonsors</li>,
  <img key="img1" src="./geese/g1.gif" alt="g1" />,
  <li key="item2">30+ Sponsors</li>,
  <img key="img2" src="./geese/g1.gif" alt="g1" />,
  <li key="item3">30+ Sponsors</li>,
  <img key="img3" src="./geese/g1.gif" alt="g1" />,
  <li key="item4">30+ Sponsors</li>,
  <img key="img4" src="./geese/g1.gif" alt="g1" />,
  <li key="item5">30+ Sponsors</li>,
  <img key="img4" src="./geese/g1.gif" alt="g1" />,
];
const nextItems: Array<JSX.Element> = [
  <li key="item1">20+ Sponsors</li>,
  <img key="img1" src="./geese/g2.gif" alt="g1" />,
  <li key="item2">20+ Sponsors</li>,
  <img key="img2" src="./geese/g2.gif" alt="g1" />,
  <li key="item3">20+ Sponsors</li>,
  <img key="img3" src="./geese/g2.gif" alt="g1" />,
  <li key="item4">20+ Sponsors</li>,
  <img key="img4" src="./geese/g2.gif" alt="g1" />,
  <li key="item5">20+ Sponsors</li>,
  <img key="img4" src="./geese/g2.gif" alt="g1" />,
];

const Scroller: React.FC = () => {
  const leftScrollerRef = useRef<HTMLDivElement>(null);
  const rightScrollerRef = useRef<HTMLDivElement>(null);
  const [toLeftItems, setLeftItems] = useState<Array<JSX.Element>>([]);
  const [toRightItems, setRightItems] = useState<Array<JSX.Element>>([]);

  // Logic to duplicate items and set them for left and right scrollers
  useEffect(() => {

    setLeftItems([...initialItems, ...initialItems]); // Duplicate items for the left scroller
    setRightItems([...nextItems, ...nextItems]); // Duplicate items for the right scroller
  }, []);

  // Independent scroll handling for each row
  useEffect(() => {
    const loopScroll = (scroller: HTMLDivElement, direction: "left" | "right") => {
      const handleScroll = () => {
        if (!scroller) return;
        const maxScrollLeft = scroller.scrollWidth - scroller.clientWidth;
        // Adjust based on scrolling direction
        if (direction === "left" && scroller.scrollLeft >= scroller.scrollWidth / 2) {
          scroller.scrollLeft = 0;
        } else if (direction === "right" && scroller.scrollLeft <= 0) {
          scroller.scrollLeft = maxScrollLeft / 2;
        }
      };

      scroller.addEventListener('scroll', handleScroll);
      return () => scroller.removeEventListener('scroll', handleScroll);
    };

    if (leftScrollerRef.current) { loopScroll(leftScrollerRef.current, 'left'); }
    if (rightScrollerRef.current) { loopScroll(rightScrollerRef.current, 'right'); }
  }, [toLeftItems, toRightItems]); // Depend on items to reapply effect when items change
  
  return (
    <div className="scroller">
      <div className="scroller-inner toLeft" ref={leftScrollerRef}>
        {toLeftItems}
      </div>
      <div className="scroller-inner toRight" ref={rightScrollerRef}>
        {toRightItems}
      </div>
    </div>
  );
};


const InfoSection = () => {
  return (
    <div className="info-container">
      <div className="info-header-dots">
        <span className="info-dot" style={{ backgroundColor: '#FF6257' }}></span>
        <span className="info-dot" style={{ backgroundColor: '#FFBD2E' }}></span>
        <span className="info-dot" style={{ backgroundColor: '#27C93F' }}></span>
      </div>
      <h2 className="info-heading">About Geese Hacks</h2>
      <p className="info-paragraph">
        Projection is a week-long hackathon aimed at tackling real organizational 
        problems through the perspective of business and tech.
      </p>
      <p className="info-paragraph">
        Projection is Waterloo&apos;s biggest Google-sponsored hackathon, backed by 
        the University of Waterloo.
      </p>
    </div>
  );
};

const About = () => {
  return (
    <div style={{ paddingTop: "13%", backgroundColor: "black"}}>
      <Landing />
      <Scroller /> {/* second scroller is not in loop yet :)) */}
      <div className="info-section-wrapper">
        <InfoSection /> { /* About Geese Hacks */}
      </div>
    </div>

  );
};

export default About;
