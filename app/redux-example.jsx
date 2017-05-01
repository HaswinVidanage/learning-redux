var redux =  require('redux');

console.log('starting redux example');

//Name reducer and action generators
//----------------------------------
var nameReducer = (state= "Anonymous", action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};

var changeName = (name) => {
  return {
    type : 'CHANGE_NAME',
    name
  }
};

//Hobbies reducer and action generators
//----------------------------------
var nextHobbyId = 1;
var hobbiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_HOBBY':
      return [
          ...state,
          {
            id : nextHobbyId++,
            hobby :action.hobby,
            genre :action.genre
          }
        ];
    case 'REMOVE_HOBBY':
      return state.filter((hobby) => hobby.id !== action.id);
    default:
      return state;
  }
};

//action generators
var addHobbie = (hobby) => {
  return {
    type : 'ADD_HOBBY',
    hobby
  }
};

var removeHobby = (id) => {
  return {
    type : 'REMOVE_HOBBY',
    id
  }
};

//Movies reducer and action generators
//----------------------------------
var nextMovieId = 1;
var moviesReducer = (state = [], action)=> {
  switch (action.type) {
    case 'ADD_MOVIE':
      return [
        ...state,
        {
          id : nextMovieId++,
          movie_name : action.name,
        }
      ];
    case 'REMOVE_MOVIE':
      return state.filter((movie) => movie.id !== action.id);
    default:
      return state;

  }
};

var addMovie = (name, genre) => {
    return {
      type : 'ADD_MOVIE',
      name,
      genre
    }
};

var removeMovie = (id) => {
  return {
    type : 'REMOVE_MOVIE',
    id
  }
};

var reducer = redux.combineReducers({
  name : nameReducer,
  hobbies : hobbiesReducer,
  movies : moviesReducer
});

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


// store.dispatch({
//   type : 'CHANGE_NAME',
//   name : 'Haswin'
// });

store.dispatch(changeName('Haswin'));



// unsubscribe(); // store.subscribe RETURNS  a method which when called will unsubscribe.

// store.dispatch({
//   type : 'ADD_HOBBY',
//   hobby : 'Running'
// });

store.dispatch(addHobbie('Running'));

store.dispatch(addHobbie('Swimming'));

store.dispatch(addHobbie('Walking'));

store.dispatch(removeHobby(2));

store.dispatch(addMovie('Star Wars 99', 'sci-fi'));

store.dispatch(changeName('Andrew'));

store.dispatch(addMovie('South Park', 'Comedy'));

store.dispatch(addMovie('Batman v Superman', 'fiction'));

store.dispatch(removeMovie(2));

store.dispatch(removeMovie(3));

store.dispatch(changeName('Devanjith'));
