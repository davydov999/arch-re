import { compose, lifecycle, withHandlers } from 'recompose';
import { connect } from 'react-redux';
import reduxPresentation from '../../lib/reduxPresentation';

const KEY_CODES = {
  UP_ARROW: 38,
  DOWN_ARROW: 40,
  LEFT_ARROW: 37,
  RIGHT_ARROW: 39,
  SPACE: 32,
  ENTER: 13,
};

function componentDidMount() {
  window.addEventListener('keydown', this.props.onKeyPress, false);
}

function componentWillUnmount() {
  window.removeEventListener('keydown', this.props.onKeyPress, false);
}

export default compose(
  connect(),
  reduxPresentation({
    slidesCount: 30,
  }),
  withHandlers({
    onKeyPress: ({ goToNextSlide, goToPreviousSlide }) => (ev) => {
      switch (ev.keyCode) {
        case KEY_CODES.UP_ARROW:
        case KEY_CODES.RIGHT_ARROW:
        case KEY_CODES.SPACE:
        case KEY_CODES.ENTER:
          goToNextSlide();
          return;
        case KEY_CODES.LEFT_ARROW:
        case KEY_CODES.DOWN_ARROW:
          goToPreviousSlide();
          return;
        default: return;
      }
    },
  }),
  lifecycle({ componentDidMount, componentWillUnmount })
);
