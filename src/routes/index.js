import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UseInputComp from "../containers/useInputComp";
import UseTabComp from "../containers/useTabComp";
import UseTitleComp from "../containers/useTitleComp";
import UseClickComp from "../containers/useClickComp";
import UseConfirmComp from "../containers/useConfirmComp";
import UsePreventLeaveComp from "../containers/usePreventLeaveComp";
import UseBeforeLeaveComp from "../containers/useBeforeLeaveComp";
import UseFadeInComp from "../containers/useFadeInComp";
import UseNetworkComp from "../containers/useNetworkComp";
import UseScrollComp from "../containers/useScrollComp";
import UseFullScreenComp from "../containers/useFullScreenComp";
import UseNotificationComp from "../containers/useNotificationComp";

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
        <Route exact path="/useBeforeLeave" component={UseBeforeLeaveComp} />
        <Route exact path="/useFadeIn" component={UseFadeInComp} />
        <Route exact path="/useNetwork" component={UseNetworkComp} />
        <Route exact path="/useScroll" component={UseScrollComp} />
        <Route exact path="/useFullScreen" component={UseFullScreenComp} />
        <Route exact path="/useNotification" component={UseNotificationComp} />
      </Switch>
    </Router>
  );
};

export default Routes;
