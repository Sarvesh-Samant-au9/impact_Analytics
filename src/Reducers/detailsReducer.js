import {
  ADD_REJECT,
  ADD_SHORTLIST,
  GET_ALL_DATA,
  PARTICULAR_USER,
  REMOVE_REJECT,
  REMOVE_SHORTLIST,
  SEARCH_USER,
} from "../Actions/ActionTypes";

const initialState = {
  allListedCandidates: null,
  isLoading: true,
  particularUser: null,
  shortlistedCandidates: [],
  rejectedCandidates: [],
  filteredCandidates: [],
};
const detailsReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_ALL_DATA:
      return {
        ...state,
        allListedCandidates: payload,
        isLoading: false,
      };
    case PARTICULAR_USER:
      return {
        ...state,
        particularUser: state.allListedCandidates.allCandidates.filter(
          (e) => e.id === payload
        ),
        isLoading: false,
      };
    case ADD_REJECT:
      return {
        ...state,
        rejectedCandidates: [...state.rejectedCandidates, payload]
          .flat()
          .reduce((acc, current) => {
            const anyX = acc.find((item) => item.id === current.id);
            if (!anyX) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []),
        isLoading: false,
      };
    case REMOVE_REJECT:
      return {
        ...state,
        rejectedCandidates: state.rejectedCandidates.filter(
          (e) => e.id !== payload
        ),
        isLoading: false,
      };
    case ADD_SHORTLIST:
      return {
        ...state,
        shortlistedCandidates: [...state.shortlistedCandidates, payload]
          .flat()
          .reduce((acc, current) => {
            const anyX = acc.find((item) => item.id === current.id);
            if (!anyX) {
              return acc.concat([current]);
            } else {
              return acc;
            }
          }, []),
        isLoading: false,
      };
    case REMOVE_SHORTLIST:
      return {
        ...state,
        shortlistedCandidates: state.shortlistedCandidates.filter(
          (e) => e.id !== payload
        ),
        isLoading: false,
      };
    case SEARCH_USER:
      let newState = Object.assign({}, state);
      let value = payload.value.toLowerCase();
      let filteredValues = state.allListedCandidates.allCandidates.filter(
        (e) => {
          return e.name.toLowerCase().includes(value);
        }
      );
      return {
        ...newState,
        filteredCandidates: filteredValues,
      };
    // return {
    //   ...state,
    //   allListedCandidates: {
    //     allCandidates: filteredValues,
    //   },
    // };

    default:
      return state;
  }
};
export default detailsReducer;
