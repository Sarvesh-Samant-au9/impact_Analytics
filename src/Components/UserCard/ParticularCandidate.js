import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { rejectUser, addShortlist } from "../../Actions/getDetails";
import "./Particular.css";

const ParticularCandidate = () => {
  const dispatch = useDispatch();
  const { particularUser, rejectedCandidates, shortlistedCandidates } =
    useSelector((state) => state.candidates);
  const rejectIds = rejectedCandidates.map((e) => e.id);
  const shortlistIds = shortlistedCandidates.map((e) => e.id);
  const joinArray = rejectIds.concat(shortlistIds);
  return particularUser === null ? (
    <div>
      <h4>Kindly Select a User First</h4>
      <Link to="/"> Main Page </Link>
    </div>
  ) : (
    <div className="user_profile">
      <img src={particularUser[0].Image} alt={particularUser[0].name} />

      <h3 className="user_name">{particularUser[0].name}</h3>
      {joinArray.includes(particularUser[0].id) ? (
        <>
          {shortlistIds.includes(particularUser[0].id) ? (
            <h2 className="user_selected">User is Shortlisted</h2>
          ) : (
            <h2 className="user_rejected">User is Rejected</h2>
          )}
        </>
      ) : (
        <div className="btn_group">
          <button
            className="user_reject_btn"
            onClick={() => dispatch(rejectUser(particularUser))}
          >
            Reject
          </button>
          <button
            className="user_shortlist_btn"
            onClick={() => dispatch(addShortlist(particularUser))}
          >
            Shortlist
          </button>
        </div>
      )}
      <Link className="return_link" to="/">
        Back{" "}
      </Link>
    </div>
  );
};

export default ParticularCandidate;
