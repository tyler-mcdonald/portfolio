// import { Scripts } from "./components/Scripts";
import { Header } from "./Header";
import { Banner } from "./Banner";
import { MainContent } from "./MainContent";

export const LandingPage = () => {
  return (
    <div className="landing is-preload">
      <div id="page-wrapper">
        <Header />
        <Banner />
        <MainContent />
      </div>
    </div>
  );
};
