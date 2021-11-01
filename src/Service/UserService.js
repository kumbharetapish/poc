import axios from "axios";

const BASE_API_PATH = "https://617fe3b0055276001774fd85.mockapi.io";

class UserService {
  getAxios() {
    return axios;
  }

  postUserData(data) {
    debugger;
    return this.getAxios().post(`${BASE_API_PATH}/userData`, { ...data });
  }
}

export default new UserService();
