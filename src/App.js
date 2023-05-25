import React, { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';
import Residental from './Pages/Residental';
import Particle from './component/Particle';
import Commercial from './Pages/commercial';
import Image1 from './Pictures/Logo7.png';
import './App.css';


class App extends Component {
  componentDidMount() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      var script = document.createElement("script");
      script.src = "mobile.js";
      document.head.appendChild(script);
    }
  }
  
  render() {
    return (
      <div className='App'>
        <>  
          <Particle/>  
          <div>
          </div>
        </>
       <Router>
        <div className='logo'>
          <img src={Image1} alt=" "></img>
        </div>
           <div className="App-h">
            <ul className="App-header">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Residental">Residental</Link>
              </li>
              <li>
              <Link to="/commercial">Commercial</Link>  
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              
            </ul>
          </div>
          <div className='Route'>
           <Routes>
                 <Route exact path='/' element={< Home />}>
                 </Route>
                  <Route exact path='/Residental' element={< Residental />}></Route>
                  <Route exact path='/commercial' element={< Commercial />}></Route>
                 <Route exact path='/about' element={< About />}></Route>
                 <Route exact path='/contact' element={< Contact />}></Route>

          </Routes>
          </div>
       </Router>
       </div>
   );
  }
}
  
export default App;