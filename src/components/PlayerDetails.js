import React from 'react';

function PlayerDetails({ song }) {
  return (
    <div className="music-player--details">
      <img src={song.img_src} alt={song.title} className="details-img--image" />
      <div className="artist-info">
        <h3 className="details-title">{song.title}</h3>
        <h4 className="details-artist">{song.artist}</h4>
      </div>
    </div>
  );
}
export default PlayerDetails;