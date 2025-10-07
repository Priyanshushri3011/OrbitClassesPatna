import React from "react";
import "./StudentFeedback.css";

// Import student images
import student1 from "./images/student1.jpg";
// import student2 from "./images/student2.jpg";
// import student3 from "./images/student3.jpg";
// import student4 from "./images/student4.jpg";

function StudentFeedback() {
  const feedbacks = [
    {
      name: "Riya Sharma",
      comment:
        "Orbit Classes helped me build strong concepts for NEET. The teachers are so supportive and motivating!",
      rating: 5,
      img: student1,
    },
    {
      name: "Aditya Kumar",
      comment:
        "Best institute for JEE preparation! The test series and personal guidance really boosted my confidence.",
      rating: 4,
      img: student1,
    },
    {
      name: "Sneha Gupta",
      comment:
        "Loved the interactive sessions and doubt-solving approach. Learning became fun and effective.",
      rating: 5,
      img: student1,
    },
    {
      name: "Rohit Verma",
      comment:
        "Data-driven insights and weekly tests really helped me improve step-by-step. Highly recommended!",
      rating: 4,
      img: student1,
    },
  ];

  return (
    <div className="feedback-section">
      <h2>What Our Students Say</h2>
      <p>Real experiences from learners who trusted Orbit Classes</p>

      <div className="feedback-grid">
        {feedbacks.map((fb, index) => (
          <div className="feedback-card" key={index}>
            <div className="feedback-image">
              <img src={fb.img} alt={fb.name} />
            </div>
            <div className="feedback-stars">{"⭐".repeat(fb.rating)}</div>
            <p className="feedback-comment">"{fb.comment}"</p>
            <h4 className="feedback-name">- {fb.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentFeedback;
