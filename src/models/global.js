import { settingGlobal, settingUpdate, settingUploadLogo } from '../services/setting';
import { userUpdate } from '../services/user';
import { getAuthorityUser } from 'utilities/authority';
import { message } from 'antd';

export default {
    namespace: 'global',
  
    state: {
      collapsed: false,
      setting: {},
      user: {},
      success: false,
    },
    effects: {
        *globalSetting({ payload }, { call, put }){
            const tokenUser = getAuthorityUser();
            const response = yield call(settingGlobal,{ id: tokenUser.user.id });
            if (response.success){
                yield put({ type: 'settingSuccess', payload: response });
            }
        },
        *updateSetting({ payload }, { call, put }){
            const response = yield call(settingUpdate, payload);
            if(response.success){
                yield put({
                    type: 'updateSettingSuccess',
                    payload
                });
            }
        },
        *updateProfile({ payload }, { select, call, put }){
            const user = yield select(({ global }) => global.user);
            const response = yield call(userUpdate, {...payload, state: user.state });
            if(response.success){
                yield put({
                    type: 'updateProfileSuccess',
                    payload
                });
            }
        },
        *uploadLogo({ payload }, { call, put }){
            let data = new FormData();
            data.append('logo',payload.logo);
            data.append('id',payload.id);
            const response = yield call(settingUploadLogo,data);
            if (response.success){
                message.success(response.message);
            }else{
                Modal.error({title: 'Error subir el logo principal', content: response.message});
            }
        },
    },
    reducers: {
        changeLayoutCollapsed(state, { payload }) {
            return {...state, collapsed: payload };
        },
        settingSuccess(state, { payload }){
            return {
                ...state,
                setting: payload.setting,
                user: payload.user,
                success: payload.success
            }
        },
        updateProfileSuccess(state, action){
            return {...state, user: Object.assign({},state.user,action.payload) };
        },
        updateSettingSuccess(state, action){
            return {...state, setting: Object.assign({},state.setting,action.payload) };
        },
    }
}