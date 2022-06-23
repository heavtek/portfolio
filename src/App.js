import Landing from "./components/landingpage/Landing";
import {Routes,Route} from 'react-router-dom';
import About from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import bgimg from './assets/images/bgimg.png'
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
const App =()=>{
  
  return <div className="app-bg" style={{
    backgroundImage:`url(${bgimg})`,
    height:'100vh',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat'
  }}>
  <Navbar/>
     <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/portfolio" element={<Portfolio/>} />
     </Routes>
    </div>
}

export default App;