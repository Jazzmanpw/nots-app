import createReactorMiddleware from 'State/middlewares/reactor';
import apiCall from './apiCall';

export default createReactorMiddleware(apiCall);
