import createReactorMiddleware from 'State/middlewares/reactor';
import apiCall from './apiCall';
import noteSaved from './noteSaved';

export default createReactorMiddleware(apiCall, noteSaved);
