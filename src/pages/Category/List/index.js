import React, { Component, Fragment } from 'react';
import { Modal, Tooltip, Icon } from 'antd';
import StandardTable from '@/components/StandardTable';
import styles from './index.less';

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
        const { onShowModalEdit, onDelete, dataSource, loadingAll } = this.props;
        const columns = [
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
                    return (
                        <div className={styles.actions}>
                            <Tooltip title="Editar">
                                <Icon
                                    type="edit"
                                    className={styles.update}
                                    onClick={() => onShowModalEdit('update', a)}
                                />
                            </Tooltip>
                            <Tooltip title="Eliminar">
                                <Icon
                                    type="delete"
                                    className={styles.delete}
                                    onClick={() => {
                                        Modal.confirm({
                                            title: '¿Estás seguro de eliminar este registro?',
                                            content: a.name,
                                            okType: 'danger',
                                            onOk() {
                                                onDelete({ id: a.id });
                                            },
                                        });
                                    }}
                                />
                            </Tooltip>
                        </div>
                    );
                },
            },
        ];

        return (
            <StandardTable
                columns={columns}
                dataSource={dataSource}
                loading={loadingAll}
                pagination={false}
                onChange={this.onChange}
                minWidth={800}
                // rowSelection={rowSelection}
                rowKey={record => record.id}
            />
        );
    }
}

export default DataList;
