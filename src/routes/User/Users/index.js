import React, { Component } from "react";
import { connect } from "dva";
import { message, Button, Input, Tooltip, Pagination, Modal, Card } from 'antd';

import styles from './index.scss';
import List from './List';
import ModalForm from './Form';

const Search = Input.Search;

const genUsers = ({dispatch, setting, user, loading})=>{
    const {
        list,
        total,
        current,
        searchText,
    } = user;
    const providerListProps = {
        current,
        total,
        setting,
        pageSize: setting.item,
        dataSource: list,
        loading: false,
        onPageChange(page){
            dispatch({
            	type:'user/all',
				payload:{
                    current_page: page,
                    search: searchText,
                }
			});
        },
        onClear(){
            dispatch({
                type: 'user/search',
                payload: '',
            });
            onQueryAll(true);
        },
        onUpdate(param){
            dispatch({
                type: 'user/update',
                payload: param
            });
        },
        onShowModalEdit(type, currentItem){
            onShowModal(type, currentItem)
        },
        onDelete(param){
            dispatch({
                type: 'user/delete',
                payload: param,
            });
        },
    }

    const onQueryAll = (clear)=> {
        dispatch({
            type: 'user/all',
            payload: {
                search: clear ? '' : searchText,
            }
        });
    }

    const onShowModal = (modalType, currentItem = {})=>{
        dispatch({
            type: 'user/showModal',
            payload: { currentItem, modalType },
        });
    }

    const onSearch = (search)=>{
        dispatch({
            type: 'user/search',
            payload: search
        });
    }

    return (
        <Card bordered={false}>
            <div className={styles.header}>
                <div className={styles.group}>
                    <Button icon="plus" type="primary" onClick={()=>onShowModal('create')}>Nuevo usuario</Button>
                    <Button icon="reload" onClick={()=>onQueryAll()}>Actualizar</Button>
                    <Search placeholder="Buscar usuario" value={searchText} onChange={e=>onSearch(e.target.value)} onSearch={value => onQueryAll()} style={{ width: 200 }}/>
                </div>
                <ModalForm/>
            </div>
            <List {...providerListProps}/>
        </Card>
    )
}

class User extends Component{
    componentDidMount(){
        const { dispatch, setting } = this.props;
        dispatch({
            type: 'user/all',
        });
    }
    render(){
        return genUsers(this.props);
    }
}


const mapStateToProps = ({ user, global, loading}) => {
    return {
        user,
        setting: global.setting,
        loading: loading.effects,
    }
}

export default connect(mapStateToProps)(User);