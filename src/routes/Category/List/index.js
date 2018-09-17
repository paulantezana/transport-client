import React, {Component, Fragment} from 'react';
import { Pagination, Modal, Tooltip, Switch, Icon } from 'antd';
import PropTypes from 'prop-types';
import StandardTable from 'components/StandardTable';
import styles from './index.scss';
import Spacing from 'components/Spacing';

class DataList extends Component{
    constructor(props){
        super(props);
        this.state = {
            sortedInfo: null,
            filteredInfo: null,
        }
        this.onChange = this.onChange.bind(this);
        this.clearPaginateFilters = this.clearPaginateFilters.bind(this);
    }

    onChange(pagination, filters, sorter) {
        this.setState({
            sortedInfo: sorter,
            filteredInfo: filters,
        });
    }

    clearPaginateFilters(){
        this.setState({
            sortedInfo: null,
            filteredInfo: null,
        })
        this.props.onClear();
    }

    render(){
        let { sortedInfo, filteredInfo } = this.state;
        sortedInfo = sortedInfo || {};
        filteredInfo = filteredInfo || {};
        const { onPageChange, onUpdate, onShowModalEdit, onDelete, dataSource, loadingPaginate, loadingUpdate, total, pageSize, current } = this.props;
        const columns = [
            {
                title: 'Nombre',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: 'Estado',
                key: 'state',
                width: '60px',
                render: (a,record)=>(
                    <Switch size="small" loading={loadingUpdate} checked={a.state} onChange={checked=>onUpdate({id: a.id, state: checked})}/>
                )
            },
            {
                title: 'Accion',
                key: 'accion',
                width: '110px',
                render: (a, record)=>{
                    return (
                        <div className={styles.actions}>
                            <Tooltip title="Editar">
                                <Icon type="edit" className={styles.update} onClick={()=>onShowModalEdit('update',a)}/>
                            </Tooltip>
                            <Tooltip title="Eliminar">
                                <Icon type="delete" className={styles.delete} onClick={()=>{
                                    Modal.confirm({
                                        title: "¿Estás seguro de eliminar este registro?",
                                        content: a.name,
                                        okText: "SI",
                                        okType: 'danger',
                                        cancelText: "NO",
                                        onOk(){
                                            onDelete({id: a.id});
                                        }
                                    })
                                }}/>
                            </Tooltip>
                        </div>
                    )
                }
            }
        ];
    
        return (
            <div>
                <StandardTable 
                    columns={columns}
                    dataSource={dataSource}
                    loading={loadingPaginate}
                    pagination={false}
                    onChange={this.onChange}
                    minWidth={800}
                    // rowSelection={rowSelection}
                    rowKey={record=>record.id}/>
                <Spacing/>
                <Pagination 
                    showQuickJumper
                    total={total}
                    pageSize={pageSize}
                    defaultCurrent={1}
                    current={current}
                    showTotal={total => `Total ${total} items`}
                    onChange={onPageChange}/>
            </div>
        )
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
    current: PropTypes.any
};

export default DataList;