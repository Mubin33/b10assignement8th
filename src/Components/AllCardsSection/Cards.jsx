import { Link } from "react-router-dom";

const Cards = ({ card }) => {
  let {
    product_id,
    price,
    availability,
    category,
    description,
    product_image,
    product_title,
    rating,
    Specification,
  } = card;

  return (
    <div>
      <div className="card bg-base-100 w-auto h-full shadow-xl">
        <figure className="px-4 pt-4">
          <img 
            src={product_image}
            alt="Product img"
            className="rounded-xl w-full h-40"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{product_title}</h2>
          <p>Price: {price}</p>
          <div className="card-actions">
            <Link to={`/details/${product_id}`}>
                <button className="btn btn-primary">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
