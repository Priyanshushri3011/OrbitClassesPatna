import './Navbar.css';
import logo from "../../assets/logo.png"
import { FaYoutube } from "react-icons/fa";
function Navbar() {
    return (
        <>
            <div className="main">
                <div className="logo">
                    <img className='logoimg' src={logo} alt="logo" />

                </div>
                <div className="Allbuttons">
                    <button>Home</button>
                    <button>Director's Desk</button>
                    <button>AboutUs</button>
                    <button>Courses</button>
                    <button>Events</button>

                </div>
                <div className="socialmedia">
                    <a
                        href="https://www.youtube.com/@Orbitclassespatna"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaYoutube size={60} color="red" />
                    </a>


                </div>

            </div>
        </>
    )
}
export default Navbar;


