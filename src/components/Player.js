import React, { useState, useRef, useEffect } from 'react';
import PlayerDetails from './PlayerDetails';
import PlayerControls from './PlayerControls';

function Player({ songs, currentSongIndex, setCurrentSongIndex, nextSongIndex }) {
  const audioElement = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audioElement.current.play() : audioElement.current.pause();
  }, [isPlaying]);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex((prev) => (prev + 1) % songs.length);
    } else {
      setCurrentSongIndex((prev) => (prev - 1 + songs.length) % songs.length);
    }
  };

  return (
    <div className="music-player">
      <audio src={songs[currentSongIndex].src} ref={audioElement} />
      <PlayerDetails song={songs[currentSongIndex]} />
      <PlayerControls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
    </div>
  );
}
export default Player;