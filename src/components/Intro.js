import { Icons } from "./Icons";

export const Intro = () => {
  return (
    <section className="box special">
      <header className="major">
        <h2>Hi, I'm Tyler</h2>
        <br />
        <p>
          I create software to help people and businesses succeed.
          <br />
        </p>
        <br />
      </header>
      {/* <a href="/about" className="button alt" rel="noreferrer">
        My Story
      </a> */}
      <Icons />
    </section>
  );
};
