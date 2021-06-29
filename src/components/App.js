import { BrowserRouter,Switch,Route } from "react-router-dom";
import GlobalStyle from "../styles/GlobalStyle";
import Products from "./products/Products";
import "../styles/reset.css"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle/>
      <Switch>
              <Route path="/" exact>
                
              </Route>
              <Route path="/signup" exact>
                
              </Route>
              <Route path="/products" exact>
                <Products/>
              </Route>
              <Route path="/categories/:id" exact>
                
              </Route>
              <Route path="/my-basket" exact>
                
              </Route>
            </Switch>
    </BrowserRouter>
  );
}
