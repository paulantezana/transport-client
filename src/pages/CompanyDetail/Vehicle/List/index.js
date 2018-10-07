import React, { Component, Fragment } from 'react';
import { Pagination, Modal, Menu, Dropdown, Icon, Badge } from 'antd';
import PropTypes from 'prop-types';
import StandardTable from '@/components/StandardTable';
import styles from './index.less';
import Spacing from '@/components/Spacing';

class DataList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortedInfo: null,
            filteredInfo: null,
        };
        this.onChange = this.onChange.bind(this);
        this.clearAllFilters = this.clearAllFilters.bind(this);
    }

    onChange(pagination, filters, sorter) {
        this.setState({
            sortedInfo: sorter,
            filteredInfo: filters,
        });
    }

    clearAllFilters() {
        this.setState({
            sortedInfo: null,
            filteredInfo: null,
        });
        this.props.onClear();
    }

    render() {
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const {
            onPageChange,
            onUpdate,
            onShowModalEdit,
            onDelete,
            dataSource,
            loadingPaginateByCompanyID,
            loadingUpdate,
            total,
            pageSize,
            current,
        } = this.props;
        const columns = [
            {
                title: 'Estado',
                key: 'authorized',
                width: '60px',
                render: (a, record) =>
                    a.authorized ? <Badge status="success" /> : <Badge status="error" />,
            },
            {
                title: 'Nombre',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Accion',
                key: 'accion',
                width: '110px',
                render: (a, record) => {
                    const menu = (
                        <Menu>
                            <Menu.Item
                                key="2"
                                onClick={() => {
                                    Modal.confirm({
                                        title: '¿Estás seguro de eliminar este registro?',
                                        content: a.name,
                                        okText: 'SI',
                                        okType: 'danger',
                                        cancelText: 'NO',
                                        onOk() {
                                            onDelete({ id: a.id });
                                        },
                                    });
                                }}
                            >
                                <Icon type="delete" />
                                Eliminar
                            </Menu.Item>
                        </Menu>
                    );
                    return (
                        <Dropdown.Button
                            onClick={() => onShowModalEdit('update', a)}
                            overlay={menu}
                        >
                            Editar
                        </Dropdown.Button>
                    );
                },
            },
        ];

        return (
            <div>
                <StandardTable
                    columns={columns}
                    dataSource={dataSource}
                    loading={loadingPaginateByCompanyID}
                    pagination={false}
                    onChange={this.onChange}
                    minWidth={800}
                    // rowSelection={rowSelection}
                    rowKey={record => record.id}
                />
                <Spacing />
                <Pagination
                    showQuickJumper
                    total={total}
                    pageSize={pageSize}
                    defaultCurrent={1}
                    current={current}
                    showTotal={total => `Total ${total} items`}
                    onChange={onPageChange}
                />
            </div>
        );
    }
}

DataList.propTypes = {
    onPageChange: PropTypes.func,
    onUpdate: PropTypes.func,
    onDelete: PropTypes.func,
    onRefresh: PropTypes.func,
    dataSource: PropTypes.array,
    loading: PropTypes.any,
    total: PropTypes.any,
    current: PropTypes.any,
};

export default DataList;
