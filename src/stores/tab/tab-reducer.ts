import * as TabActionsTypes from './tab-actions';

const initialState = {
  selectedTab: '',
};

const tabReducer = (state = initialState, action) => {
  if (action.type === TabActionsTypes.SET_SELECTED_TAB) {
    return {
      ...state,
      selectedTab: action.payload.selectedTab,
    };
  }

  return state;
};

export default tabReducer;
