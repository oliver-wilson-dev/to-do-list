const incrementCount = ({ state }) => () => ({
  ...state,
  count: state.count + 1
});


export default incrementCount;
