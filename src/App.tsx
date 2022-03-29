import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';

function App() {
  return (
    <div className="h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-16">
        <Routes>
          <Route path="/" element={<>Home</>} />
          <Route path="/pools" element={<>Pools</>} />
          <Route path="/me" element={<>My Pools</>} />
          <Route path="/create" element={<>Create Pool</>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
