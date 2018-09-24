import { vehicleAll, vehicleCreate, vehicleUpdate, vehicleDelete, vehicleSearch } from '../services/vehicle';
import { Modal, message } from 'antd';
export default {
    namespace: 'vehicle',
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
            const response = yield call(vehicleAll,{...payload, limit: setting.item});
            if(response.success){
                yield put({type: 'allSuccess', payload: {
                    list: response.data,
                    total: response.total,
                    current: response.current_page,
                }})
            }else{
                Modal.error({title: 'Error al consultar el vehicleo', content: response.message});
            }
        },
        *search({ payload }, { call, put }){
            const response = yield call(vehicleSearch,payload);
            if(response.success){
                yield put({type: 'searchSuccess', payload: response.data })
            }else{
                Modal.error({title: 'Error al consultar el vehicleo', content: response.message});
            }
        },
        *create({ payload }, { call, put }){
            const response = yield call(vehicleCreate,payload);
            if (response.success){
                yield put({type: 'resetVehicle'});
                Modal.success({title: 'Crear vehicleo', content: response.message});
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al crear vehicleo', content: response.message});
            }
        },
        *update({ payload }, { call, put }){
            const response = yield call(vehicleUpdate, payload);
            if (response.success){
                yield put({type: 'updateSuccess', payload})
                yield put({type: 'resetVehicle'});
                message.success("Se actualizo el vehicleo con el id = "  + payload.id);
            }else{
                Modal.error({title: 'Error al actualizar el vehicleo', content: response.message});
            }
        },
        *delete({ payload }, { call, put }){
            const response = yield call(vehicleDelete, payload);
            if (response.success){
                yield put({type: 'resetVehicle'});
                message.success("Se elimino el vehicleo con el id = "  + payload.id);
                yield put({type: 'all'});
            }else{
                Modal.error({title: 'Error al actualizar el vehicleo', content: response.message});
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
            const newList = state.list.map(vehicle => vehicle.id == payload.id ? {...vehicle, ...payload} : vehicle);
            return {...state, list: newList };
        },
        setSearchText(state, { payload }){
            return {...state, searchText: payload };
        },
        showModal(state, { payload }){
            return {...state, ...payload, modalVisible: true };
        },
        resetVehicle(state, action){
            return {...state, currentItem: {}, modalVisible: false, modalType: 'create'};
        },
    }
}