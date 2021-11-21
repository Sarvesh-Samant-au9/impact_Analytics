import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeRejectUser } from "../../Actions/getDetails";
import List from "../Lists/List";
const Reject = () => {
  const { rejectedCandidates } = useSelector((state) => state.candidates);
  return (
    <div>
      {rejectedCandidates.length > 0 ? (
        <>
          <h4 style={{ textAlign: "center" }}>Rejected Candidates</h4>

          {rejectedCandidates.map((e) => (
            <List
              removeRejectUser={removeRejectUser}
              name={e.name}
              id={e.id}
              key={e.id}
              image={e.Image}
            />
          ))}
        </>
      ) : (
        <h3>No Candidate Avaliable Here</h3>
      )}
      <Link className="return_link" to="/">
        Back{" "}
      </Link>
    </div>
  );
};

export default Reject;
