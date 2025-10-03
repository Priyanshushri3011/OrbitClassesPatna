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

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Navbar/>
   <Welcome/>
   <Directordesk/>
   <Mddesk/>
   <VideoGallery/>
   <CourseSection/>
   
   </>
  )
}

export default App
