import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './Components/dashboard/dashboard';
//Components
import Login from './Components/Login';
import Categories from './Components/setup/categories';
import Register from './Components/Register'
import LandingPage from './Components/LandingPage';
import IncomePage from './Components/IncomePage';
import SetBudge from './Components/SetBudge';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/dashboard' component={Dashboard} />
          <Route path='/register' component={Register}/>
          <Route path='/landingPage' component={LandingPage}/>
          <Route path='/setBudge' component={SetBudge}/>
          <Route path='/incomePage' component={IncomePage}/>
          <Route path='/' component={Categories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
