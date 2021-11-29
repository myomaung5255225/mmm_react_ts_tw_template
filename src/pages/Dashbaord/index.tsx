import React from "react";
import {Switch,useRouteMatch,Redirect,Route} from 'react-router-dom'
import { DashboardWrapper } from "../../templates/DashboardWrapper";
import { BusinessEntryPage } from "./businessEntry";
import { BusServicesPage } from "./BusServices";
import { DigitalServicePage } from "./DititalServices";
import "./index.css"
import { UnAuthenticatedPage } from "./UnAuthenticatedPage";

interface dashboardProps{
    className?:string
}

export const DashboardPage:React.FC<dashboardProps> =({className})=>{
    const {path} = useRouteMatch()
    return(
        <DashboardWrapper>
            <Switch>
            <Route path={path} exact component={BusinessEntryPage} />
            <Route path={`${path}/bus_services`} component={BusServicesPage} />
            <Route path={`${path}/digital_services`} component={DigitalServicePage} />
            <Route path={`${path}/405`} component={UnAuthenticatedPage}  />
            <Redirect to={`${path}/405`} />
        </Switch>
        </DashboardWrapper>
    )
}