import './filter.css';
import houseData from '../data';

export default function Filters({
  house,
  setHouse,
  onFormSubmit,
  setHousesData,
}) {
  const handleLocationChange = (event) => {
    setHouse({ ...house, location: event.target.value });
    setHousesData(houseData);
  };

  const handlePopularityChange = (event) => {
    setHouse({ ...house, popularity: event.target.value });
    setHousesData(houseData);
  };

  const handlePriceChange = (event) => {
    setHouse({ ...house, price: event.target.value });
    setHousesData(houseData);
  };

  const handlePropertyTypeChange = (event) => {
    setHouse({ ...house, propertyType: event.target.value });
    setHousesData(houseData);
  };

  return (
    <form className="filter-component" onSubmit={onFormSubmit}>
      <div className="filter">
        <p className="filter-title">Location</p>
        <select value={house.location} onChange={handleLocationChange}>
          <option value="Country A">Country A</option>
          <option value="Country B">Country B</option>
          <option value="Country C">Country C</option>
          <option value="Country D">Country D</option>
          <option value="Country E">Country E</option>
        </select>
      </div>
      <div className="filter">
        <p className="filter-title">Popularity</p>
        <select value={house.popularity} onChange={handlePopularityChange}>
          <option value="high">high</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>
      </div>
      <div className="filter">
        <p className="filter-title">Price</p>
        <select value={house.price} onChange={handlePriceChange}>
          <option value="$1000 - $1500">$1000 - $1500</option>
          <option value="$1501 - $2000">$1501 - $2000</option>
          <option value="$2001 - $3000">$2001 - $3000</option>
        </select>
      </div>
      <div className="filter">
        <p className="filter-title">Property Type</p>
        <select value={house.propertyType} onChange={handlePropertyTypeChange}>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Condo">Condo</option>
        </select>
      </div>
      <button className="apply-filter">Search</button>
    </form>
  );
}
