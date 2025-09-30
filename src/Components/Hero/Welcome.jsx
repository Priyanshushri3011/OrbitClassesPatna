import welcomevdo from "../../assets/welcomevdo.mp4";
import './Welcome.css';

function Welcome() {
  return (
    <>
      <div className="wlcmain">
        <video
          className="wlcmvdo"
          src={welcomevdo}
          autoPlay
          muted
          loop
          controls
          width="100%"
        />
      </div>
    </>
  );
}

export default Welcome;
