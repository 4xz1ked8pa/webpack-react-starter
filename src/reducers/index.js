import { combineReducers } from 'redux';
import todos from './todos';

const App = combineReducers({
  todos
});

export default App;
