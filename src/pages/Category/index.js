import React, { Component } from 'react';
import { connect } from 'dva';
import { Button, Input, Card } from 'antd';

import styles from './index.less';
import List from './List';
import ModalForm from './Form';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

class Category extends Component {
    constructor(props) {
        super(props);
        this.onQueryAll = this.onQueryAll.bind(this);
    }
    componentDidMount() {
        this.onQueryAll();
    }
    onQueryAll() {
        const { dispatch } = this.props;
        dispatch({
            type: 'category/all',
            payload: { tree: true },
        });
    }
    render() {
        const { dispatch, category, loadingAll, loadingUpdate } = this.props;
        const { list } = category;

        const categoryListProps = {
            dataSource: list,
            loadingAll: loadingAll,
            onShowModalEdit(type, currentItem) {
                onShowModal(type, currentItem);
            },
            onDelete(param) {
                dispatch({
                    type: 'category/delete',
                    payload: param,
                });
            },
        };

        const onShowModal = (modalType, currentItem = {}) => {
            dispatch({
                type: 'category/showModal',
                payload: { currentItem, modalType },
            });
            dispatch({
                type: 'category/all',
                payload: { tree: false },
            });
        };

        return (
            <PageHeaderWrapper
                title="Servicios"
                // content="Lista de productos"
            >
                <Card bordered={false}>
                    <div className={styles.header}>
                        <Button icon="plus" type="primary" onClick={() => onShowModal('create')}>
                            Nuevo
                        </Button>
                        <Button icon="reload" onClick={() => this.onQueryAll()} />
                        <ModalForm />
                    </div>
                    <List {...categoryListProps} />
                </Card>
            </PageHeaderWrapper>
        );
    }
}

const mapStateToProps = ({ category, loading }) => {
    return {
        category,
        loadingAll: loading.effects['category/all'],
        loadingUpdate: loading.effects['category/update'],
    };
};

export default connect(mapStateToProps)(Category);
