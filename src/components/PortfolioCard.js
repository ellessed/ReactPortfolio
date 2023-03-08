const PortfolioCard = (props) => {
  const { projectid, name, image, gitHub, deployLink, description } =
    props.project;
  console.log(props);
  return (
    <div className="card m-5 " style={{ width: "25rem" }}>
      <img src={image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">{description}</p>
        <a href={gitHub} className="btn btn-primary mx-1">
          GitHub Repo
        </a>
        <a href={deployLink} className="btn btn-primary mx-1">
          Deployed App
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
