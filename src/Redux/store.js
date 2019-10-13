//@ Loading Modules
import { createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from './Redux/index';

const middleware=[thunk];
const initailState={};
//@ Creating store
const store=createStore(
    RootReducer,
    initailState,
    compose(applyMiddleware(...middleware),
                            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() ) 
                    );

//@ exporting store
export default store;
