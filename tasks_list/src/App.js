
import './App.css';
import {Provider} from 'react-redux';
import store from './store/store';
import TasksList from './components/TasksList';

const App = () => {
  return (
   <Provider store={store}>
     <TasksList />
   </Provider>
  );
};

export default App;
