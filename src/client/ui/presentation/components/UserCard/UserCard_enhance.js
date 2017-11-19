import { compose, lifecycle, onlyUpdateForKeys } from 'recompose';
import { connect } from 'react-redux';
import { getUserAC } from 'state/user/actionCreators';

function componentDidMount() {
  console.log('componentDidMount');
  this.props.dispatch(getUserAC());
}

const enhance = compose(
  connect(state => ({ user: state.user })),
  lifecycle({ componentDidMount }),
  onlyUpdateForKeys(['user']),
);

export default enhance;
