import { categoryAll, categoryCreate, categoryUpdate, categoryDelete, categorySearch } from '../services/category';
import { Modal, message } from 'antd';
export default {
    namespace: 'category',
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
            const response = yield call(categoryAll,{...payload, limit: setting.item});
            if(response.success){
                yield put({type: 'allSuccess', payload: {
                    list: response.data,
                    total: response.total,
                    current: response.current_page,
                }})
            }else{
                Modal.error({title: 'Error al consultar el categoryo', content: response.message});
            }
        },
        *search({ payload }, { call, put }){
            const response = yield call(categorySearch,payload);
            if(response.success){
                yield put({type: 'searchSuccess', payload: response.data })
            }else{
                Modal.error({title: 'Error al consultar el categoryo', content: response.message});
            }
        },
        *create({ payload }, { call, put }){
            const response = yield call(categoryCreate,payload);
            if (response.success){
                yield put({type: 'resetcategory'});
                Modal.success({title: 'Crear categoryo', content: response.message});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al crear categoryo', content: response.message});
            }
        },
        *update({ payload }, { call, put }){
            const response = yield call(categoryUpdate, payload);
            if (response.success){
                yield put({type: 'updateSuccess', payload})
                yield put({type: 'resetcategory'});
                message.success("Se actualizo el categoryo con el id = "  + payload.id);
            }else{
                Modal.error({title: 'Error al actualizar el categoryo', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(categoryDelete, payload);
            if (response.success){
                yield put({type: 'resetcategory'});
                message.success("Se elimino el categoryo con el id = "  + payload.id);
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al actualizar el categoryo', content: response.message});
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
            const newList = state.list.map(category => category.id == payload.id ? {...category, ...payload} : category);
            return {...state, list: newList };
        },
        setSearchText(state, { payload }){
            return {...state, searchText: payload };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        resetcategory(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create'};
        },
    }
}