import {
  INITIALIZE,
  DESTROY,
  GO_TO_SLIDE,
  GO_TO_NEXT_SLIDE,
  GO_TO_PREVIOUS_SLIDE,
} from './actionTypes';

export const initialize = payload => ({ type: INITIALIZE, payload });
export const destroy = () => ({ type: DESTROY });

export const goToSlide = payload => ({ type: GO_TO_SLIDE, payload });
export const goToNextSlide = () => ({ type: GO_TO_NEXT_SLIDE });
export const goToPreviousSlide = () => ({ type: GO_TO_PREVIOUS_SLIDE });
