import React, { Component } from "react";
import { connect } from "dva";
import { Button, Input, Card } from 'antd';

import styles from './index.scss';
import List from './List';
import ModalForm from './Form';

const Search = Input.Search;

class Category extends Component{
    constructor(props){
        super(props);
        this.onQueryAll = this.onQueryAll.bind(this);
    }
    componentDidMount(){
        this.onQueryAll();
    }
    onQueryAll(clear){
        const { dispatch, category: {searchText} } = this.props;
        dispatch({
            type: 'category/all',
            payload: {
                search: clear ? '' : searchText,
            }
        });
    }
    render(){
        const { dispatch, setting, category, loadingAll, loadingUpdate} = this.props;
        const { onQueryAll } = this;
        const {
            list,
            total,
            current,
            searchText,
            currentItem,
        } = category;

        const categoryListProps = {
            current,
            total,
            pageSize: setting.item,
            dataSource: list,
            loadingAll: loadingAll,
            loadingUpdate: loadingUpdate,
            onPageChange(page){
                dispatch({
                    type:'category/all',
                    payload:{
                        current_page: page,
                        search: searchText,
                    }
                });
            },
            onClear(){
                // Limpiar el campo search text
                dispatch({
                    type: 'category/setSearchText',
                    payload: '',
                });
                // Query para mostrar todo los categoryos
                onQueryAll(true);
            },
            onUpdate(param){
                dispatch({
                    type: 'category/update',
                    payload: param
                });
            },
            onShowModalEdit(type, currentItem){
                onShowModal(type, currentItem)
            },
            onDelete(param){
                dispatch({
                    type: 'category/delete',
                    payload: param,
                });
            },
        }

        const onShowModal = (modalType, currentItem = {})=>{
            dispatch({
                type: 'category/showModal',
                payload: { currentItem, modalType },
            });
        }

        const onSearchText = (search)=>{
            dispatch({
                type: 'category/setSearchText',
                payload: search
            });
        }

        return (
            <Card bordered={false}>
                <div className={styles.header}>
                    <Button icon="plus" type="primary" onClick={()=>onShowModal('create')}>Nuevo</Button>
                    <Button icon="reload" onClick={()=>this.onQueryAll()}></Button>
                    <Search placeholder="Buscar categoryo" value={searchText} onChange={e=>onSearchText(e.target.value)} onSearch={value => this.onQueryAll()} style={{ width: 200 }}/>
                    <ModalForm/>
                </div>
                <List {...categoryListProps}/>
            </Card>
        )
    }
}

const mapStateToProps = ({category, global, loading}) => {
    return {
        category,
        setting: global.setting,
        loadingAll: loading.effects['category/all'],
        loadingUpdate: loading.effects['category/update'],
    }
}

export default connect(mapStateToProps)(Category);