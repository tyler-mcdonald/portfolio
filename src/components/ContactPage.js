import { Header } from "./Header";

export const ContactPage = () => {
  return (
    <>
      <body className="is-preload">
        <div id="page-wrapper">
          {/* <Header /> */}
          <header id="header">
            <h1>
              <a href="/">Tyler McDonald</a>
            </h1>
            <nav id="nav">
              <ul>
                <li>
                  <a href="/about">My Story</a>
                </li>
                <li>
                  <a href="/" class="button">
                    Home
                  </a>
                </li>
              </ul>
            </nav>
          </header>
          <section id="main" className="container medium">
            <header>
              <h2>Let's Connect</h2>
            </header>
            <div className="box">
              <form method="post" action="#">
                <div className="row gtr-50 gtr-uniform">
                  <div className="col-6 col-12-mobilep">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value=""
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-6 col-12-mobilep">
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value=""
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-12">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value=""
                      placeholder="Subject"
                    />
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Enter your message"
                      rows="6"
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <ul className="actions special">
                      <li>
                        <input type="submit" value="Send Message" />
                      </li>
                    </ul>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      </body>
    </>
  );
};
