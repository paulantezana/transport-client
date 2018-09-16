import { companyAll, companyCreate, companyUpdate, companyDelete, companySearch } from '../services/company';
import { Modal, message } from 'antd';
export default {
    namespace: 'company',
    state: {
        list: [],
        total: null,
        current: null,
        searchText: "",

        modalVisible: false,
        currentItem: {},
        modalType: 'create',

        searchResult: [],
    },
    effects: {
        *all({ payload }, { select, call, put }){
            const setting = yield select(({ global }) => global.setting); // Get setting item
            const response = yield call(companyAll,{...payload, limit: setting.item});
            if(response.success){
                yield put({type: 'allSuccess', payload: {
                    list: response.data,
                    total: response.total,
                    current: response.current_page,
                }})
            }else{
                Modal.error({title: 'Error al consultar el companyo', content: response.message});
            }
        },
        *search({ payload }, { call, put }){
            const response = yield call(companySearch,payload);
            if(response.success){
                yield put({type: 'searchSuccess', payload: response.data })
            }else{
                Modal.error({title: 'Error al consultar el companyo', content: response.message});
            }
        },
        *create({ payload }, { call, put }){
            const response = yield call(companyCreate,payload);
            if (response.success){
                yield put({type: 'resetcompany'});
                Modal.success({title: 'Crear companyo', content: response.message});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al crear companyo', content: response.message});
            }
        },
        *update({ payload }, { call, put }){
            const response = yield call(companyUpdate, payload);
            if (response.success){
                yield put({type: 'updateSuccess', payload})
                yield put({type: 'resetcompany'});
                message.success("Se actualizo el companyo con el id = "  + payload.id);
            }else{
                Modal.error({title: 'Error al actualizar el companyo', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(companyDelete, payload);
            if (response.success){
                yield put({type: 'resetcompany'});
                message.success("Se elimino el companyo con el id = "  + payload.id);
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al actualizar el companyo', content: response.message});
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
            const newList = state.list.map(company => company.id == payload.id ? {...company, ...payload} : company);
            return {...state, list: newList };
        },
        setSearchText(state, { payload }){
            return {...state, searchText: payload };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        resetcompany(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create'};
        },
    }
}