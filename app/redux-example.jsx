var redux =  require('redux');

console.log('starting redux example');

var stateDefault = {
  name : 'Anonymous',
  hobbies : [],
  movies : []
};
var nextHobbyId = 1;
var nextMovieId = 1;

var reducer = (state = stateDefault, action) => {
  //state = state || {name : 'Anonymous'} //es5

  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.name
      };
    case 'ADD_HOBBY':
      return {
        ...state,
        hobbies: [
          ...state.hobbies,
          {
            id : nextHobbyId++,
            hobby :action.hobby,
            genre :action.genre
          }
        ]
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies : [
          ...state.movies,
          {
            id : nextMovieId++,
            movie_name : action.name,

          }
        ]
      };
    case 'REMOVE_HOBBY':
      return {
        ...state,
        hobbies : state.hobbies.filter((hobby) => hobby.id !== action.id)
      };
    case 'REMOVE_MOVIE':
      return {
        ...state,
        movies : state.movies.filter((movie) => movie.id !== action.id)
      }
    default:
      return state;
  }

};

var store = redux.createStore(reducer, redux.compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

// Subscribe to changes
var unsubscribe = store.subscribe(() => {
  var state = store.getState();

  console.log('Name is ', state.name);
  document.getElementById('app').innerHTML = state.name;
  console.log('New State ' , store.getState() );

});

var currentState = store.getState();
console.log('currentState ' , currentState );


store.dispatch({
  type : 'CHANGE_NAME',
  name : 'Haswin'
});

// unsubscribe(); // store.subscribe RETURNS  a method which when called will unsubscribe.

store.dispatch({
  type : 'ADD_HOBBY',
  hobby : 'Running'
});

store.dispatch({
  type : 'ADD_HOBBY',
  hobby : 'Swim'
});

store.dispatch({
  type : 'ADD_HOBBY',
  hobby : 'Walking'
});

store.dispatch({
  type : 'REMOVE_HOBBY',
  id : 2
});


store.dispatch({
  type : 'ADD_MOVIE',
  name : 'Star Wars',
  genre : 'sci-fi'
});

store.dispatch({
  type : 'CHANGE_NAME',
  name : 'Andrew'
});

store.dispatch({
  type : 'ADD_MOVIE',
  name : 'South Park',
  genre : 'comedy'
});

store.dispatch({
  type : 'ADD_MOVIE',
  name : 'Star Wars 3',
  genre : 'sci-fi'
});


store.dispatch({
  type : 'REMOVE_MOVIE',
  id : 2
});
