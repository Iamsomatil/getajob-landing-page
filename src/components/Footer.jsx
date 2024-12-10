function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <img
            src="/images/image (1).svg"
            alt="Getajob.ng"
            className="footer-logo"
          />
          <p>
            Getajobng provides a full online service for anyone looking for a
            new job. We're not a recruitment agency, we're a job site.
          </p>
        </div>

        <div className="footer-links">
          <div className="footer-section">
            <h3>Information</h3>
            <ul>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Terms & Condition</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Job Seekers</h3>
            <ul>
              <li>
                <a href="#">Create Account</a>
              </li>
              <li>
                <a href="#">Job List</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Employers</h3>
            <ul>
              <li>
                <a href="#">Create Account</a>
              </li>
              <li>
                <a href="#">Post a Job</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3>Social Media:</h3>
            <div className="social-links">
              <a href="#" className="social-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2H2v20h20V2H12zm0 12.5c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z"
                    fill="#2B8132"
                  />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5 0-.278-.028-.556-.08-.83A7.72 7.72 0 0 0 23 3z"
                    fill="#2B8132"
                  />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z"
                    fill="#2B8132"
                  />
                </svg>
              </a>
              <a href="#" className="social-link">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2V9z"
                    fill="#2B8132"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
