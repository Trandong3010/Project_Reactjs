const numInitialState = ["màn hình", "chuột", "bàn phím"];
const numReducer = (state = numInitialState, action) => {
  switch (action.type) {
    case "ADD_NEW":
      return [...state, action.newItem]
      break;
    case "DELETE":
      return [state.filter((value, i) => i !== action.number) ]
      break;
    default:
      return state
  }
}

export default numReducer;