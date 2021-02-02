import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import RegisterForm from './Components/Register/RegisterForm';
import UserHome from './Components/UserHome';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/register'>Register</Link>
        </nav>
        <h1>Hello Humans</h1>
      </header>
      <Switch>
        <Route path='/register' component={RegisterForm} />
        <Route path='/Main' component={UserHome} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
