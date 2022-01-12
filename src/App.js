import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Data from "./pages/dataform";
import Show from "./pages/show";
import { useState } from "react";
import { FetchDataContext } from "./context/dataContext";

function App() {
  const i = {
    firstname: "",
    phonenumber: "",
    email: "",
    salary: "",
    employed: "",
  };
  const [formValues, setFormValues] = useState(i);

  return (
    <div>
      <FetchDataContext.Provider value={[formValues, setFormValues]}>
        <BrowserRouter>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/detail" component={Data} />
          <Route exact path="/shows" component={Show} />
        </BrowserRouter>
      </FetchDataContext.Provider>
    </div>
  );
}

export default App;
