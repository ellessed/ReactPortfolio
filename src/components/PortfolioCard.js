const PortfolioCard = (props) => {
  const { project } = props;
  return (
    <div>
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{project.portfolioTitle}</h5>
            <p className="card-text">{project.description}</p>
            <a href={project.href} className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
