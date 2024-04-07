import React from 'react';

const AboutGeeseHacks = () => {
  return (
    <div style={styles.container}>
      <div style={styles.headerDots}>
        <span style={{ ...styles.dot, backgroundColor: '#FF6257' }}></span>
        <span style={{ ...styles.dot, backgroundColor: '#FFBD2E' }}></span>
        <span style={{ ...styles.dot, backgroundColor: '#27C93F' }}></span>
      </div>
      <h2 style={styles.heading}>about Geese Hacks</h2>
      <p style={styles.paragraph}>
        Projection is a week long hackathon aimed to tackle real organizational 
        problem through the perspective of business and tech
      </p>
      <p style={styles.paragraph}>
        Projection is Waterloo's biggest google sponsored hackathon backed by 
        University of Waterloo
      </p>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: '8px',
    padding: '2rem',
    color: 'white',
    maxWidth: '600px', // adjust as needed
    margin: 'auto'
  },
  headerDots: {
    display: 'flex',
    gap: '8px',
    marginBottom: '1rem'
  },
  dot: {
    height: '12px',
    width: '12px',
    borderRadius: '50%',
    display: 'inline-block'
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '1rem'
  },
  paragraph: {
    fontSize: '16px',
    lineHeight: '1.6'
  }
};

export default AboutGeeseHacks;
