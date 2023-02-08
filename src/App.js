
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Topnav from './components/Topnav';
import About from './components/About';
import Recruiter from './components/Recruiter';
import Register from './components/Register';
import SignIn from './components/Sign-in';
import JobDetails from './components/JobDetails';
import ProtectedRoute from './components/protectedRoute';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Topnav />
      <main className='container'>
      <Switch>
      <Route path='/about' component={About}/>
      <ProtectedRoute path='/recruiter' component={Recruiter}/>
      <Route path='/register' component={Register}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/job-details/:id' component={JobDetails}/>
      <Route path='/notfound' component={NotFound}/>
      <Route path='/' exact component={Home}/>
      <Redirect to="/notfound" />
      </Switch>
      </main>
    </div>
  );
}

export default App;
