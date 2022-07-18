const Card = ({ href, src, alt }) => {
  return (
    <div className="card">
      <a href={href}>
        <img src={src} alt={alt} />
      </a>
    </div>
  );
};

export default Card;
