import _ from 'lodash';
import actionTypes from '../constants/action-types';

const data = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.CREATE_DATA:
      return { ...state, [action.payload[0].id]: action.payload[0] };
    case actionTypes.FETCH_DATAS:
      return { ...state, ..._.mapKeys(action.payload, 'id') };
    case actionTypes.FETCH_DATA:
      return { ...state, [action.payload[0].id]: action.payload };
    case actionTypes.EDIT_DATA:
      return { ...state, [action.payload[0].id]: action.payload };
    case actionTypes.DELETE_DATA:
      return _.omit(state, [action.payload[0].id]);
    default:
      return state;
  }
};

export default data;
