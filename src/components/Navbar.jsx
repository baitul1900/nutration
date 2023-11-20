import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img src="/src/assets/img/logo.png" className="img-fluid logo" alt="logo"/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="container">
            <ul className="navbar-nav d-lfex justify-content-end">
              <li className="nav-item nav-link">
              <NavLink to={'/'} className={({isActive})=>isActive ? 'active-item' : 'inactive'}>Home</NavLink>
              </li>
              <li className="nav-item nav-link">
                  <NavLink to={'/ourDeatils'} className={({isActive})=>isActive ? 'active-item' : 'inactive'}>About Us</NavLink>
              </li>
              <li className="nav-item nav-link">
                  <NavLink to={'/blog'} className={({isActive})=>isActive ? 'active-item' : 'inactive'}>Blog</NavLink>
              </li>
              {/* <li className="nav-item nav-link">
                  <NavLink to={'/activity'} className={({isActive})=>isActive ? 'active-item' : 'inactive'}>Activities</NavLink>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
