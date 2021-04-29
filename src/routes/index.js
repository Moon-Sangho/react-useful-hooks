import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UseInputComp from "../containers/useInputComp";
import UseTabComp from "../containers/useTabComp";
import UseTitleComp from "../containers/useTitleComp";
import UseClickComp from "../containers/useClickComp";
import UseConfirmComp from "../containers/useConfirmComp";
import UsePreventLeaveComp from "../containers/usePreventLeaveComp";
import useBeforeLeaveComp from "../containers/useBeforeLeaveComp";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={UseInputComp} />
        <Route exact path="/useTab" component={UseTabComp} />
        <Route exact path="/useTitle" component={UseTitleComp} />
        <Route exact path="/useClick" component={UseClickComp} />
        <Route exact path="/useConfirm" component={UseConfirmComp} />
        <Route exact path="/usePreventLeave" component={UsePreventLeaveComp} />
        <Route exact path="/useBeforeLeave" component={useBeforeLeaveComp} />
      </Switch>
    </Router>
  );
};

export default Routes;
