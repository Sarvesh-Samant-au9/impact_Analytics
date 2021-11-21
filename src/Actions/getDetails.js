import axios from "axios";
import {
  ADD_REJECT,
  ADD_SHORTLIST,
  GET_ALL_DATA,
  PARTICULAR_USER,
  REMOVE_REJECT,
  REMOVE_SHORTLIST,
  SEARCH_USER,
} from "./ActionTypes";

// Get all Users
export const candidateAvailable = () => async (dispatch) => {
  const { data } = await axios.get(
    `https://s3-ap-southeast-1.amazonaws.com/he-public-data/users49b8675.json`
  );
  dispatch({
    type: GET_ALL_DATA,
    payload: {
      allCandidates: data,
    },
  });
};

// Get Particular user
export const singleUser = (id) => (dispatch) => {
  dispatch({
    type: PARTICULAR_USER,
    payload: id,
  });
};

// Add the candidate to reject list
export const rejectUser = (data) => (dispatch) => {
  dispatch({
    type: ADD_REJECT,
    payload: data,
  });
};

// Remove the candidate from Rejection list
export const removeRejectUser = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_REJECT,
    payload: id,
  });
};

// Add the candidate to Shortlisted list
export const addShortlist = (data) => (dispatch) => {
  dispatch({
    type: ADD_SHORTLIST,
    payload: data,
  });
};

// Remove the candidate from Shortlisted list
export const removeShortlist = (id) => (dispatch) => {
  dispatch({
    type: REMOVE_SHORTLIST,
    payload: id,
  });
};

export const searchUser = (text) => ({
  type: SEARCH_USER,
  payload: text,
});
