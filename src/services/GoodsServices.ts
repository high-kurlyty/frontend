import Config from "@/config";
import axios from "axios";

export default {
  getGoods(id: string) {
    return axios
      .get(Config.REACT_APP_BACKEND_HOST + `/product/${id}`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  },
  getGoodsList() {
    return axios
      .get(Config.REACT_APP_BACKEND_HOST + `/basket`)
      .then((res) => res.data)
      .catch((err) => {
        console.log(err);
      });
  },
};
