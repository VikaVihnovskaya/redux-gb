
import './App.css';
import { store } from './store/store';
import { Provider} from 'react-redux';
import { ThemeToggle} from './components/ThemeToggle';

const App = () => {
  return (
      <Provider store={store}>
        <ThemeToggle/>
      </Provider>
  )
}

export default App;
