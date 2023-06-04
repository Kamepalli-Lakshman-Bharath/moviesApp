"use client";
import Card from "./Components/Card/Card";
import axios from "axios";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
export default function Home() {
  const [moviesData, setMoviesData] = useState([]);
  const [filterMoviesData, setfilterMoviesData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?apikey=45f0782a&s=war")
      .then((response) => setMoviesData(response.data.Search))
      .catch((err) => console.log(err));
  }, []);
  const handleSearchBar = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchValue(value);
    let filterMoviesData = moviesData.filter(
      (item) => item.Title.toLowerCase().indexOf(value) !== -1
    );
    setfilterMoviesData(filterMoviesData);
  };
  return (
    <main>
      <input
        type="text"
        className={styles.searchbar}
        onChange={handleSearchBar}
      />
      <div className={styles.wrapper}>
        {typeof moviesData != "undefined" && searchValue.length == 0
          ? moviesData.map((item) => (
              <Card movieData={item} key={item.imdbID} />
            ))
          : filterMoviesData.map((item) => (
              <Card movieData={item} key={item.imdbID} />
            ))}
      </div>
    </main>
  );
}
