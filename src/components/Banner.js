export const Banner = () => {
  return (
    <section id="banner">
      <h2>Tyler McDonald</h2>
      <p>Full Stack Software Developer</p>
      <ul className="actions special">
        <li>
          <a href="/about" className="button primary">
            My Story
          </a>
        </li>
        <li>
          <a
            href={require("../Tyler McDonald Resume.pdf")}
            className="button"
            download
          >
            Download Resume
          </a>
        </li>
      </ul>
    </section>
  );
};
