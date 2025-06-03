import { Route, Routes } from 'react-router';
import Header from './Component/Header';
import Imgslider from './Component/Imgslide';
import Login from './Component/Login';
import CreatAcc from './Component/CreatAcc';
import Services from './Component/Services';
import Footer from './Component/Footer';
import './App.css';

// 👇 Import the context provider
import { DataProvider } from './DContext/Datas'; // Adjust the path if needed
import MapWithSelector from './Component/MapWithSelector';
import About from './Component/About';

function App() {
  return (
    <div className="App">
      {/* ✅ Wrap the whole app in the context provider */}
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Imgslider />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/CreatAcc" element={<CreatAcc />} />
          <Route path="/MapWithSelector" element={<MapWithSelector />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
