import React, { Component } from "react";
import { connect } from "dva";
import { Button, Input, Card } from 'antd';

import styles from './index.scss';
import List from './List';
import ModalForm from './Form';

const Search = Input.Search;

class Vehicle extends Component{
    constructor(props){
        super(props);
        this.onQueryAll = this.onQueryAll.bind(this);
    }
    componentDidMount(){
        this.onQueryAll();
    }
    onQueryAll(clear){
        const { dispatch, vehicle: {searchText} } = this.props;
        dispatch({
            type: 'vehicle/all',
            payload: {
                search: clear ? '' : searchText,
            }
        });
    }
    render(){
        const { dispatch, setting, vehicle, loadingAll, loadingUpdate} = this.props;
        const { onQueryAll } = this;
        const {
            list,
            total,
            current,
            searchText,
            currentItem,
        } = vehicle;

        const vehicleListProps = {
            current,
            total,
            pageSize: setting.item,
            dataSource: list,
            loadingAll: loadingAll,
            loadingUpdate: loadingUpdate,
            onPageChange(page){
                dispatch({
                    type:'vehicle/all',
                    payload:{
                        current_page: page,
                        search: searchText,
                    }
                });
            },
            onClear(){
                // Limpiar el campo search text
                dispatch({
                    type: 'vehicle/setSearchText',
                    payload: '',
                });
                // Query para mostrar todo los vehicleos
                onQueryAll(true);
            },
            onUpdate(param){
                dispatch({
                    type: 'vehicle/update',
                    payload: param
                });
            },
            onShowModalEdit(type, currentItem){
                onShowModal(type, currentItem)
            },
            onDelete(param){
                dispatch({
                    type: 'vehicle/delete',
                    payload: param,
                });
            },
        }

        const onShowModal = (modalType, currentItem = {})=>{
            dispatch({
                type: 'vehicle/showModal',
                payload: { currentItem, modalType },
            });
        }

        const onSearchText = (search)=>{
            dispatch({
                type: 'vehicle/setSearchText',
                payload: search
            });
        }

        return (
            <Card bordered={false}>
                <div className={styles.header}>
                    <Button icon="plus" type="primary" onClick={()=>onShowModal('create')}>Nuevo</Button>
                    <Button icon="reload" onClick={()=>this.onQueryAll()}></Button>
                    <Search placeholder="Buscar vehicleo" value={searchText} onChange={e=>onSearchText(e.target.value)} onSearch={value => this.onQueryAll()} style={{ width: 200 }}/>
                    <ModalForm/>
                </div>
                <List {...vehicleListProps}/>
            </Card>
        )
    }
}

const mapStateToProps = ({vehicle, global, loading}) => {
    return {
        vehicle,
        setting: global.setting,
        loadingAll: loading.effects['vehicle/all'],
        loadingUpdate: loading.effects['vehicle/update'],
    }
}

export default connect(mapStateToProps)(Vehicle);