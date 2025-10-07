// import './Navbar.css';
// import logo from "../../assets/logo.png"
// import { FaYoutube } from "react-icons/fa";
// function Navbar() {
//     return (
//         <>
//             <div className="main">
//                 <div className="logo">
//                     <img className='logoimg' src={logo} alt="logo" />

//                 </div>
//                 <div className="Allbuttons">
//                     <button>Home</button>
//                     <button>Director's Desk</button>
//                     <button>AboutUs</button>
//                     <button>Courses</button>
//                     <button>Events</button>

//                 </div>
//                 <div className="socialmedia">
//                     <a
//                         href="https://www.youtube.com/@Orbitclassespatna"
//                         target="_blank"
//                         rel="noopener noreferrer"
//                     >
//                         <FaYoutube size={60} color="red" />
//                     </a>


//                 </div>

//             </div>
//         </>
//     )
// }
// export default Navbar;

import React, { useState } from "react";
import './Navbar.css';
import logo from "../../assets/logo.png";
import { FaYoutube } from "react-icons/fa";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="main">
            <div className="logo">
                <img className='logoimg' src={logo} alt="logo" />
            </div>

            {/* Right side: Hamburger + YouTube */}
            <div className="rightside">
                <div
                    className={`hamburger ${menuOpen ? "active" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <div className="socialmedia mobile-icon">
                    <a
                        href="https://www.youtube.com/@Orbitclassespatna"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube size={40} color="red" />
                    </a>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className={`Allbuttons ${menuOpen ? "active" : ""}`}>
                <button>Home</button>
                <button>Director's Desk</button>
                <button>Managing Dir. Desk</button>
                <button>AboutUs</button>
                <button>Courses</button>
                <button>Events</button>

            </div>

            {/* Social Media Desktop */}
            <div className="socialmedia desktop-icon">
                <a
                    href="https://www.youtube.com/@Orbitclassespatna"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FaYoutube size={60} color="red" />
                </a>
            </div>
        </div>
    );
}

export default Navbar;
