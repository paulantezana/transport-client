import {
    mobileAll,
    mobileCreate,
    mobileUpdate,
    mobileDelete,
    mobileSearch,
} from '@/services/mobile';
import { Modal, message } from 'antd';
export default {
    namespace: 'mobile',
    state: {
        list: [],
        total: null,
        current: null,
        searchText: '',

        modalVisible: false,
        currentItem: {},
        modalType: 'create',

        searchResult: [],
    },
    effects: {
        *all({ payload }, { select, call, put }) {
            const setting = yield select(({ global }) => global.setting); // Get setting item
            const response = yield call(mobileAll, { ...payload, limit: setting.item });
            if (response.success) {
                yield put({
                    type: 'allSuccess',
                    payload: {
                        list: response.data,
                        total: response.total,
                        current: response.current_page,
                    },
                });
            } else {
                Modal.error({ title: 'Error al consultar el mobileo', content: response.message });
            }
        },
        *search({ payload }, { call, put }) {
            const response = yield call(mobileSearch, payload);
            if (response.success) {
                yield put({ type: 'searchSuccess', payload: response.data });
            } else {
                Modal.error({ title: 'Error al consultar el mobileo', content: response.message });
            }
        },
        *create({ payload }, { call, put }) {
            const response = yield call(mobileCreate, payload);
            if (response.success) {
                yield put({ type: 'resetmobile' });
                Modal.success({ title: 'Crear mobileo', content: response.message });
                yield put({ type: 'all' });
            } else {
                Modal.error({ title: 'Error al crear mobileo', content: response.message });
            }
        },
        *update({ payload }, { call, put }) {
            const response = yield call(mobileUpdate, payload);
            if (response.success) {
                yield put({ type: 'updateSuccess', payload });
                yield put({ type: 'resetmobile' });
                message.success('Se actualizo el mobileo con el id = ' + payload.id);
            } else {
                Modal.error({ title: 'Error al actualizar el mobileo', content: response.message });
            }
        },
        *delete({ payload }, { call, put }) {
            const response = yield call(mobileDelete, payload);
            if (response.success) {
                yield put({ type: 'resetmobile' });
                message.success('Se elimino el mobileo con el id = ' + payload.id);
                yield put({ type: 'all' });
            } else {
                Modal.error({ title: 'Error al actualizar el mobileo', content: response.message });
            }
        },
    },
    reducers: {
        allSuccess(state, { payload }) {
            return { ...state, ...payload };
        },
        searchSuccess(state, { payload }) {
            return { ...state, searchResult: payload };
        },
        updateSuccess(state, { payload }) {
            const newList = state.list.map(
                mobile => (mobile.id == payload.id ? { ...mobile, ...payload } : mobile)
            );
            return { ...state, list: newList };
        },
        setSearchText(state, { payload }) {
            return { ...state, searchText: payload };
        },
        showModal(state, { payload }) {
            return { ...state, ...payload, modalVisible: true };
        },
        resetmobile(state, action) {
            return { ...state, currentItem: {}, modalVisible: false, modalType: 'create' };
        },
    },
};
