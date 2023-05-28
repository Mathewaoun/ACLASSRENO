import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/home';
import About from './Pages/about';
import Contact from './Pages/contact';
import Residental from './Pages/Residental';
import Particle from './component/Particle';
import Commercial from './Pages/commercial';
import Image1 from './Pictures/test.png';
import './App.css';
import './mobile.css';

class App extends Component {
  render() {
    const isMobile = window.innerWidth < 768; // Check if the user is on a mobile device

    const computerNavOrder = [
      { path: '/', name: 'Home' },
      { path: '/Residental', name: 'Residental' },
      { path: '/commercial', name: 'Commercial' },
      { path: '/about', name: 'About Us' },
      { path: '/contact', name: 'Contact Us' }
    ];

    const mobileNavOrder = [
      { path: '/', name: 'Home' },
      { path: '/about', name: 'About Us' },
      { path: '/Residental', name: 'Residental' },
      { path: '/contact', name: 'Contact Us' },
      { path: '/commercial', name: 'Commercial' }
    ];

    const navItems = isMobile ? mobileNavOrder : computerNavOrder; // Choose the appropriate navigation order

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
              {navItems.map(item => (
                <li key={item.path}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className='Route'>
            <Routes>
              <Route exact path='/' element={<Home />}></Route>
              <Route exact path='/Residental' element={<Residental />}></Route>
              <Route exact path='/commercial' element={<Commercial />}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/contact' element={<Contact />}></Route>
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
