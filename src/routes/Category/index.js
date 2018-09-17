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
        this.onQueryPaginate = this.onQueryPaginate.bind(this);
    }
    componentDidMount(){
        this.onQueryPaginate();
    }
    onQueryPaginate(clear){
        const { dispatch, category: {searchText} } = this.props;
        dispatch({
            type: 'category/paginate',
            payload: {
                search: clear ? '' : searchText,
            }
        });
    }
    render(){
        const { dispatch, setting, category, loadingPaginate, loadingUpdate} = this.props;
        const { onQueryPaginate } = this;
        const {
            list,
            total,
            current,
            searchText,
        } = category;

        const categoryListProps = {
            current,
            total,
            pageSize: setting.item,
            dataSource: list,
            loadingPaginate: loadingPaginate,
            loadingUpdate: loadingUpdate,
            onPageChange(page){
                dispatch({
                    type:'category/paginate',
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
                onQueryPaginate(true);
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
            dispatch({
                type: 'category/all',
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
                    <Button icon="reload" onClick={()=>this.onQueryPaginate()}></Button>
                    <Search placeholder="Buscar categoria" value={searchText} onChange={e=>onSearchText(e.target.value)} onSearch={value => this.onQueryPaginate()} style={{ width: 200 }}/>
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
        loadingPaginate: loading.effects['category/paginate'],
        loadingUpdate: loading.effects['category/update'],
    }
}

export default connect(mapStateToProps)(Category);