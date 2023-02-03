
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Topnav from './components/Topnav';
import About from './components/About';
import Recruiter from './components/Recruiter';
import Register from './components/Register';
import SignIn from './components/Sign-in';
import Support from './components/Support';
import JobDetails from './components/JobDetails';
import Application from './components/Application';
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
      <Route path='/recruiter' component={Recruiter}/>
      <Route path='/register' component={Register}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/support' component={Support}/>
      <Route path='/job-details' component={JobDetails}/>
      <Route path='/application' component={Application}/>
      <Route path='/notfound' component={NotFound}/>
      <Route path='/' exact component={Home}/>
      <Redirect to="/notfound" />
      </Switch>
      </main>
    </div>
  );
}

export default App;
