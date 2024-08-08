function Navbar() {
  return (
    <>
      <header className="hide">
        <nav>
          <img className="logo" src="/images/logo.png" alt="logos" />
          <ul>
            <li>
              <a href="#">History</a>
            </li>
            <li>
              <a href="#">Weapons</a>
            </li>
            <li>
              <a href="#">Clans</a>
            </li>
            <li>
              <a href="#">Timeline</a>
            </li>
            <li className="hamburger">
              <a href="#">
                <div className="bar"></div>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
