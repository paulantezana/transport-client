import { Modal } from 'antd';
import { routerRedux } from 'dva/router';
import { companyById } from '../services/company';

export default {
    namespace: 'companyDetail',
    state: {
        currentCompany: {},
        companyID: 0,
    },
    subscriptions: {
        setup({dispatch, history}) {
            history.listen(location => {
                let index = location.pathname.indexOf('/',location.pathname.indexOf('detail'));
                let param =  location.pathname.substring(index + 1);
                if (location.pathname == `/companies/detail/${param}`) {
                    if(/^[0-9]*$/.exec(param)){
                        dispatch({
                            type: 'setupApp',
                            payload: parseInt(param),
                        });
                    }else{
                        dispatch(routerRedux.push('/exception/404'));
                    }
                }
            });
        },
    },
    effects: {
        *setupApp({ payload }, { put }){
            yield put({type: 'companyIDSuccess', payload});
            yield put({type: 'getcompanyByID', payload});
        },
        *getcompanyByID({ payload }, { call, put }){
            const response = yield call(companyById, { id: payload});
            if(response.success){
                yield put({type: 'companyByIDSuccess', payload: response.data })
            }else{
                Modal.error({title: 'Algo salió mal', content: response.message});
            }
        },
    },
    reducers: {
        companyByIDSuccess(state, { payload }){
            return {...state, currentCompany: payload };
        },
        companyIDSuccess(state, { payload }){
            return {...state, companyID: payload };
        },
    }
}