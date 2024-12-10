function Nav() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/images/getajob-logo.png" alt="GetAJob Logo" className="logo-image" />
      </div>
      <div className="nav-links">
        <a href="#companies">Companies</a>
        <a href="#candidates">Candidates</a>
        <a href="#assessment">Assessment</a>
        <a href="#post-job">Post a Job</a>
        <a href="#career-advice">Career Advice</a>
      </div>
      <div className="auth-buttons">
        <button className="sign-up">Sign Up</button>
        <button className="log-in">Log In</button>
      </div>
    </nav>
  )
}

export default Nav
