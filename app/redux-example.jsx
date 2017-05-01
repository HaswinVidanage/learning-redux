var redux =  require('redux');

console.log('starting redux example');

var actions = require('./actions/index');
var store = require('./store/configureStore').configure();

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is ', state.name);


  if(state.map.isFetching){
    document.getElementById('app').innerHTML = 'Loading...';
  } else if (state.map.url){
    document.getElementById('app').innerHTML = '<a target="_blank" href ="'+state.map.url+ '">View your location</a>';
  }

  console.log('New State ' , store.getState() );

});

var currentState = store.getState();
console.log('currentState ' , currentState );
store.dispatch(actions.fetchLocation());
store.dispatch(actions.changeName('Haswin'));
store.dispatch(actions.addHobbie('Running'));
store.dispatch(actions.addHobbie('Swimming'));
store.dispatch(actions.addHobbie('Walking'));
store.dispatch(actions.removeHobby(2));
store.dispatch(actions.addMovie('Star Wars 99', 'sci-fi'));
store.dispatch(actions.changeName('Andrew'));
store.dispatch(actions.addMovie('South Park', 'Comedy'));
store.dispatch(actions.addMovie('Batman v Superman', 'fiction'));
store.dispatch(actions.removeMovie(2));
store.dispatch(actions.removeMovie(3));
store.dispatch(actions.changeName('Devanjith'));
