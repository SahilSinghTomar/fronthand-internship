import "./search.css"

export default function Search() {
    return <div className="search-component">
        <h1 className="search-heading">Search properties to rent</h1>
        <form className='search'>
            <input className='search-input' type="text" placeholder="Search with SearchBar" />
            <button className="search-button">Done</button>
        </form>
    </div>
}