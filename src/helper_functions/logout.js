import axios from "axios";

import Config from "./Config";

export default function logOut(user, setUser, history) {
  function clearAndPush() {
    localStorage.clear();
    setUser(null);
    history.push("/");
  }

  if (!user?.token) {
    clearAndPush();
  } else {
    const config = new Config(user.token);
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/logout`, {}, config)
      .catch((err) => alert(err))
      .finally(() => clearAndPush());
  }
}