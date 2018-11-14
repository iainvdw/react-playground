import auth from './auth/sagas';

const sagas = [auth];

export default sagaMiddleware => sagas.forEach(sagaMiddleware.run.bind(sagaMiddleware));
