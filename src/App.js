import { BrowserRouter,Switch,Route } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";

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
                
              </Route>
              <Route path="/categories" exact>
                
              </Route>
              <Route path="/my-basket" exact>
                
              </Route>
            </Switch>
    </BrowserRouter>
  );
}
