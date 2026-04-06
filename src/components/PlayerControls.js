import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause, faForward, faBackward } from '@fortawesome/free-solid-svg-icons';

function PlayerControls({ isPlaying, setIsPlaying, SkipSong }) {
  return (
    <div className="music-player--controls">
      <button className="skip-btn" onClick={() => SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <button className="play" onClick={() => setIsPlaying(!isPlaying)}>
        <FontAwesomeIcon icon={isPlaying ? faPause : faPlay} />
      </button>
      <button className="skip-btn" onClick={() => SkipSong(true)}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}
export default PlayerControls;