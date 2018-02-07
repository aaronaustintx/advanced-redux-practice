// import store from "./store";
// import {Provider} from 'react-redux';
import {combineReducers} from 'redux';

function newComments(state = 0,action){
 return state;
}

function newTasks(state = 0,action){
    return state;
}
function newOrders(state = 0,action){
    return state;
}
function newTickets(state = 0,action){
    return state;
}

const rootReducer = combineReducers({
 newComments, newTasks, newOrders
});
export default rootReducer;



// ReactDOM.render(
//  <Provider store={store}><App /></Provider>,
//  document.getElementById('root')
// );

