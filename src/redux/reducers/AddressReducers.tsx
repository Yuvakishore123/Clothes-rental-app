import {ADD_ADDRESS, REMOVE_ADDRESS} from '../actions/actions';

export const AddressReducers = (
  state = [],
  action: {type: any; payload: number},
) => {
  switch (action.type) {
    case ADD_ADDRESS:
      return [...state, action.payload];

    case REMOVE_ADDRESS:
      const deleteArray1 = state.filter((item, index) => {
        return item.id && index !== action.payload;
      });
      return deleteArray1;
    default:
      return state;
  }
};
