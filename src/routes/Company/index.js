import React, { Component } from "react";
import { connect } from "dva";
import { Button, Input, Card } from 'antd';

import styles from './index.scss';
import List from './List';
import ModalForm from './Form';

const Search = Input.Search;

class Company extends Component{
    constructor(props){
        super(props);
        this.onQueryAll = this.onQueryAll.bind(this);
    }
    componentDidMount(){
        this.onQueryAll();
    }
    onQueryAll(clear){
        const { dispatch, company: {searchText} } = this.props;
        dispatch({
            type: 'company/all',
            payload: {
                search: clear ? '' : searchText,
            }
        });
    }
    render(){
        const { dispatch, setting, company, loadingAll, loadingUpdate} = this.props;
        const { onQueryAll } = this;
        const {
            list,
            total,
            current,
            searchText,
            currentItem,
        } = company;

        const companyListProps = {
            current,
            total,
            pageSize: setting.item,
            dataSource: list,
            loadingAll: loadingAll,
            loadingUpdate: loadingUpdate,
            onPageChange(page){
                dispatch({
                    type:'company/all',
                    payload:{
                        current_page: page,
                        search: searchText,
                    }
                });
            },
            onClear(){
                // Limpiar el campo search text
                dispatch({
                    type: 'company/setSearchText',
                    payload: '',
                });
                // Query para mostrar todo los companyos
                onQueryAll(true);
            },
            onUpdate(param){
                dispatch({
                    type: 'company/update',
                    payload: param
                });
            },
            onShowModalEdit(type, currentItem){
                onShowModal(type, currentItem)
            },
            onDelete(param){
                dispatch({
                    type: 'company/delete',
                    payload: param,
                });
            },
        }

        const onShowModal = (modalType, currentItem = {})=>{
            dispatch({
                type: 'company/showModal',
                payload: { currentItem, modalType },
            });
        }

        const onSearchText = (search)=>{
            dispatch({
                type: 'company/setSearchText',
                payload: search
            });
        }

        return (
            <Card bordered={false}>
                <div className={styles.header}>
                    <Button icon="plus" type="primary" onClick={()=>onShowModal('create')}>Nuevo</Button>
                    <Button icon="reload" onClick={()=>this.onQueryAll()}></Button>
                    <Search placeholder="Buscar companyo" value={searchText} onChange={e=>onSearchText(e.target.value)} onSearch={value => this.onQueryAll()} style={{ width: 200 }}/>
                    <ModalForm/>
                </div>
                <List {...companyListProps}/>
            </Card>
        )
    }
}

const mapStateToProps = ({company, global, loading}) => {
    return {
        company,
        setting: global.setting,
        loadingAll: loading.effects['company/all'],
        loadingUpdate: loading.effects['company/update'],
    }
}

export default connect(mapStateToProps)(Company);