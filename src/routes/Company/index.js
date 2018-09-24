import React, { Component } from "react";
import Company from './company';
import Detail from './Detail';

import { Switch } from 'dva/router';
import { PrivateRoute } from 'utilities/authority';

class RequirementRouter extends Component{
    render(){
        const { match } = this.props;
        return (
            <Switch>
                <PrivateRoute exact path={match.url} component={Company}/>
                <PrivateRoute exact path={`${match.url}/detail/:company_id`} component={Detail}/>
            </Switch>
        )
    }
}

export default RequirementRouter;