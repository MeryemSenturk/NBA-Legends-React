import './App.css';
import Header from "./components/Header.jsx";
import Main from './components/Main';
import {data} from "./asset/data.js"



function App() {
  return (
    <div>
      <Header />
      <Main data={data} />
    </div>
  );
}

export default App;
