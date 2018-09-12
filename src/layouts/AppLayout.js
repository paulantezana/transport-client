import React, { Component, Fragment } from "react";
import { connect } from 'dva';
import { ContainerQuery }  from 'react-container-query';
import { enquireScreen, unenquireScreen } from 'enquire-js';
import { Layout, Icon } from 'antd';
import { Link, Switch, routerRedux } from 'dva/router';

import { PrivateRoute } from 'utilities/authority';
import classNames from 'classnames';
import GlobalHeader from 'components/GlobalHeader';
import GlobalFooter from 'components/GlobalFooter';
import SiderMenu from 'components/SiderMenu';
import Preload from 'components/Preload';
import Exception from 'components/Exception';
import { getMenuData } from '../common/menu';
import RenderAuthorized from 'components/Authorized';

import logoWhite from 'assets/logo-white.png';
import logo from 'assets/logo.png';
import { app as appConfig } from 'config/app';

import Dashboard from 'routes/Dashboard';
import Monitoring from 'routes/Monitoring';


const { Header, Content, Footer } = Layout;
const Exeption404 = () => <Exception type="404" style={{ minHeight: 500, height: '80%' }} linkElement={Link} />

// Media queryes
const query = {
    'screen-xs': {
        maxWidth: 575,
    },
    'screen-sm': {
        minWidth: 576,
        maxWidth: 767,
    },
    'screen-md': {
        minWidth: 768,
        maxWidth: 991,
    },
    'screen-lg': {
        minWidth: 992,
        maxWidth: 1199,
    },
    'screen-xl': {
        minWidth: 1200,
        maxWidth: 1599,
    },
    'screen-xxl': {
        minWidth: 1600,
    },
};


let isMobile;
enquireScreen(b => {
  isMobile = b;
});

class AppLayout extends Component{

    constructor(props){
        super(props);
        this.state = {
            isMobile,
        }
        this.handleMenuCollapse = this.handleMenuCollapse.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);
    }

    // Menu user profile click
    handleMenuClick({key}){
        const { dispatch } = this.props;
        switch (key) {
            case 'logout':
                dispatch({
                    type: 'user/logout'
                })
                break;
            case 'setting':
                dispatch(routerRedux.push('/setting/general'));
                break;
            case 'profile':
                dispatch(routerRedux.push('/setting/profile'));
                break;
            default:
                break;
        }
    }

    // Side menu hide or show
    handleMenuCollapse(collapsed){
        const { dispatch } = this.props;
        dispatch({
            type: 'global/changeLayoutCollapsed',
            payload: collapsed,
        });
    };

    componentDidMount(){
        this.enquireHandler = enquireScreen(mobile => {
            this.setState({
              isMobile: mobile,
              collapsed: true,
            });
        });

        const { dispatch } = this.props;
        dispatch({type: 'global/globalSetting'})
    }

    componentWillUnmount() {
        unenquireScreen(this.enquireHandler);
    }

    render(){
        const { global: { collapsed, success, user, setting }, match, location } = this.props;
        const { isMobile: mb } = this.state;

        // Usando el componente de atorizacion
        // Configure las autorizaciones en commons/menu.js
        const Authorized = RenderAuthorized(user.profile); // 

        const layout = success
        ? (
            <Layout>
                <SiderMenu
                    logo={logoWhite}
                    Authorized={Authorized}
                    menuData={getMenuData()}
                    collapsed={collapsed}
                    location={location}
                    isMobile={mb}
                    appConfig={appConfig}
                    onCollapse={this.handleMenuCollapse}
                />
                <Layout>
                    <Header style={{ padding: 0}}>
                        <GlobalHeader
                            logo={logo}
                            setting={setting}
                            currentUser={user}
                            collapsed={collapsed}
                            isMobile={mb}
                            onMenuClick={this.handleMenuClick}
                            onCollapse={this.handleMenuCollapse}
                        />
                    </Header>
                    <Content style={{ height: '100%', margin: '24px 24px 0' }}>
                        <Switch>
                            <PrivateRoute exact path={match.url} component={Dashboard}/>
                            <PrivateRoute exact path={`${match.url}monitoring`} component={Monitoring}/>
                            <PrivateRoute component={Exeption404}/>
                        </Switch>
                    </Content>
                    <GlobalFooter
                        copyright={
                            <Fragment>
                                Copyright <Icon type="copyright" /> Promoción 2018
                            </Fragment>
                        }/>
                </Layout>
            </Layout>
        ) : (
            <Preload logo={logo}/>
        );

        return (
            <ContainerQuery query={query}>
                {params => <div className={classNames(params)}>{layout}</div>}
            </ContainerQuery>
        )
    }
}


const mapStateToProps = ({global}) => {
    return {
        global: global,
    }
}

export default connect(mapStateToProps)(AppLayout);