import PortfolioCard from "../components/PortfolioCard";

import portfolioData from "../data/PortfolioData";

const Portfolio = () => {
  //import portfoliodata

  return (
    <div>
      <h1 className="title">My Projects </h1>
      <div className="d-flex flex-wrap justify-content-evenly ">
        {portfolioData.map((project) => {
          return <PortfolioCard project={project} />;
        })}
      </div>
    </div>
  );
};

export default Portfolio;
