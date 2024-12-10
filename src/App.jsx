import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Nav />
      <header className="hero">
        <div className="hero-content">
          <h1>
            Find a <span className="highlight">job</span> easily
          </h1>
          <p className="hero-description">
            With verified, up-to-date job listings directly from employer
            websites, we create a premium experience for job seekers, employers,
            and data seekers alike.
          </p>
          <div className="search-bar">
            <div className="search-input">
              <input
                type="text"
                placeholder="Enter keywords, skill, interest"
              />
            </div>
            <div className="location-input">
              <input type="text" placeholder="Location" />
            </div>
            <button className="search-button">
              <svg
                className="search-icon"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="trusted-by">
            <p>Trusted by:</p>
            <div className="partner-logos">
              <img src="/images/paystack-removebg-preview.svg" alt="Paystack" />
              <img src="/images/google-removebg-preview.svg" alt="Google" />
              <img src="/images/kpmg-removebg-preview.svg" alt="KPMG" />
            </div>
          </div>
        </div>
        <div className="hero-image">
          <img src="/images/hero-image.svg" alt="Professional at work" />
        </div>
      </header>

      <section className="recommended-jobs">
        <div className="section-header">
          <h2>Recommended Jobs</h2>
          <a href="#" className="view-all">
            View all jobs
          </a>
        </div>
        <div className="job-cards-container">
          <div className="job-cards">
            <div className="job-card">
              <span className="job-type">Full time</span>
              <img
                src="/images/Paystack-image-2.png"
                alt="Paystack"
                className="company-logo"
              />
              <h3 className="job-title">QA Engineer</h3>
              <p className="company-name">Paystack</p>
              <div className="job-location">
                <span>Lagos, Nigeria</span>
              </div>
              <button className="apply-btn">Apply now</button>
            </div>

            <div className="job-card">
              <span className="job-type">Part time</span>
              <img
                src="/images/google-image.png"
                alt="Google"
                className="company-logo"
              />
              <h3 className="job-title">Product Analyst</h3>
              <p className="company-name">Google</p>
              <div className="job-location">
                <span>Lagos, Nigeria</span>
              </div>
              <button className="apply-btn">Apply now</button>
            </div>

            <div className="job-card">
              <span className="job-type">Full time</span>
              <img
                src="/images/HR-manager.png"
                alt="Flutterwave"
                className="company-logo"
              />
              <h3 className="job-title">HR Manager</h3>
              <p className="company-name">Flutterwave</p>
              <div className="job-location">
                <span>Lagos, Nigeria</span>
              </div>
              <button className="apply-btn">Apply now</button>
            </div>

            <div className="job-card">
              <span className="job-type">Full time</span>
              <img
                src="/images/access-image.png"
                alt="Access"
                className="company-logo"
              />
              <h3 className="job-title">QA Engineer</h3>
              <p className="company-name">Paystack</p>
              <div className="job-location">
                <span>Lagos, Nigeria</span>
              </div>
              <button className="apply-btn">Apply now</button>
            </div>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <div className="testimonials">
          <div className="testimonial-item">
            <img
              src="/images/product-analyst.png"
              alt="Product Analyst"
              className="testimonial-image"
            />
            <p className="testimonial-role">
              Product Analyst <span className="company">@ Paystack</span>
            </p>
          </div>

          <div className="testimonial-item featured">
            <img
              src="/images/hr.png"
              alt="HR Manager"
              className="testimonial-image"
            />
            <p className="testimonial-role">
              HR Manager <span className="company">@ Paystack</span>
            </p>
          </div>

          <div className="testimonial-item">
            <img
              src="/images/trader.png"
              alt="Securities Trader"
              className="testimonial-image"
            />
            <p className="testimonial-role">
              Securities Trader <span className="company">@ McKinnesy</span>
            </p>
          </div>
        </div>

        <div className="features">
          <h2>How it works</h2>
          <p className="features-intro">
            Getajob helps you find the right job easily. Getajob helps you find
            the right job easily. Getajob helps you find the right job easily.
          </p>

          <div className="feature-list">
            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#2B8132"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="feature-content">
                <h3>Search Jobs</h3>
                <p>
                  We have jobs in the most popular industries and with top
                  companies. Plus, you can create alerts so you never miss a job
                  opportunity.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#2B8132"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="feature-content">
                <h3>Create a Profile and Get Noticed</h3>
                <p>
                  Create a profile to showcase your skills and experience so
                  recruiters can find you. Upload your CV so you can apply for
                  jobs quickly and easily.
                </p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20 6L9 17L4 12"
                    stroke="#2B8132"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="feature-content">
                <h3>Apply for jobs</h3>
                <p>
                  Find the training you need to improve your skills, or visit
                  our Career Center for tips and advice to build your career.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-categories">
        <h2>Popular Categories</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-icon oil-gas">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="/images/Oil and Gas icon.svg"
              >
                <path
                  d="M20 16V8M4 8v8M12 12v4M8 10v6M16 10v6"
                  stroke="#2B8132"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Oil and Gas</h3>
            <p>(20 new jobs)</p>
          </div>

          <div className="category-card">
            <div className="category-icon healthcare">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4v16m8-8H4"
                  stroke="#2B8132"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Healthcare</h3>
            <p>(10 new jobs)</p>
          </div>

          <div className="category-card">
            <div className="category-icon education">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h10"
                  stroke="#2B8132"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Education</h3>
            <p>(10 new jobs)</p>
          </div>

          <div className="category-card">
            <div className="category-icon accounting">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z"
                  stroke="#2B8132"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3>Accounting</h3>
            <p>(10 new jobs)</p>
          </div>

          <div className="category-card">
            <div className="category-icon design">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4Z"
                  stroke="#2B8132"
                  strokeWidth="2"
                />
                <path
                  d="M15 9L9 15M9 9L15 15"
                  stroke="#2B8132"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Design, Art and Multimedia</h3>
            <p>(20 new jobs)</p>
          </div>

          <div className="category-card">
            <div className="category-icon technology">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16v12H4V6zm0 4h16M8 14h8"
                  stroke="#2B8132"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Technology</h3>
            <p>(10 new jobs)</p>
          </div>

          <div className="category-card">
            <div className="category-icon security">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 3L4 7v6c0 5.55 3.84 10.74 8 12 4.16-1.26 8-6.45 8-12V7l-8-4z"
                  stroke="#2B8132"
                  strokeWidth="2"
                />
                <path
                  d="M9 12l2 2 4-4"
                  stroke="#2B8132"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h3>Security</h3>
            <p>(10 new jobs)</p>
          </div>

          <div className="category-card">
            <div className="category-icon data">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4h16v4H4V4zm0 6h16v4H4v-4zm0 6h16v4H4v-4z"
                  stroke="#2B8132"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <h3>Data Analyst</h3>
            <p>(10 new jobs)</p>
          </div>
        </div>
      </section>

      <section className="network-companies">
        <div className="network-content">
          <h2>Over 1000+ jobs from top companies in our network</h2>
          <p>
            Every day we index millions of jobs directly from employer websites.
            We're committed to accurate, high-quality jobs so you won't find
            old, duplicated, or spammy listings here.
          </p>
          <p>
            Organize and automate your job search while at home or on the go.
            We'll deliver new, relevant jobs of interest straight to your inbox.
          </p>
          <a href="#" className="learn-more">
            Learn More
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.16666 10H15.8333M15.8333 10L10 4.16669M15.8333 10L10 15.8334"
                stroke="#2B8132"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <div className="company-logos">
          <div className="logo-item uber">
            <img src="/images/Uber.png" alt="Uber" />
          </div>
          <div className="logo-item google">
            <img src="/images/Google.png" alt="Google" />
          </div>
          <div className="logo-item zapier">
            <img src="/images/Zapier.png" alt="Zapier" />
          </div>
          <div className="logo-item airtel">
            <img src="/images/Airtel.png" alt="Airtel" />
          </div>
          <div className="logo-item accenture">
            <img src="/images/Accenture.png" alt="Accenture" />
          </div>
          <div className="logo-item mckinsey">
            <img src="/images/Mckinsey.png" alt="McKinsey" />
          </div>
          <div className="logo-item mobile">
            <img src="/images/9mobile.png" alt="9mobile" />
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <h2>What are our customers saying</h2>

        <div className="testimonials-slider">
          <div className="testimonial-slide">
            <div className="testimonial-card">
              <div className="testimonial-image">
                <img src="/images/Rectangle 9.1.png" alt="Testimonial" />
              </div>
              <div className="testimonial-content">
                <div className="quote-mark">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 24L20 16H16C16 11.6 19.6 8 24 8V4C17.4 4 12 9.4 12 16V24ZM28 24L36 16H32C32 11.6 35.6 8 40 8V4C33.4 4 28 9.4 28 16V24Z"
                      fill="#E7F6E9"
                    />
                  </svg>
                </div>
                <p className="testimonial-text">
                  The platform is really convenient to reach out to companies &
                  I have managed to secure 2 interviews already! I can also
                  track my application status instead of wondering whether the
                  company has seen or shortlisted me
                </p>
                <div className="testimonial-author">
                  <h3>Irma Black</h3>
                  <p>HR Manager at MasterCard</p>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <button className="prev-btn" aria-label="Previous testimonial">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#4F4F4F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="next-btn" aria-label="Next testimonial">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#2B8132"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="final-cta">
        <div className="cta-content">
          <h2>Get a Job you actually like</h2>
          <p>Create an account and start applying</p>
          <button className="get-started-btn">Get started</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
