
import housesData from "../data"

const houseContainer = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridRowGap: "5rem",
    gridColumnGap: "5rem"
}

export default function Houses({children}) {
    return <div style={houseContainer}>
        {children}
    </div>
}