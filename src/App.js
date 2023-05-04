import './App.css';
import './mediaQuery.css'
import { Routes, Route, Link } from 'react-router-dom'
import logo from './images/Logo.png'
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md fixed-top navbar-shrink justify-content-center align-items-center">
        <div className="container-fluid">
          <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand mx-3"><img src={logo} alt="logo" /></Link>
          <div className="collapse navbar-collapse justify-content-center align-items-center" id="mynavbar">
            <div className="navbar-nav justify-content-center align-items-center">
              <Link to="/" className="nav-link">Home</Link>

              <Link to="/AboutPage" className="nav-link">About</Link>

              <Link to="/Menu" className="nav-link">Menu</Link>

              <Link to="/booking" className="nav-link">Reservations</Link>

              <Link to="/OnlineOrder" className="nav-link">Online Order</Link>

              <Link to="/LogInPage" className="nav-link">Log In</Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
       </Routes>
    </div>
  );
}

export default App;
