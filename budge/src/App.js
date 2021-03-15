import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'

//Components
import Login from './Components/Login'
import Register from './Components/Register'
import LandingPage from './Components/LandingPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login">
            <Login/>
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/">
          <LandingPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
