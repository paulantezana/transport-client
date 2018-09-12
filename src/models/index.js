import global from './global';
import user from './user';
import mobile from './mobile';

const models = app => {
    app.model(global);
    app.model(user);
    app.model(mobile);
}

export default models;