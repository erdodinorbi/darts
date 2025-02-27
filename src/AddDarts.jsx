import './App.css';
import {useEffect, useState} from 'react';
import {Row,Col,Card} from 'react-bootstrap';
import axios from 'axios';
import {BrowserRouter as Router, Link, Route, Routes} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';

export const AddDarts = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        var new_player = {
            name: e.target.name.value,
            birth_date: e.target.birth_date.value,
            world_ch_won: parseInt(e.target.world_ch_won.value),
            profile_url: e.target.profile_url.value,
            image_url: e.target.image_url.value,
        }
        axios.post("https://darts.sulla.hu/darts", new_player)
          .then(() => {
            navigate("/");
          })
          .catch(error => console.error("Hiba történt:", error));
      };

    return (
        <div>
            <h2>Darts Versenyző Hozzáadása</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"  placeholder="Játékos Neve"/>
                <input type="string" name="birth_date" placeholder="Születési Dátum"/>
                <input type="number" name="world_ch_won" placeholder="Megynert Világbajnokságok Száma"/>
                <input type="string" name="profile_url" placeholder="Profil Link URL"/>
                <input type="string" name="image_url" placeholder="Kép URL"/>
                <button type="submit">Hozzáad</button>
            </form>
        </div>
    )
}