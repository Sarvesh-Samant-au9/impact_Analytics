import React from "react";
import "./List.css";
import { useDispatch } from "react-redux";
const List = ({ id, name, image, removeRejectUser, removeShortlist }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="list">
        <img src={image} alt={name} />
        <h4>{name}</h4>
        {removeShortlist && (
          <button
            className="list_remove"
            onClick={() => dispatch(removeShortlist(id))}
          >
            Remove
          </button>
        )}
        {removeRejectUser && (
          <button
            className="list_remove"
            onClick={() => dispatch(removeRejectUser(id))}
          >
            Remove
          </button>
        )}
      </div>
    </>
  );
};

export default List;
