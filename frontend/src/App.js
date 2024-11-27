import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';

import Layout from './layout/Layout';

function App() {
  return (
  <Routes>
    <Route/>
    <Route/>
    <Route path="/" element={<Layout />}>
    
    </Route>
  </Routes>
  );
}

export default App;
