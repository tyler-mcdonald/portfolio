export const Header = () => {
  return (
    <header id="header" className="alt">
      <h1>
        <a href="/">Tyler</a>
      </h1>
      <nav id="nav">
        <ul>
          <li>
            <a href={require("../Tyler McDonald Resume.pdf")} target="_blank">
              Resume
            </a>
          </li>
          <li>
            <a href="/about" className="button">
              My Story
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
