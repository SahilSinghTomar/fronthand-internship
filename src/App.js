import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Filters from "./components/Filters";
import House from "./components/House";
import Houses from "./components/Houses";
import housesData from "./data"

const styleContainer = {
    maxWidth: "120rem",
    margin: "auto",
    borderRadius: "4px",
}

function App() {

  return (
      <>
          <Navbar />
          <Container>
              <Search />
              <Filters />
              <Houses>
                  {housesData.map((house) => {
                      return <House key={house.id} house={house} />
                  })}
              </Houses>
          </Container>
      </>
  );
}

export default App;

function Container({children}) {
    return <div style={styleContainer}>
        {children}
    </div>
}
