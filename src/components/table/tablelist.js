import React from "react";

const Tablelist = ({ sno, cname, nflower, nanimal }) => {
  return (
    <>
      <div className="tableitems">
        <div>{sno}</div>
        <div>{cname}</div>
        <div>{nflower}</div>
        <div>{nanimal}</div>
      </div>
    </>
  );
};

export default Tablelist;
