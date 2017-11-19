export default (state) => {
  console.log('pendingStateAR');
  return {
    ...state,
    loading: true,
    error: false,
    message: null,
  };
};
