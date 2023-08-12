import './search.css';

export default function Search({ searchText, onInputSearch, onSubmit }) {
  return (
    <div className="search-component">
      <h1 className="search-heading">Search properties to rent</h1>
      <form className="search" onSubmit={onSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search with Property Name"
          value={searchText}
          onChange={onInputSearch}
        />
        <button className="search-button">Done</button>
      </form>
    </div>
  );
}
