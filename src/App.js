import { Route, Switch, Redirect } from "react-router-dom";
import Welcome from "./components/Pages/Welcome";
import Sign from "./components/Pages/Sign";
import Books from "./components/Pages/Books";

import Login from "./components/Pages/Login";
import Scifi from "./components/Pages/Scifi";
import Fiction from "./components/Pages/Fiction";
import Non from "./components/Pages/Non";
import Romance from "./components/Pages/Romance";
import Thriller from "./components/Pages/Thriller";

function App() {
  return (
    <div>
      <Route path="/" exact>
        <Redirect to="/welcome"></Redirect>
      </Route>
      <Route path="/welcome">
        <Welcome></Welcome>
      </Route>
      <Route path="/welcome/signin">
        <Sign></Sign>
      </Route>
      <Route path="/login">
        <Login></Login>
      </Route>
      <Switch>
        <Route path="/books" exact>
          <Books></Books>
        </Route>
        <Route path="/books/scifi">
          <Scifi></Scifi>
        </Route>
        <Route path="/books/fiction">
          <Fiction></Fiction>
        </Route>
        <Route path="/books/nonfiction">
          <Non></Non>
        </Route>
        <Route path="/books/romance">
          <Romance></Romance>
        </Route>
        <Route path="/books/thriller">
          <Thriller></Thriller>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
