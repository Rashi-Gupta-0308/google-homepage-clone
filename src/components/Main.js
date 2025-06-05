import "../App.css"

function Main() {
  return (
    <main className="main">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt="Google"
          className="logo"
        />

        <form className="search-form" onSubmit={(e) => e.preventDefault()}>
          <div className="search-box">
            <svg
              className="search-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input
              type="text"
              className="search-input"
              aria-label="Search"
              autoComplete="off"
            />
            <svg
              className="mic-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="24"
              width="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="gray"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 1v11"></path>
              <circle cx="12" cy="17" r="4"></circle>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="23"></line>
            </svg>
          </div>
          <div className="buttons">
            <button type="submit" className="btn btn-primary">Google Search</button>
            <button type="button" className="btn btn-secondary">I'm Feeling Lucky</button>
          </div>
        </form>
      </main>
  )
}

export default Main