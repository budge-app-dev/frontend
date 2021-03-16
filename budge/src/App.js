import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

//Components
import Login from './Components/Login'
import Categories from './Components/setup/Categories'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/login" component={Categories} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
