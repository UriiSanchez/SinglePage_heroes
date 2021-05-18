import React from "react";
import { Redirect, Route, Switch } from "react-router";

import { Navbar } from "../components/ui/Navbar";
import DcScreen from "../components/dc/DCScreen";
import HeroeScreen from "../components/heroes/HeroeScreen";
import MarvelScreen from "../components/marvel/MarvelScreen";
import SearchScreen from "../components/search/SearchScreen";

const DashboardRoutes = () => {
    return ( <React.Fragment>
        <Navbar />
        <div className="container mt-2">
            <Switch>
                <Route exact path="/marvel" component={MarvelScreen}/>
                <Route exact path="/hero/:heroeId" component={HeroeScreen}/>
                <Route exact path="/dc" component={DcScreen}/>
                <Route exact path="/search" component={SearchScreen}/>
                <Redirect to="/marvel"/>
            </Switch>
        </div>
    </React.Fragment> );
}
 
export default DashboardRoutes;