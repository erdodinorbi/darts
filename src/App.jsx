import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Routes} from'react-router-dom';
import {AddDarts} from './AddDarts';
import {DartsList} from './DartsList';
import {EditDarts} from './EditDarts';

function App() {
  const [dartses,setDartses] = useState([]);

  return (
    <Router>
      <Link to="/add">
        <button>Új Hozzáadása</button>
      </Link>
      <Routes>
        <Route index element={<DartsList />} />
        <Route path="/add" element={<AddDarts />} />
        <Route path="/:id/edit" element={<EditDarts />} />
      </Routes>
    </Router>
  );
}

export default App;
