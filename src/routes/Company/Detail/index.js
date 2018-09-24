import React, { Fragment } from 'react';
import { Icon, Col, Button, Avatar, Tag, Divider, Card, Tabs } from 'antd';
import { connect } from 'dva';
import styles from './index.scss';
import { service } from 'config/app';

class CompanyDetail extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        const { companyDetail, setting, dispatch } = this.props;
        const { currentCompany  } = companyDetail;
        return (
            <Card 
                title={
                    <Fragment>
                        <Avatar src={`${service.path}/${setting.logo}`}  size="small"/>
                        <Divider type="vertical"/>
                        Empresa : {currentCompany.name}
                    </Fragment>
                }
                bordered={false}>
                <Tabs defaultActiveKey="1">
                    <Tabs.TabPane tab={<span><Icon type="user" />Vehiculos</span>} key="1">
                        
                    </Tabs.TabPane>
                    <Tabs.TabPane tab={<span><Icon type="user" />Ruta</span>} key="2">
                        
                    </Tabs.TabPane>
                </Tabs>
            </Card>
        )
    }
}

const mapStateToProps = ({ companyDetail, global, loading}) => {
    return {
        setting: global.setting,
        companyDetail,
        // loading: loading.effects['student/uploadStudents'],
    }
}

export default connect(mapStateToProps)(CompanyDetail)