import { Routes, Route, Link } from 'react-router-dom'
import logo from './images/Logo.png'
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MenuPage from './pages/MenuPage';
import ReservationPage from './pages/ReservationPage';
import ConfirmedBooking from './ReservationPageComponents/ConfirmedBooking'
import OnlineOrderPage from './pages/OnlineOrderPage'
import LogInPage from './pages/LogInPage';
import './mediaQuery.css'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-md fixed-top navbar-shrink justify-content-center align-items-center">
        <div className="container-fluid">
          <button className="navbar-toggler mx-3" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to="/" className="navbar-brand mx-3 my-0 px-0"><img src={logo} alt="logo" /></Link>
          <div className="collapse navbar-collapse justify-content-end align-items-center" id="mynavbar">
            <div className="navbar-nav justify-content-end align-items-center" >
              <Link to="/" className="nav-link">Home</Link>

              <Link to="/AboutPage" className="nav-link">About</Link>

             {/*<Link to="/Menu" className="nav-link">Menu</Link>*/}

              <Link to="/ReservationPage" className="nav-link">Reservations</Link>

              <Link to="/OnlineOrderPage" className="nav-link">Online Order</Link>

              <Link to="/LogInPage" className="nav-link">Log In</Link>
            </div>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/AboutPage" element={<AboutPage />} />
       {/*<Route path="/Menu" element={<MenuPage />} /> */}
        <Route path="/ReservationPage" element={<ReservationPage />}></Route>
        <Route path="/ReservationPage/confirmation" element={<ConfirmedBooking />} />
        <Route path="/OnlineOrderPage" element={<OnlineOrderPage />} />
        <Route path="/LogInPage" element={<LogInPage />} />
       </Routes>
    </div>
  );
}

export default App;
