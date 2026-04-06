import React, { useState, useEffect } from 'react';
import Player from './components/Player';
import './App.css';

function App() {
  const [songs] = useState([
    {
      title: "Дурак и молния",
      artist: "Король и шут",
      img_src: "./songs_images/iconka.png",
      src: "./songs/Durak-i-Molnia.mp3"
    },
    {
      title: "Проклятый старый дом",
      artist: "Король и шут",
      img_src: "./songs_images/iconka.png",
      src: "./songs/Staryi_dom.mp3"
    },
    // добавьте остальные песни по аналогии
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) return 0;
      else return currentSongIndex + 1;
    });
  }, [currentSongIndex, songs.length]);

  return (
    <div className="App">
      <Player
        songs={songs}
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
      />
    </div>
  );
}
export default App;