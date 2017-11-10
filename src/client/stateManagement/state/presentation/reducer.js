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
        currentSlide: +location.pathname.split('/')[1],
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
    case GO_TO_NEXT_SLIDE: {
      const nextSlide = state.currentSlide + 1;
      const valid = nextSlide > 1 && nextSlide < state.slidesCount + 1;
      return {
        ...state,
        currentSlide: valid ? nextSlide : state.currentSlide,
      };
    }
    case GO_TO_PREVIOUS_SLIDE: {
      const previousSlide = state.currentSlide - 1;
      const valid = previousSlide >= 1 && previousSlide < state.slidesCount + 1;
      return {
        ...state,
        currentSlide: valid ? previousSlide : state.currentSlide,
      };
    }
    default:
      return state;
  }
};

export default reducer;
