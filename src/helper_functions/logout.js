import axios from "axios";

import Config from "./Config";

export default function logOut(user, setUser, history) {
  function clearAndPush() {
    localStorage.clear();
    setUser(null);
    history.push("/login");
  }

  if (!user || !typeof user === "object" || !user.token) {
    clearAndPush();
  } else {
    const config = new Config(user.token);
    axios
      .post("https://my-wallet-vel.herokuapp.com/logout", {}, config)
      .catch((err) => alert(err))
      .finally(() => clearAndPush());
  }
}
