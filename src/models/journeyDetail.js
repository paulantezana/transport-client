import { journeyDetailUploadTemplate, 
    journeyDetailAllByCompanyID, 
    journeyDetailCreate, 
    journeyDetailUpdate, 
    journeyDetailDelete, 
    journeyDetailSearch 
} from '../services/journeyDetail';

import { Modal, message } from 'antd';
export default {
    namespace: 'journeyDetail',
    state: {
        list: [],
        total: null,
        current: null,
        searchText: "",

        modalVisible: false,
        currentItem: {},
        modalType: 'create',

        modalUploadVisible: false,

        searchResult: [],
    },
    effects: {
        *allByCompanyID({ payload }, { select, call, put }){
            const companyID = yield select(({ companyDetail }) => companyDetail.companyID); // Get setting item
            const setting = yield select(({ global }) => global.setting); // Get setting item
            const response = yield call(journeyDetailAllByCompanyID,{...payload, limit: setting.item, company_id: companyID});
            if(response.success){
                yield put({type: 'allSuccess', payload: {
                    list: response.data,
                    total: response.total,
                    current: response.current_page,
                }})
            }else{
                Modal.error({title: 'Error al consultar el journeyDetailo', content: response.message});
            }
        },
        *search({ payload }, { call, put }){
            const response = yield call(journeyDetailSearch,payload);
            if(response.success){
                yield put({type: 'searchSuccess', payload: response.data })
            }else{
                Modal.error({title: 'Error al consultar el journeyDetailo', content: response.message});
            }
        },
        *create({ payload }, { select, call, put }){
            const companyID = yield select(({ companyDetail }) => companyDetail.companyID); // Get setting item
            const response = yield call(journeyDetailCreate,{...payload, company_id: companyID });
            if (response.success){
                yield put({type: 'resetjourneyDetail'});
                Modal.success({title: 'Crear journeyDetailo', content: response.message});
                yield put({type: 'paginateByCompanyID'});
            }else{
                Modal.error({title: 'Error al crear journeyDetailo', content: response.message});
            }
        },
        *update({ payload }, { call, put }){
            const response = yield call(journeyDetailUpdate, payload);
            if (response.success){
                yield put({type: 'updateSuccess', payload})
                yield put({type: 'resetjourneyDetail'});
                message.success("Se actualizo el journeyDetailo con el id = "  + payload.id);
            }else{
                Modal.error({title: 'Error al actualizar el journeyDetailo', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(journeyDetailDelete, payload);
            if (response.success){
                yield put({type: 'resetJourneyDetail'});
                message.success("Se elimino el journeyDetailo con el id = "  + payload.id);
                yield put({type: 'paginateByCompanyID'});
            }else{
                Modal.error({title: 'Error al actualizar el journeyDetailo', content: response.message});
            }
        },
        *uploadJourneyDetail({ payload }, { call, put }){
            let data = new FormData();
            data.append('file',payload.file);
            const response = yield call(journeyDetailUploadTemplate,data);
            if (response.success){
                yield put({type: 'resetJourneyDetail'});
                Modal.success({title: 'Importar detalles de la ruta', content: response.message});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Algo salió mal', content: response.message});
            }
        },
    },
    reducers: {
        allSuccess(state, { payload }){
            return {...state, ...payload };
        },
        searchSuccess(state, { payload }){
            return {...state,  searchResult: payload };
        },
        updateSuccess(state, { payload }){
            const newList = state.list.map(journeyDetail => journeyDetail.id == payload.id ? {...journeyDetail, ...payload} : journeyDetail);
            return {...state, list: newList };
        },
        setSearchText(state, { payload }){
            return {...state, searchText: payload };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        resetJourneyDetail(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create'};
        },
        toggleModalUpload(state, { payload }){
            return {...state, modalUploadVisible: payload };
        },
    }
}