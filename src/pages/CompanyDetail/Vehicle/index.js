import React, { Component, Fragment } from 'react';
import { connect } from 'dva';
import { Button, Input, Card } from 'antd';

import styles from './index.less';
import List from './List';
import ModalForm from './Form';

const Search = Input.Search;

class Vehicle extends Component {
    constructor(props) {
        super(props);
        this.onQueryPaginateByCompanyID = this.onQueryPaginateByCompanyID.bind(this);
    }
    componentDidMount() {
        this.onQueryPaginateByCompanyID();
    }
    onQueryPaginateByCompanyID(clear) {
        const {
            dispatch,
            vehicle: { searchText },
        } = this.props;
        dispatch({
            type: 'vehicle/paginateByCompanyID',
            payload: {
                search: clear ? '' : searchText,
            },
        });
    }
    render() {
        const {
            dispatch,
            setting,
            vehicle,
            loadingPaginateByCompanyID,
            loadingUpdate,
        } = this.props;
        const { onQueryPaginateByCompanyID } = this;
        const { list, total, current, searchText, currentItem } = vehicle;

        const vehicleListProps = {
            current,
            total,
            pageSize: setting.item,
            dataSource: list,
            loadingPaginateByCompanyID: loadingPaginateByCompanyID,
            loadingUpdate: loadingUpdate,
            onPageChange(page) {
                dispatch({
                    type: 'vehicle/paginateByCompanyID',
                    payload: {
                        current_page: page,
                        search: searchText,
                    },
                });
            },
            onClear() {
                // Limpiar el campo search text
                dispatch({
                    type: 'vehicle/setSearchText',
                    payload: '',
                });
                // Query para mostrar todo los vehicleos
                onQueryPaginateByCompanyID(true);
            },
            onUpdate(param) {
                dispatch({
                    type: 'vehicle/update',
                    payload: param,
                });
            },
            onShowModalEdit(type, currentItem) {
                onShowModal(type, currentItem);
            },
            onDelete(param) {
                dispatch({
                    type: 'vehicle/delete',
                    payload: param,
                });
            },
        };

        const onShowModal = (modalType, currentItem = {}) => {
            dispatch({
                type: 'vehicle/showModal',
                payload: { currentItem, modalType },
            });
        };

        const onSearchText = search => {
            dispatch({
                type: 'vehicle/setSearchText',
                payload: search,
            });
        };

        return (
            <Fragment>
                <div className={styles.header}>
                    <Button icon="plus" type="primary" onClick={() => onShowModal('create')}>
                        Nuevo
                    </Button>
                    <Button icon="reload" onClick={() => this.onQueryPaginateByCompanyID()} />
                    <Search
                        placeholder="Buscar vehicleo"
                        value={searchText}
                        onChange={e => onSearchText(e.target.value)}
                        onSearch={value => this.onQueryPaginateByCompanyID()}
                        style={{ width: 200 }}
                    />
                    <ModalForm />
                </div>
                <List {...vehicleListProps} />
            </Fragment>
        );
    }
}

const mapStateToProps = ({ vehicle, global, loading }) => {
    return {
        vehicle,
        setting: global.setting,
        loadingPaginateByCompanyID: loading.effects['vehicle/paginateByCompanyID'],
        loadingUpdate: loading.effects['vehicle/update'],
    };
};

export default connect(mapStateToProps)(Vehicle);
