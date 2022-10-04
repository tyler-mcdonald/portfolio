export const NotFound = () => {
  return (
    <section id="banner">
      <h2>Page Not Found</h2>
      <p>Full Stack Software Developer</p>
      <ul className="actions special">
        <li>
          <a href="/" className="button primary">
            Home
          </a>
        </li>
        {/* <li>
           <a
             href={require("../Tyler McDonald Resume.pdf")}
             className="button"
             download
           >
             Download Resume
           </a>
         </li> */}
      </ul>
    </section>
  );
};
