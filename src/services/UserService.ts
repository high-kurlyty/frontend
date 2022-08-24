import Config from "@/config";
import axios from "axios";

export default {
  getUser() {
    return axios
      .get(Config.REACT_APP_BACKEND_HOST + "/user")
      .then((res) => res.data[0])
      .catch((err) => {
        console.log(err);
      });
  },
};
