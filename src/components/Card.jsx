import "../styles/Card.css";

function Card({ image, title, desc }) {
  return (
    <div className="card">

      <img src={image} alt={title} />

      <div className="card-content">
        <h3>{title}</h3>

        <p>{desc}</p>
      </div>

    </div>
  );
}

export default Card;