import './navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar__heading">Estaery</h1>
      <ul className="navbar__list list">
        <li className="navbar__list-el">Rent</li>
        <li className="navbar__list-el">Buy</li>
        <li className="navbar__list-el">Sell</li>
        <li className="navbar__list-el">Manage Property</li>
        <li className="navbar__list-el">Resources</li>
      </ul>
      <div className="navbar__action-btn">
        <button className="login--button">Login</button>
        <button className="signup--button">Signup</button>
      </div>
    </nav>
  );
}
