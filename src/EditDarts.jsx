import './App.css';
import {useEffect, useState} from 'react';
import axios from 'axios';
import {useParams, useNavigate} from 'react-router-dom';

export const EditDarts = () => {
    const {id} = useParams();
    const[player,setPlayer] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`https://darts.sulla.hu/darts/${id}`)
        .then(response => {
            setPlayer(response.data);
        })
    },[id]);

    const handleSubmit = (e) => {
        axios.put(`https://darts.sulla.hu/darts/${id}`, player)
          .then(() => {
            navigate("/");
          })
          .catch(error => console.error("Hiba történt:", error));
      };

    return (
        <div>
            <h2>Darts Versenyző Módosítása</h2>
            <input type="text" value={player.name} onChange={e => {
                var newplayer = {
                    name: e.target.value,
                    birth_date: player.birt_date,
                    world_ch_won: parseInt(player.world_ch_won),
                    profile_url: player.profile_url,
                    image_url: player.image_url
                };
                setPlayer(newplayer);
            }} placeholder="Játékos Neve"/>
            <input type="string" value={player.birth_date} onChange={e => {
                var newplayer = {
                    name: player.name,
                    birth_date: e.target.value,
                    world_ch_won: parseInt(player.world_ch_won),
                    profile_url: player.profile_url,
                    image_url: player.image_url
                };
                setPlayer(newplayer);
            }} placeholder="Születési Dátum"/>
            <input type="number" value={player.world_ch_won} onChange={e => {
                var newplayer = {
                    name: player.name,
                    birth_date: player.birt_date,
                    world_ch_won: parseInt(e.target.value),
                    profile_url: player.profile_url,
                    image_url: player.image_url
                };
                setPlayer(newplayer);
            }} placeholder="Megynert Világbajnokságok Száma"/>
            <input type="string" value={player.profile_url} onChange={e => {
                var newplayer = {
                    name: player.name,
                    birth_date: player.birt_date,
                    world_ch_won: parseInt(player.world_ch_won),
                    profile_url: e.target.value,
                    image_url: player.image_url
                };
                setPlayer(newplayer);
            }} placeholder="Profil Link URL"/>
            <input type="string" value={player.image_url} onChange={e => {
                var newplayer = {
                    name: player.name,
                    birth_date: player.birt_date,
                    world_ch_won: parseInt(player.world_ch_won),
                    profile_url: player.profile_url,
                    image_url: e.target.value
                };
                setPlayer(newplayer);
            }} placeholder="Kép URL"/>
            <button onClick={() => handleSubmit()}>Módosít</button>
        </div>
    )
}