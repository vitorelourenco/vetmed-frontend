import { useState, useEffect } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import { Switch,Route } from "react-router";
import axios from "axios";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./components/products/Products";

import UserContext from "./contexts/UserContext";

import GlobalStyles from "./styles/GlobalStyles";
import { PublicOnlyRoute } from "./components/PrivateRoute";
import Header from './components/Header/Header';

import Config from "./helper_functions/Config";
import logOut from "./helper_functions/logout";

function App() {
  const [user, setUser] = useState(null);
  const [isReadyToRender, setIsReadyToRender] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const userStorage = localStorage.getItem("user");
    if (userStorage !== null) {
      const localUser = JSON.parse(userStorage);
      setUser(localUser);
      const config = new Config(localUser.token);
      axios
        .post("http://localhost:4000/login/withtoken", {}, config)
        .then(() => {
          history.push("/");
        })
        .catch((err) => {
          alert(err);
          logOut(localUser, setUser, history);
        })
        .finally(() => setIsReadyToRender(true));
    } else setIsReadyToRender(true);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const authed = user === null ? false : true;

  return !isReadyToRender ? (
    <></>
  ) : (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <GlobalStyles />
        <Switch>
          <PublicOnlyRoute
            exact
            authed={authed}
            path="/login"
            component={Login}
          />
          <PublicOnlyRoute
            exact
            authed={authed}
            path="/signup"
            component={Signup}
          />
          <Route to="/mock" component={Header}/>
          <Route path="/" exact>
            <Products/>
          </Route>
        </Switch>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
