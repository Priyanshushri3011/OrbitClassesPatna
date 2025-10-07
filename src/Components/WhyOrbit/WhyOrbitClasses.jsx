import React from "react";
import "./WhyOrbitClasses.css";


function WhyOrbitClasses() {
  const features = [
    {
      icon: "📘",
      title: "Best Faculty",
      description:
        "India’s top educators handpicked from premier institutions to give you the edge in every exam.",
    },
    {
      icon: "📊",
      title: "Data-Driven Insights",
      description:
        "Track your growth, accuracy, and speed with smart analytics that guide your next move.",
    },
    {
      icon: "💬",
      title: "Interactive Learning",
      description:
        "Live quizzes, visual notes, and gamified practice designed to keep learning fun, fast, and effective.",
    },
    {
      icon: "🧠",
      title: "Exam-Focused Preparation",
      description:
        "Tailored for CBSE, Sainik School, and JNVST so you study only what matters, nothing extra.",
    },
  ];

  return (
    <div className="whyorbit-section">
      <h2>Why Orbit Classes?</h2>
      <p>
        Discover what makes Orbit Classes the ultimate choice for learners
        across India
      </p>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrapper">
              <span style={{ fontSize: "50px" }}>{feature.icon}</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhyOrbitClasses;
