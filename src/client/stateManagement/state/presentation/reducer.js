import {
  INITIALIZE,
  DESTROY,
  GO_TO_SLIDE,
  GO_TO_NEXT_SLIDE,
  GO_TO_PREVIOUS_SLIDE,
} from './actionTypes';

let initialState = {};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZE: {
      initialState = {
        ...action.payload,
        currentSlide: state.currentSlide || 1,
      };
      return initialState;
    }
    case DESTROY:
      return {};
    case GO_TO_SLIDE:
      return {
        ...state,
        currentSlide: action.payload,
      };
    case GO_TO_NEXT_SLIDE:
      return {
        ...state,
        currentSlide: state.currentSlide + 1,
      };
    case GO_TO_PREVIOUS_SLIDE:
      return {
        ...state,
        currentSlide: state.currentSlide - 1,
      };
    default:
      return state;
  }
};

export default reducer;
