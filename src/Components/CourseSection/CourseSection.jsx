import React from "react";
import "./CourseSection.css";

function CourseSection() {
  const courses = [
    { id: 1, name: "11th & 12th" },
    { id: 2, name: "11th Foundation" },
    { id: 3, name: "JEE-Main" },
    { id: 4, name: "NEET" },
  ];

  return (
    <div className="courses-section">
      <h2>Our Courses</h2>
      <div className="courses-container">
        {courses.map((course) => (
          <div key={course.id} className="course-card">
            <h3>{course.name}</h3>
            <button className="explore-btn">Explore</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CourseSection;
