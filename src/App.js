import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

function App() {
  const imageSrc = [
    "https://cdn.pixabay.com/photo/2015/01/29/11/36/roses-616013_640.jpg",
    "https://cdn.pixabay.com/photo/2018/01/19/14/40/nature-3092555_640.jpg",
    "https://cdn.pixabay.com/photo/2017/07/18/18/01/little-girl-2516578_640.jpg",
    "https://cdn.pixabay.com/photo/2015/10/09/00/55/lotus-978659_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510_640.jpg",
    "https://cdn.pixabay.com/photo/2015/04/19/08/32/rose-729509_640.jpg",
    "https://cdn.pixabay.com/photo/2018/06/24/23/21/daylily-3495722_640.jpg",
    "https://cdn.pixabay.com/photo/2017/06/12/17/54/anemone-2396299_640.jpg",
    "https://cdn.pixabay.com/photo/2016/04/16/12/50/chrysanthemum-1332994_640.jpg",
    "https://cdn.pixabay.com/photo/2012/09/08/21/51/flower-56414_640.jpg",
    "https://cdn.pixabay.com/photo/2016/04/12/18/19/carnation-1325012_640.jpg",
    "https://cdn.pixabay.com/photo/2018/06/16/15/36/water-lily-3478924_640.jpg",
  ];

  return (
    <div>
      <Navbar message="Welcome to My Flower World" />
      <Main imageSrc={imageSrc} />
      <Footer />
    </div>
  );
}

export default App;
