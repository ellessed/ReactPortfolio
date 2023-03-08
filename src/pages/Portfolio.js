import PortfolioCard from "../components/PortfolioCard";

import portfolioData from "../data/PortfolioData";

const Portfolio = () => {
  //import portfoliodata

  return (
    <div className="d-flex flex-wrap justify-content-evenly ">
      {portfolioData.map((project) => {
        return <PortfolioCard project={project} />;
      })}
    </div>
  );
};

export default Portfolio;
