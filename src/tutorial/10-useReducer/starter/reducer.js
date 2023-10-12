import { CLEAR_LIST, REMOVE_ITEM, RESET_LIST } from "./action";
import { data } from '../../../data';
//!we needed to import data since we are using it within the reducer

const reducer = (state,action) => {
    if(action.type === CLEAR_LIST) {
      return {...state, people: []};
    }
    if (action.type === RESET_LIST) {
      return {...state,people:data}
    }
    if (action.type === REMOVE_ITEM) {
      let newPeople = state.people.filter((person) => person.id !== action.payload.id);
      return {...state, people: newPeople};
    }
    // return state;
    throw new Error (`No matching "${action.type}" - action type`);
  }
  
  export default reducer;