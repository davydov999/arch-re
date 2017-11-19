export default (state, { message }) => ({
  ...state,
  loading: false,
  error: true,
  message,
});
