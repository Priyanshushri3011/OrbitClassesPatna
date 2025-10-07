// import welcomevdo from "../../assets/welcomevdo.mp4";
// import './Welcome.css';

// function Welcome() {
//   return (
//     <>
//       <div className="wlcmain">
//         <video
//           className="wlcmvdo"
//           src={welcomevdo}
//           autoPlay
//           muted
//           loop
//           controls
//           width="100%"
//         />
//       </div>
//     </>
//   );
// }

// export default Welcome;


import React from "react";
import "./Welcome.css";
import Welcomeimg from "../../assets/Welcomeimg.jpg"; // your background image

function WelcomeSection() {
  return (
    <section
      className="welcome-section"
      style={{ Welcomeimg: `url(${Welcomeimg})` }}
    >
      <div className="overlay">
        <div className="welcome-content">
          <h1>Welcome to Orbit Classes</h1>
          <p>
            Unlock your potential, achieve your dreams, and soar to success
            with expert guidance, personalized mentorship, and innovative
            learning solutions. At Orbit Classes, your future is our mission!
          </p>
          <button className="welcome-btn">Explore Courses</button>
        </div>
      </div>
    </section>
  );
}

export default WelcomeSection;


