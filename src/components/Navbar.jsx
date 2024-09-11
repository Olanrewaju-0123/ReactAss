import "../css/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="./images/Yellow.png" alt="Yellow Card logo" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#">Company</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#" className="">
              Help Center
            </a>
          </li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <a href="#" className="English">
          English
        </a>
        <a href="#" className="Login">
          Login
        </a>
        <a href="#" className="signup">
          Sign Up
        </a>
      </div>
    </div>
  );
};
export default Navbar;
