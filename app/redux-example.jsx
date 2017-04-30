var redux =  require('redux');

console.log('starting redux example');

var reducer = (state = {name : 'Anonymous'}, action) => {
  //state = state || {name : 'Anonymous'} //es5
  
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    default:
      return state;
  }

};

var store = redux.createStore(reducer);

var currentState = store.getState();
console.log('currentState ' , currentState );




store.dispatch({
  type : 'CHANGE_NAME',
  name : 'Haswin'
});
console.log('Name should be Haswin', store.getState());
