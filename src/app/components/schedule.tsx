"use client";
import React from 'react';
import "./schedule.css";

const scheduleData = {
    "Day 0": {
        date: "Friday, February 12th (PST)",
        events: [
          { time: "6:00 PM", title: "Pre-Hackathon Networking" },
          { time: "7:30 PM", title: "Workshop: Introduction to Hacking" },
          { time: "8:00 PM", title: "Theme Released !!" },
          { time: "8:30 PM", title: "Virtual Q & A Session" },
          // ... other events
        ]
      },
  "Day 1": {
    date: "Saturday, February 13th (PST)",
    events: [
      { time: "9:00 AM", title: "Opening Ceremony" },
      { time: "9:30 AM", title: "Breakout to Design!" },
      { time: "9:30 AM", title: "Team Formation" },
      { time: "10:30 AM", title: "Ideating Good Design Solutions with Eric" },
      { time: "11:30 AM", title: "Prototyping in Figma with Zosh" },
      // ... other events
    ]
  },
  "Day 2": {
    date: "Sunday, February 14th (PST)",
    events: [
      { time: "8:30 AM", title: "Submit Designs" },
      { time: "9:00 AM", title: "Judging Begins" },
      // ... other events
    ]
  },
  // ... add more days if necessary
};

const Schedule = () => {
    return (
      <div className="schedule-container">
        <h1 className='schedule-header'>Geese Hacks 2024 Schedule</h1>
        
        {/* Day 0 - Full Width */}
        {scheduleData["Day 0"] && (
          <div className="day-full-width">
            <h2 className="day-title">{"Day 0"}</h2>
            <h3 className="day-date">{scheduleData["Day 0"].date}</h3>
            <div className="events">
              {scheduleData["Day 0"].events.map((event, index) => (
                <div key={index} className="event">
                  <span className="event-time">{event.time}</span>
                  <span className="event-title">{event.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
  
        {/* Days 1 and 2 - Two Column Layout */}
        <div className="days-container">
          {Object.entries(scheduleData).filter(([day]) => day !== "Day 0").map(([day, details], index) => (
            <div key={index} className="day-column">
              <h2 className="day-title">{day}</h2>
              <h3 className="day-date">{details.date}</h3>
              <div className="events">
                {details.events.map((event, index) => (
                  <div key={index} className="event">
                    <span className="event-time">{event.time}</span>
                    <span className="event-title">{event.title}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default Schedule;
