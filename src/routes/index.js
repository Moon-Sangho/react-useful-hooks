import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UseInputComp from "../containers/useInputComp";
import UseTapComp from "../containers/useTapComp";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UseInputComp} />
        <Route exact path="/useTab" component={UseTapComp} />
      </Switch>
    </Router>
  );
};

export default Routes;
