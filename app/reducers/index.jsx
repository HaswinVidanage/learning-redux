//Name reducer and action generators
//----------------------------------
export var nameReducer = (state= "Anonymous", action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.name;
    default:
      return state;
  }
};


//Hobbies reducer and action generators
//----------------------------------
export var nextHobbyId = 1;
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

//Movies reducer and action generators
//----------------------------------
export var nextMovieId = 1;
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

//Map reducer and action generators
//---
export var mapReducer = (state = {isFetching: false, url: undefined }, action) => {
  switch (action.type) {
    case 'START_LOCATION_FETCH':
        return {
          isFetching: true,
          url: undefined
        };
    case 'COMPLETE_LOCATION_FETCH':
        return {
          isFetching: false,
          url: action.url
        };
    default:
        return state;

  }
};
