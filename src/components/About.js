export const About = () => {
  return (
    <div className="is-preload">
      <div id="page-wrapper">
        {/* <!-- Header --> */}
        <header id="header">
          <h1>
            <a href="/">Tyler</a>
          </h1>
          <nav id="nav">
            <ul>
              <li>
                <a
                  href={require("../Tyler McDonald Resume.pdf")}
                  target="_blank"
                  rel="noreferrer"
                >
                  Resume
                </a>
              </li>
              <li>
                <a href="/" className="button">
                  Home
                </a>
              </li>
            </ul>
          </nav>
        </header>

        {/* <!-- Main --> */}
        <section id="main" className="container">
          <header>
            <div className="img-box">
              <img
                className="center-fit"
                src={require("../images/profile.png")}
                alt="tyler mcdonald"
              />
            </div>
            <h2>My Story</h2>
          </header>
          <div className="box">
            <h3>Discovery</h3>
            <p>
              My story in software development began during my first career job
              as an accountant and subsequent role as a Business Director. There
              were many processes in our team that were being done manually. I
              knew there was a lot of room to reduce errors and speed things up.
              After creating tools such as payroll calculation tables, a payroll
              budget tracker, and a database file feed system, I realized that
              creating software is my passion. And maybe the part I loved most
              was seeing my coworkers excited to use what I had built to make
              their jobs easier.
            </p>
            <p>
              In another project, I worked directly with a team of developers to
              bring our company a financial software solution. I helped guide
              them in setting the project requirements, implementing certain
              business logic, designing some of the UX and UI, and alpha
              testing. The pieces were coming together in my mind as to what I
              was truly passionate about. It became clear that I was going to be
              a software developer.
            </p>
            <div className="row">
              <div className="row-6 row-12-mobilep">
                <h3>Training</h3>
                <p>
                  I didn't wait long to make the career switch. After some
                  discussions with friends, family and (most importantly) my
                  wife, I decided to quit my job and study full time to become a
                  software developer. I enrolled in a full stack JavaScript
                  developer bootcamp through Treehouse. I learned how to program
                  with modern technologies like Node, React, Express, SQL, HTML,
                  and CSS. I also studied foundational Computer Science
                  principles like Data Structures and Algorithms. Although I
                  still have a lot to learn, the bootcamp has supercharged me
                  for my first role as a software developer.
                </p>
                <p></p>
              </div>
              <div className="row-6 row-12-mobilep">
                <h3>Horizon</h3>
                <p>
                  I believe that my genuine desire to help people and businesses
                  succeed, my drive for excellence in everything that I do, and
                  my eagerness to learn puts me in a great position to hit the
                  ground running with a dev team.
                </p>
              </div>
            </div>
          </div>
          <nav className="end-nav">
            <a className="button" href="/">
              Home
            </a>
          </nav>
        </section>
      </div>
    </div>
  );
};
