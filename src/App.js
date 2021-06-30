import { useState, useEffect } from "react";
import { BrowserRouter, useHistory } from "react-router-dom";
import { Switch,Route } from "react-router";
import axios from "axios";
import Modal from "react-modal";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Products from "./components/products/Products";
import Cart from "./pages/Cart";

import UserContext from "./contexts/UserContext";

import GlobalStyles from "./styles/GlobalStyles";
import { PublicOnlyRoute } from "./components/PrivateRoute";
import Header from './components/Header/Header';

import Config from "./helper_functions/Config";
import logOut from "./helper_functions/logout";
import CartContext from "./contexts/CartContext";

Modal.setAppElement(document.querySelector("#root"));

function App() {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(null);
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
          // history.push("/");
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
      <CartContext.Provider value={{cart,setCart}}>
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
            <Route path="/" exact>
              <Products/>
            </Route>
            <Route path="/categories/:id" exact>
              <Products/>
            </Route>
            <Route path="/cart" exact>
              <Cart/>
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
