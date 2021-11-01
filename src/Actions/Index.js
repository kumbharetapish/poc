import { POST_DATA } from "../Constants/ActionTypes";

export const postUserData = (data) => {
  debugger;
  return { type: POST_DATA, payload: data };
};
