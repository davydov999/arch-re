import { compose, withState, withHandlers } from 'recompose';

export default compose(
  withState('isResultShowed', 'showResult', false),
  withHandlers({
    onClick: ({ showResult }) => () => showResult(true),
  }),
);
