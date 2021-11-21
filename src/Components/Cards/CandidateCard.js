import React from "react";
import { Link } from "react-router-dom";
import "./CandidateCard.css";
import { useDispatch } from "react-redux";
import { singleUser } from "../../Actions/getDetails";
const CandidateCard = (props) => {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <div className="card_image">
        <img src={props.image} alt="name" />
      </div>
      <h5 className="card_heading">{props.name}</h5>
      <div className="card_conatiner_link">
        <Link
          to={`/${props.id}`}
          className="card_link"
          onClick={() => dispatch(singleUser(props.id))}
        >
          Visit
        </Link>
      </div>
    </div>
  );
};

export default CandidateCard;
