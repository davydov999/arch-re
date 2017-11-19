export default (state, action) => {
  console.log('successStateAR');
  return {
    ...state,
    loading: false,
    data: action.payload,
  };
};
