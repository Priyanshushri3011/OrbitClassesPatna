import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Us</h2>

        <p>
          At Orbit Classes, we believe that success begins with strong guidance and the right preparation.
          We specialize in coaching for <strong>Class 11th & 12th (Science)</strong> along with focused programs for
          <strong> NEET, JEE, and NDA</strong> aspirants.
        </p>

        <p>
          Our team of experienced and dedicated faculty ensures every student understands concepts deeply, 
          not just memorizes them. We conduct special doubt-clearing sessions and exclusive support batches 
          for weak students, ensuring that no one is left behind.
        </p>

        <p>
          At Orbit, learning is more than just study — it’s about building confidence, mastering concepts, 
          and achieving dreams.
        </p>

        <p className="rocket">🚀 Join Orbit Classes – where excellence meets dedication!</p>

        <button className="view-btn">View More</button>
      </div>
    </section>
  );
}

export default AboutUs;
