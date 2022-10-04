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
              />
            </div>
            <h2>My Story</h2>
          </header>
          <div className="box">
            <span className="image featured">
              <img src="../images/profile.jpg" alt="" />
            </span>
            <h3>Background</h3>
            <p>
              My story in software development began during my first career job
              as an accountant and subsequent role as a Business Director. There
              were many processes in our team that I noticed were being done
              manually via data entry, manual calculations, etc. I knew there
              was a lot of room for automation to speed things up and reduce
              errors. I began developing various tools with Excel and our
              financial database to automate processes. After creating tools
              such as payroll calculation tables, a position vacancy budget
              tracker, and implementing a database file feed system, I realized
              that creating software was something I was passionate about and
              enjoyed very much. But the best part was seeing my coworkers
              excited to use what I had built to improve their workflow by
              saving them time and reducing some pain points.
            </p>
            <p>
              In my next role within the same company, I had the opportunity to
              work directly with software developers to bring our company a
              custom software solution. I worked directly with the developer
              team to discuss business needs, business logic, and help design
              the UX and UI. I also alpha tested the software and tried my best
              to break everything that they created. I learned a lot through
              this experience, such as how developers go from start to finish on
              delivering work to clients. I also knew that this was something I
              wanted to do as a career. The pieces were coming together to what
              I was truly passionate about. It became clear that I was going to
              be a software developer.
            </p>
            <div className="row">
              <div className="row-6 row-12-mobilep">
                <h3>Bootcamp</h3>
                <p>
                  When I eventually came to this realization, I knew that I
                  didn't want to wait around forever to make the move. After
                  some discussions with friends, family and (most importantly)
                  my wife, I decided to quit my job and study full time to
                  become a software developer. I took the risk because life is
                  too short to waste time waiting for an opportunity to come my
                  way. I chose instead to create the opportunity.
                </p>
                <p>
                  So I signed up for a full stack JavaScript developer bootcamp
                  through Treehouse. I learned many things in JavaScript from
                  foundational programming/CS principles such as OOP, Data
                  Structures, and Algorithms, to various modern technologies
                  like Node, React, Express, SQL, and design tech like HTML and
                  CSS. I feel confident that the bootcamp has set me up for
                  success in a career as a software developer.
                </p>
              </div>
              <div className="row-6 row-12-mobilep">
                <h3>Continued Journey</h3>
                <p>
                  I am continuing to learn and expand my skills. Through
                  developing several projects (which you can view on the home
                  page) with both front and backend technologies, I am happy
                  that I chose full stack. But I am heading in the direction of
                  more backend development. I'm continuing to expand my
                  knowledge of JavaScript/Node and learning Java to expand my
                  languages.
                </p>
                <p>
                  I believe that because of my drive for excellence in
                  everything that I do, my eagerness to learn, and my genuine
                  desire to help people and businesses succeed puts me in a
                  great position to hit the ground running within many dev
                  teams.
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
