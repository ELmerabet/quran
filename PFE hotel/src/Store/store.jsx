import { createStore} from 'redux';
import dataReducer from './reducer';

const store = createStore(
  dataReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;