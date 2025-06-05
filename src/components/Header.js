import "../App.css";

function Header() {
  return (
    <header className="header">
        <nav className="nav">
          <ul className="nav-left">
            <li><a href="#gmail">Gmail</a></li>
            <li><a href="#images">Images</a></li>
          </ul>
          <ul className="nav-right">
            <li><button className="btn">Sign in</button></li>
          </ul>
        </nav>
      </header>
  )
}

export default Header