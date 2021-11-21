import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeShortlist } from "../../Actions/getDetails";
import List from "../Lists/List";

const ShortList = () => {
  const { shortlistedCandidates } = useSelector((state) => state.candidates);
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>Accepted Candidates </h4>
      {shortlistedCandidates.length > 0 ? (
        shortlistedCandidates.map((e) => (
          <List
            name={e.name}
            id={e.id}
            image={e.Image}
            removeShortlist={removeShortlist}
          />
        ))
      ) : (
        <h3>No Candidate Avaliable Here</h3>
      )}
      <Link className="return_link" to="/">
        Back{" "}
      </Link>
    </div>
  );
};

export default ShortList;
