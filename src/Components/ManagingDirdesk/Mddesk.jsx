import ManagingDir from "../../assets/ManagingDir.png"
import './Mddesk.css';
function Mddesk() {
    return (
        <>
            <div className="Mdmain">
                <div className="Mdmsg">
                    <h3>Managing-Director Desk</h3>
                    <p>It gives me immense pleasure to share that with over 5+ years of experience in the field of education, I have witnessed how the right guidance can shape a student’s future. At ORBITCLASSES, our mission is not just to teach, but to inspire, mentor, and empower every learner to unlock their true potential.

                        We are committed to providing a nurturing environment, expert faculty, and result-driven strategies for 11th, 12th, IIT-JEE, and NEET aspirants. With dedication, discipline, and determination, success becomes not just a dream, but a reality.

                        I invite you to be a part of this journey and achieve your academic and career goals with confidence.</p>

                       <p> – Shri. Adarsh Srivastava, Director</p>
                       

                </div>
                <div className="Mdimg">
                    <img src={ManagingDir} alt="" />

                </div>
            </div>
        </>
    )
}
export default Mddesk;