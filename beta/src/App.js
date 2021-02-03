import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import RegisterForm from './Components/Register/RegisterForm';
import UserHome from './Components/UserHome';
import LoginForm from './Components/Login/LoginForm';
import HomePage from './MarketingPage/HomePage';
import AddPotlucks from './Components/Potlucks/AddPotlucks';
import PrivateRoute from './Components/PrivateRoute';
import EditPotluck from './Components/Potlucks/EditPotluck';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to='/' className='nav-link'>Planner</Link>
          <Link to='/login' className='nav-link'>Login</Link>
          <Link to='/register' className='nav-link'>Register</Link>
          <Link to='/user-home' className='nav-link'>My Event</Link> 
          <Link to='/add-potluck' className='nav-link'>Add Potluck</Link>
          <Link to='/edit-potluck' className='nav-link'>Edit Potluck</Link>
          {/* {(localStorage.getItem('token') && <Link to='/user-home'>My Event</Link>)} */}
        </nav>
        <h1>Hello Humans</h1>
      </header>
      <Switch>
        <Route path='/login' component={LoginForm} />
        <Route path='/register' component={RegisterForm} />
        <Route path='/add-potluck' component={AddPotlucks} />
        <Route path='/edit-potluck' component={EditPotluck} />
        <Route path='/user-home' component={UserHome} />
        <Route path='/' component={HomePage} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
