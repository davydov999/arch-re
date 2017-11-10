import { compose, lifecycle, withProps } from 'recompose';
import { connect } from 'react-redux';

import {
  initialize,
  destroy,
  goToNextSlide,
  goToPreviousSlide,
} from 'state/presentation/actionCreators';

function componentWillMount() {
  const { dispatch, data } = this.props;
  dispatch(initialize(data));
}

function componentWillUnmount() {
  const { dispatch } = this.props;
  dispatch(destroy());
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    goToNextSlide: (...args) => dispatch(goToNextSlide(...args)),
    goToPreviousSlide: (...args) => dispatch(goToPreviousSlide(...args)),
  };
}

const enhance = data => compose(
  connect(null, mapDispatchToProps),
  withProps(() => ({
    data,
  })),
  lifecycle({ componentWillMount, componentWillUnmount }),
  connect(state => ({ presentation: state.presentation })),
);

export default enhance;
