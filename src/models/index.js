import global from './global';
import user from './user';
import mobile from './mobile';
import category from './category';
import company from './company';

const models = app => {
    app.model(global);
    app.model(user);
    app.model(mobile);
    app.model(category);
    app.model(company);
}

export default models;