import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Dashboard from './Components/dashboard/dashboard';

//Components
import Login from './Components/Login';
import Categories from './Components/setup/categories';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/' component={Categories} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
