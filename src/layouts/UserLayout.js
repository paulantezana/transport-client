import React, { Fragment } from "react";
import { Redirect, Switch, Route } from 'dva/router';
import { Icon } from 'antd';
import styles from './UserLayout.scss';

import logo from 'assets/logo.png';

import GlobalFooter from 'components/GlobalFooter';

import LoginPage from '../routes/User/Login';
import ForgotPage from '../routes/User/Forgot';

class UserLayout extends React.PureComponent {
    render(){
        const { match } = this.props;
        return (
            <div className={styles.container}>
                <img src={logo} className={styles.logo}/>
                <Switch>
                    <Route exact path={`${match.url}/login`} component={LoginPage}/>
                    <Route exact path={`${match.url}/forgot`} component={ForgotPage}/>
                    <Redirect from="/user" to="/user/login" />
                </Switch>
                <GlobalFooter copyright={
                    <Fragment>
                        Copyright <Icon type="copyright" /> 2018 paulantezana.com
                    </Fragment>
                }/>
            </div>
        )
    }
}

export default UserLayout;