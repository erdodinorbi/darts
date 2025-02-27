import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Routes} from'react-router-dom';

export const DartsList = () => {
  const [dartses,setDartses] = useState([]);

  useEffect(() => {
    axios.get('https://darts.sulla.hu/darts')
    .then(response => {
      setDartses(response.data);
    })
    .catch(error => {
      console.error('Hiba történt az adatok betöltésekor:',error);
    })
  })

  const handleDelete = (id) => {
    axios.delete(`https://darts.sulla.hu/darts/${id}`)
    .then(() => {
      setDartses(dartses.filter(darts => darts.id !== id));
    })
    .catch(error => {
      console.error('Hiba történt a törlés során:',error);
    })
  }

  const viewProfile = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
      <div>
        {dartses.map(darts => (
        <div key={darts.id} className="card" style={{width:"18rem"}}>
          <img src={darts.image_url} className="card-img-top" alt={darts.name}/>
          <div className="card-body">
            <h5 className="card-title"><strong>{darts.name}</strong></h5>
            <p className="card-text">Születési dátum:{darts.birth_date}</p>
            <p className="card-text">Megnyert világbajnokságok:{darts.world_ch_won}</p>
            <button onClick={() => handleDelete(darts.id)}>Törlés</button>
            <button onClick={() => viewProfile(darts.profile_url)}>Profil Megtekintése</button>
            <Link to={{pathname:`/${darts.id}/edit`,state:{id:darts.id}}}>
                <button>Módosítás</button>
            </Link>
          </div>
        </div>
        ))};
      </div>
  );
}