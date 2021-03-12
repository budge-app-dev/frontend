import logo from './logo.svg';
import './App.css';
import {Route, Switch} from 'react-router-dom'

//Components
import Login from './Components/Login'

function App() {
  return (
    <div className="App">
      <Route path="/login">
          <Login/>
      </Route>
    </div>
  );
}

export default App;
