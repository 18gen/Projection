"use client";
import React from 'react';
import { useState } from 'react';

const FAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const faqs = [
    {
      question: '+ What is Projection?',
      answer: 'Projection is a week-long hackathon aimed at tackling real organizational problems through the perspective of business and tech.',
    },
    {
      question: '+ Who is organizing Projection?',
      answer: 'Projection is Waterloo\'s biggest Google-sponsored hackathon backed by the University of Waterloo.',
    },
    {
      question: '+ What are the benefits for hackers?',
      answer: 'Hackers will receive various benefits, such as...',
    },
    // Add more FAQ items as needed
  ];

  const handleToggle = (index: number) => {
    if (expandedIndex === index) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div style={{ padding: '5rem' }}>
      <h2 className='text-2xl font-bold mb-4'>FAQ</h2>
      {faqs.map((faq, index) => (
        <div key={index} onClick={() => handleToggle(index)} className='cursor-pointer mb-4'>
          <h3 className='text-lg font-semibold'>{faq.question}</h3>
          {expandedIndex === index && <p className='mt-2'>{faq.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default FAQ;