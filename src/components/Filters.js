import "./filter.css"

function Filter({filter}) {
    return <div className="filter">
        <p className="filter-title">{filter.title}</p>
        {filter.title === "When" ? <input type="date" /> : <select>
            {filter.result.map(option => {
                return <option key={option} value={option}>{option}</option>
            })}
        </select>}

    </div>
}

const filterArray = [
    {
        "title": "Location",
        "result": ['Country A', 'Country B', 'Country C', 'Country D', 'Country E'],
        "type": "text"
    },
    {
        "title": "When",
        "result": "Select Move-in Date",
        "type": "datetime"
    },
    {
        "title": "Price",
        "result": ['$1000 - $1500', '$1501 - $2000', '$2001 and above'],
    },
    {
        "title": "Property Type",
        "result": ['House', 'Apartment', 'Condo'],
    },


]

export default function Filters() {
    return <form className="filter-component">
        {filterArray.map(filter => {
            return <Filter key={filter.title} filter={filter} />
        })}
        <button className="apply-filter">Search</button>
    </form>
}