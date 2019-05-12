import numReducer from './reducer/numReducer';
import editStatusReducer from './reducer/editStatusReducer';

var redux = require('redux');
var oldState = {
  num: ["màn hình", "chuột", "bàn phím"],
  editStatus: true
}

var reducer1 = (state = oldState, action) => {
  switch (action.type) {
    case "CHANGE_EDIT_STATUS":
      return { ...state, editStatus: !state.editStatus }
      break;
    case "ADD_NEW":
      return { ...state, num: [...state.num, action.newItem] }
      break;
    case "DELETE":
      return { ...state, num: state.num.filter((value, i) => i != action.number) }
      break;
    default:
      break;
  }
  return state;
}




const allReducer = redux.combineReducers({
  num:numReducer,
  editStatus:editStatusReducer
})


var store1 = redux.createStore(allReducer);
store1.subscribe(() => {
  console.log(store1.getState());
})
store1.dispatch({ type: "CHANGE_EDIT_STATUS" })
store1.dispatch({
  type: "ADD_NEW",
  newItem: "Tai nghe"
})
store1.dispatch({
  type: "DELETE",
  number: 3
})

export default store1