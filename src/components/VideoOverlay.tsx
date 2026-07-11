import React from 'react';

interface VideoOverlayProps {
  channelName: string;
  description: string;
  category: string;
}

const VideoOverlay: React.FC<VideoOverlayProps> = ({ channelName, description, category }) => {
  return (
    <>
      <div className="category-badge">{category}</div>
      <div className="video-overlay">
        <div className="channel-info">
          <h3>@{channelName.replace(/\s+/g, '').toLowerCase()}</h3>
          <button className="subscribe-button">Subscribe</button>
        </div>
        <p>{description}</p>
      </div>
    </>
  );
};

export default VideoOverlay;
