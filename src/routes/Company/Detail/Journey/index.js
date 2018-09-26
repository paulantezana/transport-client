import React, { Component, Fragment } from "react";
import { connect } from "dva";
import { Button, Input, Card } from 'antd';

import styles from './index.scss';
import List from './List';
import ModalForm from './Form';
import Map from './map';

import Spacing from 'components/Spacing';

import UploadModal from './UploadModal';

class Journey extends Component{
    constructor(props){
        super(props);
        this.onQueryAllByCompanyID = this.onQueryAllByCompanyID.bind(this);
    }
    componentDidMount(){
        this.onQueryAllByCompanyID();
    }
    onQueryAllByCompanyID(clear){
        const { dispatch, journey: {searchText} } = this.props;
        dispatch({
            type: 'journey/allByCompanyID',
            payload: {
                search: clear ? '' : searchText,
            }
        });
    }
    render(){
        const { dispatch, setting, journey, loadingAllByCompanyID, loadingUpdate} = this.props;
        const { onQueryAllByCompanyID } = this;
        const {
            list,
            total,
            current,
            searchText,
            currentItem,
        } = journey;

        const journeyListProps = {
            current,
            total,
            pageSize: setting.item,
            dataSource: list,
            loadingAllByCompanyID: loadingAllByCompanyID,
            loadingUpdate: loadingUpdate,
            onPageChange(page){
                dispatch({
                    type:'journey/allByCompanyID',
                    payload:{
                        current_page: page,
                        search: searchText,
                    }
                });
            },
            onClear(){
                // Limpiar el campo search text
                dispatch({
                    type: 'journey/setSearchText',
                    payload: '',
                });
                // Query para mostrar todo los journeyos
                onQueryAllByCompanyID(true);
            },
            onUpdate(param){
                dispatch({
                    type: 'journey/update',
                    payload: param
                });
            },
            onShowModalEdit(type, currentItem){
                onShowModal(type, currentItem)
            },
            onDelete(param){
                dispatch({
                    type: 'journey/delete',
                    payload: param,
                });
            },
        }

        const onShowModal = (modalType, currentItem = {})=>{
            dispatch({
                type: 'journey/showModal',
                payload: { currentItem, modalType },
            });
        }

        // Show modal upload
        const onShowModalUpload = ()=>{
            dispatch({
                type: 'journeyDetail/toggleModalUpload',
                payload: true,
            });
        }

        return (
            <Fragment>
                <List {...journeyListProps}/>
                <div className={styles.header}>
                    <Button icon="plus" type="primary" onClick={()=>onShowModal('create')}>Nuevo</Button>
                    <Button icon="reload" onClick={()=>this.onQueryAllByCompanyID()}></Button>
                    <ModalForm/>
                </div>
                <Map/>
                <Spacing/>
                <Button type="primary" icon="cloud-upload" onClick={()=>onShowModalUpload()}>Upload</Button>
                <UploadModal/>
            </Fragment>
        )
    }
}

const mapStateToProps = ({journey, global, loading}) => {
    return {
        journey,
        setting: global.setting,
        loadingAllByCompanyID: loading.effects['journey/allByCompanyID'],
        loadingUpdate: loading.effects['journey/update'],
    }
}

export default connect(mapStateToProps)(Journey);