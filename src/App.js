// import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home/Home';
import { Massage } from './Components/Massage/Massage';
import {Msprovider} from "./Context";



function App() {

  return (
    <div>
      <Msprovider>
        <Home/>
      </Msprovider>

    </div>

  );
}


export default App;
