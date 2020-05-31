import { UPDATE_FORM } from '../action-types/form.action.types';

export const appReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_FORM:
      const { key, value } = action.payload;

      console.log("updating form");

      return {
        ...state,
        form: {
          ...state.form,
          [key]: value,
        },
      };
    default:
      return state;
  }
};
