import { categoryAll, categoryCreate, categoryUpdate, categoryDelete } from '../services/category';
import { Modal, message } from 'antd';
import { categorize } from 'utilities/utils';
export default {
    namespace: 'category',
    state: {
        list: [],
        categories: [],

        modalVisible: false,
        currentItem: {},
        modalType: 'create',
    },
    effects: {
        *all({ payload }, { select, call, put }){
            const response = yield call(categoryAll);
            if(response.success){
                if(payload.tree){
                    let newData = categorize(response.data);
                    yield put({ type: 'allSuccess', payload: {
                        list: newData,
                    }});
                }else{
                    yield put({ type: 'allSuccess', payload: {
                        categories: response.data,
                    }});
                }
            }else{
                Modal.error({title: 'Error al consultar el categoryo', content: response.message});
            }
        },
        *create({ payload }, { call, put }){
            const response = yield call(categoryCreate,payload);
            if (response.success){
                yield put({type: 'resetCategory'});
                Modal.success({title: 'Crear categoryo', content: response.message});
                yield put({type: 'all',payload: { tree: true }});
            }else{
                Modal.error({title: 'Error al crear categoryo', content: response.message});
            }
        },
        *update({ payload }, { call, put }){
            const response = yield call(categoryUpdate, payload);
            if (response.success){
                yield put({type: 'resetCategory'});
                message.success("Se actualizo el categoryo con el id = "  + payload.id);
                yield put({type: 'all',payload: { tree: true }});
            }else{
                Modal.error({title: 'Error al actualizar el categoryo', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(categoryDelete, payload);
            if (response.success){
                yield put({type: 'resetCategory'});
                message.success("Se elimino el categoryo con el id = "  + payload.id);
                yield put({type: 'all',payload: { tree: true }});
            }else{
                Modal.error({title: 'Error al actualizar el categoryo', content: response.message});
            }
        },
    },
    reducers: {
        allSuccess(state, { payload }){
            return {...state, ...payload };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        resetCategory(state, action){
            return {...state, currentItem: {}, categories: [], modalVisible: false, modalType: 'create'};
        },
    }
}