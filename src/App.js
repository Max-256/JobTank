
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCurrentUser } from './services/authService';
import Topnav from './components/Topnav';
import About from './components/About';
import Recruiter from './components/Recruiter';
import Register from './components/Register';
import Logout from './components/Logout';
import SignIn from './components/Sign-in';
import JobDetails from './components/JobDetails';
import ProtectedRoute from './components/protectedRoute';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.css';
import JobForm from './components/JobForm';
import EditJob from './components/EditJob';

function App() {
  const [user, setUser] = useState({});
  useEffect(() => setUser(getCurrentUser()),[]);

  return (
    <div className="App">
      <ToastContainer />
      <Topnav user={user}/>
      <main className='container'>
      <Switch>
      <Route path='/jobtank.netlify.app/about' component={About}/>
      <ProtectedRoute path='/recruiter' component={Recruiter}/>
      <ProtectedRoute path='/jobform' component={JobForm}/>
      <ProtectedRoute path='/editJob/:id' component={EditJob}/>
      <Route path='/register' component={Register}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/logout' component={Logout}/>
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
