import React, { useState, useEffect } from "react";
import Table from "../table/table";
import { Details } from "../helpers/tablearr";
import Searchbar from "../searchbar/searchbar";
const Galleryhome = () => {
  const [data, setData] = useState(Details);
  const [search, setSearch] = useState("");
  useEffect(() => {
    setData((previousState) =>
      // array.filter(function(currentValue, index, arr)) ----------Syntax of Filter
      previousState.filter(
        (row) =>
          row.cname.toLowerCase().includes(search.toLowerCase()) ||
          row.nflower.toLowerCase().includes(search.toLowerCase()) ||
          row.nanimal.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search]);
  // useEffect(() => {
  //   return () => {};
  // }, []);
  return (
    <>
      <div className="app">
        <Searchbar value={search} onChange={(e) => setSearch(e.target.value)} />
        <Table value={data} />
      </div>
    </>
  );
};

export default Galleryhome;
