import {
    journeyAllByCompanyID,
    journeyCreate,
    journeyUpdate,
    journeyDelete,
    journeySearch,
} from '@/services/journey';
import { Modal, message } from 'antd';
export default {
    namespace: 'journey',
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
        *allByCompanyID({ payload }, { select, call, put }) {
            const companyID = yield select(({ companyDetail }) => companyDetail.companyID); // Get setting item
            const response = yield call(journeyAllByCompanyID, {
                ...payload,
                company_id: companyID,
            });
            if (response.success) {
                yield put({
                    type: 'allSuccess',
                    payload: {
                        list: response.data,
                    },
                });
            } else {
                Modal.error({ title: 'Error al consultar el journeyo', content: response.message });
            }
        },
        *search({ payload }, { call, put }) {
            const response = yield call(journeySearch, payload);
            if (response.success) {
                yield put({ type: 'searchSuccess', payload: response.data });
            } else {
                Modal.error({ title: 'Error al consultar el journeyo', content: response.message });
            }
        },
        *create({ payload }, { select, call, put }) {
            const companyID = yield select(({ companyDetail }) => companyDetail.companyID); // Get setting item
            const response = yield call(journeyCreate, { ...payload, company_id: companyID });
            if (response.success) {
                yield put({ type: 'resetJourney' });
                Modal.success({ title: 'Crear journeyo', content: response.message });
                yield put({ type: 'allByCompanyID' });
            } else {
                Modal.error({ title: 'Error al crear journeyo', content: response.message });
            }
        },
        *update({ payload }, { call, put }) {
            const response = yield call(journeyUpdate, payload);
            if (response.success) {
                yield put({ type: 'updateSuccess', payload });
                yield put({ type: 'resetJourney' });
                message.success('Se actualizo el journeyo con el id = ' + payload.id);
            } else {
                Modal.error({
                    title: 'Error al actualizar el journeyo',
                    content: response.message,
                });
            }
        },
        *delete({ payload }, { call, put }) {
            const response = yield call(journeyDelete, payload);
            if (response.success) {
                yield put({ type: 'resetJourney' });
                message.success('Se elimino el journeyo con el id = ' + payload.id);
                yield put({ type: 'allByCompanyID' });
            } else {
                Modal.error({
                    title: 'Error al actualizar el journeyo',
                    content: response.message,
                });
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
                journey => (journey.id == payload.id ? { ...journey, ...payload } : journey)
            );
            return { ...state, list: newList };
        },
        setSearchText(state, { payload }) {
            return { ...state, searchText: payload };
        },
        showModal(state, { payload }) {
            return { ...state, ...payload, modalVisible: true };
        },
        resetJourney(state, action) {
            return { ...state, currentItem: {}, modalVisible: false, modalType: 'create' };
        },
    },
};
