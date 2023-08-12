import Navbar from './components/Navbar';
import Search from './components/Search';
import Filters from './components/Filters';
import House from './components/House';
import Houses from './components/Houses';
import houseData from './data';
import { useState } from 'react';

const styleContainer = {
  maxWidth: '120rem',
  margin: 'auto',
  borderRadius: '4px',
};

function App() {
  const [searchText, setSearchText] = useState('');
  const [housesData, setHousesData] = useState(houseData);

  const [house, setHouse] = useState({
    location: 'Country A',
    popularity: 'high',
    price: '$1000 - $1500',
    propertyType: 'House',
  });

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setHousesData(houseData);
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();

    setHousesData((prev) =>
      prev.filter((house) =>
        house.name.toLowerCase().includes(searchText.toLowerCase()),
      ),
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setHousesData((prevState) => {
      return prevState.filter((h) => {
        console.log(
          house.price.split(' - ').map((el) => Number(el.substring(1))),
        );
        return (
          h.location.includes(house.location) &&
          h.popularity === house.popularity &&
          h.propertyType === house.propertyType &&
          h.price >=
            house.price.split(' - ').map((el) => Number(el.substring(1)))[0] &&
          h.price <=
            house.price.split(' - ').map((el) => Number(el.substring(1)))[1]
        );
      });
    });
  };

  return (
    <>
      <Navbar />
      <Container>
        <Search
          searchText={searchText}
          onInputSearch={handleSearch}
          onSubmit={handleSubmitSearch}
        />
        <Filters
          house={house}
          setHouse={setHouse}
          onFormSubmit={handleFormSubmit}
          setHousesData={setHousesData}
        />
        <Houses>
          {housesData.length !== 0 ? (
            housesData.map((house) => {
              return <House key={house.id} house={house} />;
            })
          ) : (
            <Error>Sorry! No houses found ...</Error>
          )}
        </Houses>
      </Container>
    </>
  );
}

export default App;

function Container({ children }) {
  return <div style={styleContainer}>{children}</div>;
}

const errorStyle = {
  fontSize: '2rem',
};

function Error({ children }) {
  return <div style={errorStyle}>{children}</div>;
}
