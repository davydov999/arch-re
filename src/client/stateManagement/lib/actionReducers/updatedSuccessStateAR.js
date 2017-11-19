export default (state, action) => ({
  ...state,
  loading: false,
  data: action.payload.data,
});
