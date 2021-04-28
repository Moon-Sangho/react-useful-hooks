import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UseInputComp from "../containers/useInputComp";
import UseTabComp from "../containers/useTabComp";
import UseTitleComp from "../containers/useTitleComp";
import UseClickComp from "../containers/useClickComp";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UseInputComp} />
        <Route exact path="/useTab" component={UseTabComp} />
        <Route exact path="/useTitle" component={UseTitleComp} />
        <Route exact path="/useClick" component={UseClickComp} />
      </Switch>
    </Router>
  );
};

export default Routes;
