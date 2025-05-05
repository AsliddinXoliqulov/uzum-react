import React, { useEffect, useState } from 'react'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Card from './components/card/card'

const App = () => {
  const [data, setData] = useState([]);    
  const [filtered, setFiltered] = useState([]); 
  const [search, setSearch] = useState("");     

  useEffect(() => {
    fetch("http://localhost:3001/produc")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        setFiltered(json);
      });
  }, []);

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    const result = data.filter((item) =>
      item.title.toLowerCase().includes(value)
    );
    setFiltered(result);
  };

  return (
    <div>
      <Header search={search} handleSearch={handleSearch} />
      <div className="flex flex-wrap justify-center gap-5 py-5 w-[90%] m-auto">
        {filtered.map((item) => (
          <Card key={item.id} product={item} />
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default App;
