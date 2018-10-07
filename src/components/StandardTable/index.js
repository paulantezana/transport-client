import React, { PureComponent, Fragment } from 'react';
import styles from './index.less';
import { Table, Alert } from 'antd';

class StandardTable extends PureComponent {
    constructor(props) {
        super(props);
        this.handleTableChange = this.handleTableChange.bind(this);
    }

    handleTableChange(pagination, filters, sorter) {
        const { onChange } = this.props;
        onChange(pagination, filters, sorter);
    }

    render() {
        const {
            dataSource,
            loading,
            columns,
            rowKey,
            rowSelection,
            pagination,
            rowClassName,
            components,
            minWidth = '700',
        } = this.props;

        return (
            <div className={styles.standardTable}>
                {/* <div className={styles.tableAlert}>
                    <Alert
                        message = {
                            <Fragment>
                                <a  style={{ marginLeft: 24 }}> vaciado</a>
                            </Fragment>
                        }
                        type="info"
                        showIcon
                    />
                </div> */}

                <Table
                    loading={loading}
                    rowKey={rowKey || 'key'}
                    rowSelection={rowSelection}
                    dataSource={dataSource}
                    components={components}
                    columns={columns}
                    size="small"
                    style={{ minWidth: `${minWidth}px` }}
                    bordered
                    rowClassName={rowClassName}
                    pagination={pagination}
                    onChange={this.handleTableChange}
                />
            </div>
        );
    }
}

export default StandardTable;
