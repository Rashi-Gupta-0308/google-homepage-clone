import "../App.css"

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-top">
          <p>India</p>
        </div>
        <div className="footer-bottom">
          <ul className="footer-left">
            <li><a href="#about">About</a></li>
            <li><a href="#advertising">Advertising</a></li>
            <li><a href="#business">Business</a></li>
            <li><a href="#howsearchworks">How Search works</a></li>
          </ul>
          <ul className="footer-right">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
            <li><a href="#settings">Settings</a></li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer