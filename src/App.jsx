// import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import FormControl from './componets/FormControl';
import Portal from './componets/Portal';
import Test from './componets/Test';

function App() {
  return (
    <div>
      <div className='nav'><Navbar /></div>
      <br />
      <div><FormControl/></div>
      <br />
      <div><Portal/></div>
      <br />
      <div><Test/></div>
    </div>
  );
}

export default App;
