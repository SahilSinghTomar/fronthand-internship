import './house.css';

const popularTag = {
  backgroundColor: '#6f64f6',
};

const trendingTag = {
  backgroundColor: '#ff2400',
};

const classicTag = {
  backgroundColor: '#00b712',
};

export default function House({ house }) {
  const tagColor =
    house.popularity === 'high'
      ? popularTag
      : house.popularity === 'medium'
      ? trendingTag
      : classicTag;

  return (
    <div className="card">
      <img className="card-image" src={house.image} alt={house.name} />
      <div className="card-details">
        <span className="card-popularity" style={tagColor}>
          {house.popularity === 'high' && 'Popular'}
          {house.popularity === 'medium' && 'Trending'}
          {house.popularity === 'low' && 'Classic'}
        </span>
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
