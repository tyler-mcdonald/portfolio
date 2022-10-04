export const TechTable = () => {
  return (
    <>
      <div className="section-header">
        <h1>Tech</h1>
      </div>

      <section className="box special features">
        <div className="features-row">
          <section>
            <span className="icon solid major fa-bolt accent2"></span>
            <h3>Backend</h3>
            <p>
              I love backend engineering and business logic.
              <br />
              Node | Express | SQL | NoSQL | Java
            </p>
          </section>
          <section>
            <span className="icon solid major fa-chart-area accent3"></span>
            <h3>Frontend</h3>
            <p>
              Creating beautiful software is an art.
              <br />
              React | JavaScript | Bootstrap | HTML | CSS
            </p>
          </section>
        </div>
      </section>
    </>
  );
};
