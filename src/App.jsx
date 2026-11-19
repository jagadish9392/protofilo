import React from 'react';
import './App.css';

/**
 * Jagadish Reddy - React portfolio
 * Change content below to edit the page. Styles are in App.css.
 * Works in Vite during development and in the included offline build.
 * This class component also supports the bundled offline React runtime.
 */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { menuOpen: false, filter: 'all', activeSection: '' };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
    this.changeFilter = this.changeFilter.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
  }

  toggleMenu() { this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen })); }
  closeMenu() { if (this.state.menuOpen) this.setState({ menuOpen: false }); }
  changeFilter(filter) { this.setState({ filter }); }
  handleKeyDown(event) { if (event.key === 'Escape') this.closeMenu(); }
  handleDocumentClick(event) {
    if (this.state.menuOpen && this.header && !this.header.contains(event.target)) this.closeMenu();
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
    document.addEventListener('click', this.handleDocumentClick);
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        const visible = entries.filter(entry => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible && this.state.activeSection !== visible.target.id) {
          this.setState({ activeSection: visible.target.id });
        }
      }, { rootMargin: '-22% 0px -60% 0px', threshold: [0, 0.1, 0.2] });
      document.querySelectorAll('main section[id]').forEach(section => this.observer.observe(section));
    }
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('click', this.handleDocumentClick);
    if (this.observer) this.observer.disconnect();
  }

  render() {
    return (
      <div className="site-shell">
        <a className="skip-link" href="#main">Skip to content</a>

          <header className="site-header" id="top" ref={(element) => { this.header = element; }}>
            <div className="container header-inner">
              <a className="brand" href="#home" aria-label="Jagadish Reddy home">
                <span className="brand-mark">J<span>R</span><i>.</i></span>
                <span className="brand-text">Jagadish <b>Reddy</b></span>
              </a>
              <button className="menu-toggle" type="button" aria-controls="primary-nav" aria-expanded={this.state.menuOpen} aria-label={this.state.menuOpen ? "Close menu" : "Open menu"} onClick={this.toggleMenu}>
                <span></span><span></span><span></span>
              </button>
              <nav id="primary-nav" className={this.state.menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Main navigation">
                <a href="#about" onClick={this.closeMenu} className={this.state.activeSection === "about" ? "is-active" : ""}>About</a>
                <a href="#skills" onClick={this.closeMenu} className={this.state.activeSection === "skills" ? "is-active" : ""}>Skills</a>
                <a href="#projects" onClick={this.closeMenu} className={this.state.activeSection === "projects" ? "is-active" : ""}>Projects</a>
                <a href="#experience" onClick={this.closeMenu} className={this.state.activeSection === "experience" ? "is-active" : ""}>Experience</a>
                <a className="nav-contact" href="#contact" onClick={this.closeMenu}>Contact <span aria-hidden="true">↗</span></a>
              </nav>
            </div>
          </header>

          <main id="main">
            <section className="hero" id="home" aria-labelledby="hero-heading">
              <div className="container hero-grid">
                <div className="hero-content">
                  <span className="eyebrow"><span className="eyebrow-line"></span> HELLO, I'M</span>
                  <h1 id="hero-heading">Jagadish <span className="hero-surname">Reddy<span className="period">.</span></span></h1>
                  <p className="hero-role">Associate Software Engineer</p>
                  <p className="hero-tagline">Thoughtful code. Better digital experiences.</p>
                  <p className="hero-description">I'm a Computer Science graduate who enjoys building clean, responsive web experiences and solving real-world problems with technology.</p>
                  <div className="hero-actions">
                    <a className="button button-primary" href="#projects">View my projects <span aria-hidden="true">↗</span></a>
                    <a className="button button-outline resume-button" href="./assets/Jagadish_Reddy_Resume.pdf" download>Download Resume</a>
                  </div>
                  <div className="hero-meta">
                    <span><span className="meta-dot" aria-hidden="true"></span> Hyderabad, India</span>
                    <span className="meta-separator" aria-hidden="true"></span>
                    <span>Frontend &amp; Web Development</span>
                  </div>
                </div>
                <div className="hero-visual">
                  <div className="visual-orbit orbit-one" aria-hidden="true"></div>
                  <div className="visual-orbit orbit-two" aria-hidden="true"></div>
                  <div className="photo-outline">
                    <div className="portrait"><img src="./assets/jagadish-photo.jpg" alt="Portrait of Jagadish Reddy" width="675" height="875" /></div>
                  </div>
                  <div className="tech-float" aria-label="Web development interests"><span className="tech-float-label">FOCUS AREA</span><strong>React / Web UI</strong></div>
                  <div className="profile-label"><div><b>Jagadish Reddy</b><small>Software Engineer</small></div></div>
                </div>
              </div>
              <div className="container hero-footer"><span>SCROLL TO EXPLORE</span><span aria-hidden="true">↓</span><span>01 / 05</span></div>
            </section>

            <section className="section about-section" id="about" aria-labelledby="about-heading">
              <div className="container about-layout">
                <div>
                  <p className="section-kicker">01 / ABOUT ME</p>
                  <h2 id="about-heading" className="section-heading">Passionate about<br /><em>building better.</em></h2>
                </div>
                <div className="about-text">
                  <p className="about-lead">I'm <strong>Veeramreddy Jagadishreddy</strong>, a Computer Science and Engineering graduate with a strong interest in web development and user-friendly software.</p>
                  <p>My technical background includes HTML, CSS, JavaScript, React, and backend technologies. My customer-support experience at Tech Mahindra helped me develop strong communication, collaboration, and problem-solving skills.</p>
                  <p>As an Associate Software Engineer, I'm focused on improving my development skills and creating thoughtful, useful digital experiences.</p>
                  <div className="quick-facts">
                    <div><strong>2024</strong><span>B.Tech Graduate</span></div>
                    <div><strong>02</strong><span>Featured Projects</span></div>
                    <div><strong>01+</strong><span>Years in Support</span></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section skills-section" id="skills" aria-labelledby="skills-heading">
              <div className="container">
                <div className="section-topline">
                  <div><p className="section-kicker">02 / MY EXPERTISE</p><h2 className="section-heading" id="skills-heading">Technologies I <em>work with.</em></h2></div>
                  <p>Tools and technologies I use to build, learn, and collaborate.</p>
                </div>
                <div className="skills-grid">
                  <article className="skill-card">
                    <span className="skill-number">01</span><span className="skill-icon">&lt;/&gt;</span>
                    <h3>Frontend</h3><p>Interfaces that look good and work smoothly across devices.</p>
                    <div className="tag-row"><span>HTML5</span><span>CSS3</span><span>JavaScript</span><span>React.js</span><span>Bootstrap</span></div>
                  </article>
                  <article className="skill-card">
                    <span className="skill-number">02</span><span className="skill-icon">{"{ }"}</span>
                    <h3>Backend &amp; Realtime</h3><p>Application logic and real-time interactions.</p>
                    <div className="tag-row"><span>Node.js</span><span>Express.js</span><span>WebSocket</span><span>Socket.IO</span></div>
                  </article>
                  <article className="skill-card">
                    <span className="skill-number">03</span><span className="skill-icon">#_</span>
                    <h3>Languages &amp; Data</h3><p>Programming foundations and data handling.</p>
                    <div className="tag-row"><span>JavaScript</span><span>Python</span><span>SQL</span></div>
                  </article>
                  <article className="skill-card">
                    <span className="skill-number">04</span><span className="skill-icon">⌘</span>
                    <h3>Developer Tools</h3><p>Working efficiently, testing, and managing code.</p>
                    <div className="tag-row"><span>Git</span><span>GitHub</span><span>VS Code</span><span>Postman</span><span>Eclipse</span></div>
                  </article>
                </div>
              </div>
            </section>

            <section className="section projects-section" id="projects" aria-labelledby="projects-heading">
              <div className="container">
                <div className="section-topline project-heading-row">
                  <div><p className="section-kicker">03 / SELECTED WORK</p><h2 className="section-heading" id="projects-heading">Projects I've <em>built.</em></h2></div>
                  <div className="project-filters" role="group" aria-label="Filter projects">
                    <button type="button" className={this.state.filter === "all" ? "filter-button active" : "filter-button"} data-filter="all" aria-pressed={this.state.filter === "all"} onClick={() => this.changeFilter("all")}>All projects</button>
                    <button type="button" className={this.state.filter === "frontend" ? "filter-button active" : "filter-button"} data-filter="frontend" aria-pressed={this.state.filter === "frontend"} onClick={() => this.changeFilter("frontend")}>Frontend</button>
                    <button type="button" className={this.state.filter === "realtime" ? "filter-button active" : "filter-button"} data-filter="realtime" aria-pressed={this.state.filter === "realtime"} onClick={() => this.changeFilter("realtime")}>Real-time</button>
                  </div>
                </div>
                <div className="projects-grid">
                  <article className="project-card" data-category="frontend" hidden={this.state.filter !== "all" && this.state.filter !== "frontend"}>
                    <div className="project-art agri-art" aria-label="Mockup illustrating an agriculture product storefront" role="img">
                      <div className="browser-mock">
                        <div className="mock-toolbar"><span className="window-dots"><i></i><i></i><i></i></span><strong>farm<span>fresh</span></strong><span className="mock-search">⌕ Search</span></div>
                        <div className="mock-content"><div className="mock-banner"><span>Fresh harvest.<br /><strong>Better choices.</strong></span><small>Explore products ↗</small></div><div className="product-squares"><div><span>🥕</span><small>Fresh Produce</small></div><div><span>🥦</span><small>Organic Picks</small></div><div><span>🌽</span><small>Local Farms</small></div></div></div>
                      </div>
                    </div>
                    <div className="project-details"><div className="project-label"><span>01 / FRONTEND APP</span><span aria-hidden="true">↗</span></div><h3>E-Marketing on Agriculture Products</h3><p>A responsive agricultural marketplace with reusable React components, dynamic product listings, and simple navigation for customers.</p><div className="project-tags"><span>React.js</span><span>JavaScript</span><span>HTML5</span><span>CSS3</span></div></div>
                  </article>
                  <article className="project-card" data-category="realtime" hidden={this.state.filter !== "all" && this.state.filter !== "realtime"}>
                    <div className="project-art editor-art" aria-label="Mockup illustrating a collaborative text editor" role="img">
                      <div className="browser-mock editor-mock">
                        <div className="mock-toolbar"><span className="window-dots"><i></i><i></i><i></i></span><strong>TeamNotes</strong><span className="mock-online"><i></i> Live</span></div>
                        <div className="editor-window"><div className="editor-sidebar"><span>▤</span><span>☷</span><span>⊞</span></div><div className="editor-document"><span className="doc-label">SHARED DOCUMENT <b>● LIVE</b></span><h4>Ideas grow together.</h4><div className="fake-line long"></div><div className="fake-line medium"></div><div className="fake-line long"></div><div className="fake-line short"></div><p className="mock-cursor">Editing together <span>Jagadish</span></p></div></div>
                      </div>
                    </div>
                    <div className="project-details"><div className="project-label"><span>02 / REAL-TIME APP</span><span aria-hidden="true">↗</span></div><h3>Real-Time Collaborative Text Editor</h3><p>A multi-user text editor with synchronized updates, live cursor tracking, and real-time communication using WebSocket and Socket.IO.</p><div className="project-tags"><span>React.js</span><span>Node.js</span><span>Express.js</span><span>Socket.IO</span></div></div>
                  </article>
                </div>
              </div>
            </section>

            <section className="section background-section" id="experience" aria-labelledby="experience-heading">
              <div className="container">
                <p className="section-kicker">04 / MY JOURNEY</p>
                <h2 className="section-heading" id="experience-heading">Experience &amp; <em>education.</em></h2>
                <div className="journey-grid">
                  <div><h3 className="journey-heading">Work experience</h3>
                    <div className="timeline">
                      <article className="timeline-entry"><span className="timeline-point"></span><p className="timeline-date">CURRENT</p><h4>Associate Software Engineer</h4><p className="timeline-company">Technomold · Hyderabad</p><p>Developing software engineering skills through practical assignments and frontend development.</p></article>
                      <article className="timeline-entry"><span className="timeline-point"></span><p className="timeline-date">SEP 2025 — SEP 2026</p><h4>Trainee Associate Engineer</h4><p className="timeline-company">Tech Mahindra · UPS Support Process</p><p>Handled international customer inquiries, resolved shipment-related issues, documented cases, and coordinated with internal teams.</p></article>
                    </div>
                  </div>
                  <div><h3 className="journey-heading">Education</h3>
                    <div className="education-card"><span className="edu-icon" aria-hidden="true">✺</span><p className="timeline-date">GRADUATED MAY 2024</p><h4>Bachelor of Technology</h4><p className="timeline-company">Computer Science &amp; Engineering</p><p>Lovely Professional University, Punjab</p></div>
                    <h3 className="journey-heading cert-heading">Certifications</h3>
                    <div className="cert-list"><div><span aria-hidden="true">↗</span><p><strong>Website Hacking &amp; Penetration Testing</strong><small>Udemy — Course Completion</small></p></div><div><span aria-hidden="true">↗</span><p><strong>Python Certification</strong><small>HackerRank — 2024</small></p></div></div>
                  </div>
                </div>
              </div>
            </section>

            <section className="section contact-section" id="contact" aria-labelledby="contact-heading">
              <div className="container contact-content">
                <p className="section-kicker">05 / GET IN TOUCH</p>
                <h2 id="contact-heading" className="contact-heading">Let's make something<br /><em>great together.</em></h2>
                <p>Have a project, opportunity, or just want to connect? I'd love to hear from you.</p>
                <a className="button button-primary contact-button" href="mailto:jagadishreddy566@gmail.com?subject=Hello%20Jagadish">Say hello <span aria-hidden="true">↗</span></a>
                <div className="contact-links"><a href="mailto:jagadishreddy566@gmail.com">Email</a><a href="https://www.linkedin.com/in/jagadish-reddy" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://github.com/jagadish9392" target="_blank" rel="noopener noreferrer">GitHub ↗</a><a href="tel:+919390159392">Call me</a></div>
              </div>
            </section>
          </main>
          <footer className="site-footer"><div className="container footer-inner"><span><strong>JR.</strong> Made with React, HTML &amp; CSS.</span><span>© <span id="current-year">{new Date().getFullYear()}</span> Jagadish Reddy</span><a href="#home">Back to top ↑</a></div></footer>
      </div>
    );
  }
}

export default App;
