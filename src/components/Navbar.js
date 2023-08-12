import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__heading">Estaery</h1>
      <ul className="navbar__list list">
        <li className="navbar__list-el">
          <a href="#">Rent</a>
        </li>
        <li className="navbar__list-el">
          <a href="#">Buy</a>
        </li>
        <li className="navbar__list-el">
          <a href="#">Sell</a>
        </li>
        <li className="navbar__list-el">
          <a href="#">Manage Property</a>
        </li>
        <li className="navbar__list-el">
          <a href="#">Resources</a>
        </li>
      </ul>
      <div className="navbar__action-btn">
        <button className="login--button">Login</button>
        <button className="signup--button">Signup</button>
      </div>
    </nav>
  );
}
