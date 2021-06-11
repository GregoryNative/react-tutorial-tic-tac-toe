import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Game from './components/Game';
import reducers from './reducers';

const store = createStore(reducers);

export default function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}
