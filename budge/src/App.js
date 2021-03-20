import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

//Components
import Login from './Components/Login'
import Categories from './Components/setup/categories'
import Register from  './Components/Register'
import LandingPage from './Components/LandingPage'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/register" component={Register}/>
          <Route path="/categories" component={Categories}/>
          <Route path="/login" component={Login} />
          <Route path="/" component={LandingPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
