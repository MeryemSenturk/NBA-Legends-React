import './App.css';
import Main from './components/Main';
import {data} from "./asset/data.js"


function App() {
  return (
    <div>
   <Main data= {data}/>
    </div>
  );
}

export default App;
