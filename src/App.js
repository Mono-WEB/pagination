import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Countries from "./components/Countries";
import Pagination from "./components/Pagination";

function App() {
  const [countries, setCountries] = useState([]);
  const [perPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);


  const lastPage = currentPage * perPage;
  const firstPage = lastPage - perPage;
  const currentCountry = countries.slice(firstPage, lastPage);
  const countPage = Math.ceil(countries.length / perPage);

  console.log("++++", countPage);

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all').then((res) => setCountries(res.data));
  }, []);

  const changePage = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className="app">
      <Countries countries={currentCountry} />
      <Pagination countPage={countPage} changePage={changePage} />
    </div>
  );
}

export default App;
