import global from './global';
import user from './user';

const models = app => {
    app.model(global);
    app.model(user);
}

export default models;