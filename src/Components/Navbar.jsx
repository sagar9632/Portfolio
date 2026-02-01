import "../Assets/style.css";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <a className="main-logo" href="#hero"><h1 className="logo">Sagar</h1></a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
    <div className="emptydiv">

    </div>
   </>
  );
}
