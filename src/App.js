import { Router } from 'react-router-dom';
import 'antd/dist/antd.css';

import Routes from './routes';
import history from './services/history';


const App = () => (
  <Router history={history}>
    <Routes />
  </Router>
);

export default App;
