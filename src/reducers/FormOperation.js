import { POST_DATA } from "../Constants/ActionTypes";
const initialState = { firstName: "", lastName: "", email: "", contactNo: "" };

const FormOperation = (state = { ...initialState }, action) => {
  switch (action.type) {
    case POST_DATA:
      debugger;
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default FormOperation;
