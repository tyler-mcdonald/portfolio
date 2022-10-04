export const Projects = () => {
  return (
    <>
      <div className="section-header">
        <h1>Projects</h1>
      </div>
      <div className="row">
        {/* myCourses */}
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <span className="image featured">
              <a
                href="https://course-database-client.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={require("../images/projects/mycourses.png")} alt="" />
              </a>
            </span>
            <h3>myCourses</h3>
            <p>
              A full stack app for school administrators create an account and
              log in view, create, update, and delete courses.
            </p>
            <ul className="actions special">
              <li>
                <a
                  href="https://course-database-client.herokuapp.com/"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tyler-mcdonald/mycourses"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Library Database */}
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <span className="image featured">
              <img src={require("../images/projects/library.png")} alt="" />
            </span>
            <h3>Library Database Manager</h3>
            <p>
              A database management application for maintaining and searching
              items in a database.
            </p>
            <ul className="actions special">
              <li>
                <a
                  href="https://github.com/tyler-mcdonald/library-database-manager"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>

      <div className="row">
        {/* Photo gallery */}
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <span className="image featured">
              <img src={require("../images/projects/gallery.png")} alt="" />
            </span>
            <h3>Photo Gallery</h3>
            <p>A photo searching app using the Flickr API.</p>
            <ul className="actions special">
              <li>
                <a
                  href="https://github.com/tyler-mcdonald/gallery-app"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Employee Directory */}
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <span className="image featured">
              <a
                href="https://tyler-mcdonald.github.io/employee-directory/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../images/projects/employee_directory.png")}
                  alt=""
                />
              </a>
            </span>
            <h3>Employee Directory</h3>
            <p>View employee information with modals.</p>
            <ul className="actions special">
              <li>
                <a
                  href="https://tyler-mcdonald.github.io/employee-directory/"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tyler-mcdonald/employee-directory"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="row">
        {/* Phrase hunter */}
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <span className="image featured">
              <a
                href="https://tyler-mcdonald.github.io/phrase-hunter/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../images/projects/phrase_hunter.png")}
                  alt=""
                />
              </a>
            </span>
            <h3>Phrase Hunter</h3>
            <p>
              A phrase guessing game. Player has five attemps to guess the
              correct phrase.
            </p>
            <ul className="actions special">
              <li>
                <a
                  href="https://tyler-mcdonald.github.io/phrase-hunter/"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tyler-mcdonald/phrase-hunter"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Registration Form */}
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <span className="image featured">
              <a
                href="https://tyler-mcdonald.github.io/conf-registration-form/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../images/projects/registration_form.png")}
                  alt=""
                />
              </a>
            </span>
            <h3>Registration Form</h3>
            <p>An interactive and accessible form for a conference.</p>
            <ul className="actions special">
              <li>
                <a
                  href="https://tyler-mcdonald.github.io/conf-registration-form/"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tyler-mcdonald/conf-registration-form"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
      <div className="row">
        {/* Student Roster */}
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <span className="image featured">
              <a
                href="https://tyler-mcdonald.github.io/student-roster/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../images/projects/student_roster.png")}
                  alt=""
                />
              </a>
            </span>
            <h3>Student Roster</h3>
            <p>
              A student data viewer with data pagination and client-side search
              filtering.
            </p>
            <ul className="actions special">
              <li>
                <a
                  href="https://tyler-mcdonald.github.io/student-roster/"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tyler-mcdonald/student-roster"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Random Quote Generator */}
        <div className="col-6 col-12-narrower">
          <section className="box special">
            <span className="image featured">
              <a
                href="https://tyler-mcdonald.github.io/random-quote-generator/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={require("../images/projects/random_quote.png")}
                  alt=""
                />
              </a>
            </span>
            <h3>Random Quote Generator</h3>
            <p>Generate a random quote periodically or after each click.</p>
            <ul className="actions special">
              <li>
                <a
                  href="https://tyler-mcdonald.github.io/random-quote-generator/"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/tyler-mcdonald/random-quote-generator"
                  className="button alt"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};
