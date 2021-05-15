import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginScreen from "../components/login/LoginScreen";
import DashboardRoutes from "./DashboardRoutes";

const AppRouter = (props) => {
    return ( <Router>
        <div>
            <Switch>
                <Route exact={true} path="/login" component={LoginScreen}/>
                <Route path="/" component={DashboardRoutes}/>
            </Switch>
        </div>
    </Router> );
}
 
export default AppRouter;