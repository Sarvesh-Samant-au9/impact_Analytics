import React, { useEffect, useState } from "react";
import "./CandidateArrange.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { candidateAvailable, searchUser } from "../../Actions/getDetails";
import CandidateCard from "../Cards/CandidateCard";

const Candidates = () => {
  const [flag, setFlag] = useState(true);
  const dispatch = useDispatch();
  const { allListedCandidates, isLoading, filteredCandidates } = useSelector(
    (state) => state.candidates
  );

  const onChangeHandler = (e) => {
    // setSearch(e.target.value);
    setFlag(false);
    dispatch(searchUser({ value: e.target.value }));
  };

  useEffect(() => {
    dispatch(candidateAvailable());
  }, [dispatch]);

  console.log(filteredCandidates);
  return isLoading ? (
    <h1>Loading</h1>
  ) : (
    <div className="">
      <input
        onChange={onChangeHandler}
        placeholder="Type to Filter"
        style={{
          height: "25px",
          width: "80%",
          display: "block",
          margin: "auto",
          marginTop: "10px",
        }}
      />
      <h3
        style={{
          color: "#5454d4",
          textAlign: "center",
          fontWeight: "400",
          textTransform: "uppercase",
        }}
      >
        Candidates
      </h3>
      <div className="link_group">
        <Link to="/rejected" className="links">
          Rejected
        </Link>
        <Link to="/shortlisted" className="links">
          Shortlist
        </Link>
      </div>
      {flag ? (
        <div className="container_arrange">
          {allListedCandidates.allCandidates.map(({ id, name, Image }) => (
            <CandidateCard id={id} name={name} image={Image} />
          ))}
        </div>
      ) : filteredCandidates.length > 0 ? (
        <div className="container_arrange">
          {filteredCandidates.map(({ id, name, Image }) => (
            <CandidateCard id={id} name={name} image={Image} />
          ))}
        </div>
      ) : (
        <>
          <h3>No Such Candidate Available</h3>
        </>
      )}
    </div>
  );
};

export default Candidates;
