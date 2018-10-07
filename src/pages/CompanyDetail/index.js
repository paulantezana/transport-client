import React, { Fragment } from 'react';
import { Icon, Avatar, Divider, Card, Tabs, Button } from 'antd';
import { connect } from 'dva';
import styles from './index.less';
import { service } from '@/utils/config';

import Vehicle from './Vehicle';
import Journey from './Journey';

import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class CompanyDetail extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { companyDetail, setting, dispatch } = this.props;
        const { currentCompany } = companyDetail;
        return (
            <PageHeaderWrapper
                title={`Empresa: ${currentCompany.name}`}
                // content="Lista de productos"
            >
                <Card bordered={false}>
                    <Tabs defaultActiveKey="1">
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <Icon type="user" />
                                    Vehiculos
                                </span>
                            }
                            key="1"
                        >
                            <Vehicle />
                        </Tabs.TabPane>
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <Icon type="user" />
                                    Ruta
                                </span>
                            }
                            key="2"
                        >
                            <Journey />
                        </Tabs.TabPane>
                    </Tabs>
                </Card>
            </PageHeaderWrapper>
        );
    }
}

const mapStateToProps = ({ companyDetail, global, loading }) => {
    return {
        setting: global.setting,
        companyDetail,
        // loading: loading.effects['student/uploadStudents'],
    };
};

export default connect(mapStateToProps)(CompanyDetail);
