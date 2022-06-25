// import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import FormControl from './componets/FormControl';
import FunctionComponent from './componets/FunctionComponent'
import ClassComponent from './componets/ClassComponent'
import LifeCycleA from './componets/LifeCycleA'
import LifeCycleB from './componets/LifeCycleB';

function App() {
  return (
    <div>
      <div className='nav'><Navbar /></div>
      <br />
      <div><FormControl/></div>
      <br />
      <div><FunctionComponent name="Function"/></div>
      <br />
      <div><ClassComponent name="Class"/></div>
      <br />
      <div><LifeCycleA /></div>
      <br />
      <div><LifeCycleB /></div>
    </div>
  );
}

export default App;
