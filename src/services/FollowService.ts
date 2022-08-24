import Config from "@/config";
import axios from "axios";

export default {
  setFollow(
    isDelete: boolean,
    data: { userId: string | null; followedUserId: string | null }
  ) {
    return isDelete
      ? axios
          .delete(Config.REACT_APP_BACKEND_HOST + "/user/follow", { data })
          .then((res) => res.data)
          .catch((err) => err)
      : axios
          .post(Config.REACT_APP_BACKEND_HOST + "/user/follow", data)
          .then((res) => res.data)
          .catch((err) => err);
  },
};
