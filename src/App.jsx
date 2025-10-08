import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Welcome from './Components/Hero/Welcome'
import Directordesk from './Components/Directordesk/Directordesk'
import Mddesk from './Components/ManagingDirdesk/Mddesk'
import VideoGallery from './Components/VideoGallery/VideoGallery'
import CourseSection from './Components/CourseSection/CourseSection'
import WhyOrbitClasses from './Components/WhyOrbit/WhyOrbitClasses'
import StudentFeedback from './Components/StudentFeedback/StudentFeedback'
import ContactUs from './Components/Contactus/Contactus'
import Footer from './Components/Footer/Footer'
import AboutUs from './Components/Aboutus/Aboutus'


function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Welcome/>
   <AboutUs/>
   {/* <Directordesk/> */}
   {/* <Mddesk/> */}
   <VideoGallery/>
   <WhyOrbitClasses/>
   <StudentFeedback/>
   <CourseSection/>
   {/* <EventSection/> */}
   <ContactUs/>
   <Footer/>
   
   </>
  )
}

export default App
