import PortfolioCard from "../PortfolioCard";

const Portfolio = () => {
  const myProjects = [
    // { portfolioTitle: "whatever", description: "desc", href: "www.google.com" },
    { portfolioTitle: "Test1", description: "desc1" },
  ];
  //import portfoliodata

  return (
    <div>
      {myProjects.map((project) => {
        return (
          <div>
            <PortfolioCard project={project} />
          </div>
        );
      })}
    </div>
  );
};

export default Portfolio;
