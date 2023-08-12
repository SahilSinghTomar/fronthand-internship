import "./house.css"

export default function House({house}) {
    return (
      <div className="card">
        <img className="card-image" src={house.image} alt="house 1 image" />
        <div className="card-details">
          <p className="card-price">
            ${house.price}
            <span className="price-month">/month</span>
          </p>
          <h2 className="card-heading">{house.name}</h2>
          <p className="card-address">{house.location}</p>
          <ul className="card-features">
            <li>
              <span>{house.bedrooms}</span> Beds
            </li>
            <li>
              <span>{house.bedrooms}</span> Bathrooms
            </li>
            <li>
              <span>{house.areaSqMeters}</span>m2
            </li>
          </ul>
        </div>
      </div>
    );
}