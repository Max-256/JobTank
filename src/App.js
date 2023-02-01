
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Route } from 'react-router-dom';
import Topnav from './components/Topnav';
import About from './components/About';
import Recruiter from './components/Recruiter';
import Register from './components/Register';
import SignIn from './components/Sign-in';
import Support from './components/Support';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Topnav />
      <main className='container'>
      <Route path='/about' component={About}/>
      <Route path='/recruiter' component={Recruiter}/>
      <Route path='/register' component={Register}/>
      <Route path='/sign-in' component={SignIn}/>
      <Route path='/support' component={Support}/>
      <Route path='/' exact component={Home}/>

      </main>
    </div>
  );
}

export default App;
