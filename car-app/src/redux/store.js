import { createStore } from 'redux';
import reducer from './reducers/buyAndSell'

const store = createStore(reducer);

export default store;