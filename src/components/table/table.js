import React, { useState } from "react";

import Tablelist from "../table/tablelist";
const Table = ({ value }) => {
  return (
    <>
      <div className="tablecontained">
        <div className="tablehead">
          <div>S.No</div>
          <div>Country Name</div>
          <div>National Flower</div>
          <div>National Animal</div>
        </div>
        <div>
          {value.map((Details, i) => (
            <Tablelist
              key={i}
              sno={Details.sno}
              cname={Details.cname}
              nflower={Details.nflower}
              nanimal={Details.nanimal}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Table;
