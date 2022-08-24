import Config from "@/config";
import axios from "axios";

export default {
  getUser() {
    const config = {
      params: {
        id: Config.USER_ID,
      },
    };
    return axios
      .get(Config.REACT_APP_BACKEND_HOST + "/user/profile", config)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  },
};
