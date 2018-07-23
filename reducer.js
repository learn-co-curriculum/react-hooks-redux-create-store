let store, button;

function createStore(reducer) {
  let state;

  function dispatch(action) {
    state = reducer(state, action);
    if (store) render()
  }

  function getState() {
    return state;
  };

  dispatch({ type: '@@INIT' });

  return {
    dispatch,
    getState
  };
};

function changeCount(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREASE_COUNT':
      return { count: state.count + 1 };

    default:
      return state;
  }
}



function render() {
  let container = document.getElementById('container');
  container.textContent = store.getState().count;
};

store = createStore(changeCount) // createStore takes the changeCount reducer as an argument
button = document.getElementById('button');

button.addEventListener('click', function() {
  store.dispatch({ type: 'INCREASE_COUNT' });
});
