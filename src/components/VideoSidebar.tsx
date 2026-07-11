import React, { useState } from 'react';
import { ThumbsUp, ThumbsDown, MessageSquare, Share2, MoreVertical, Link2 } from 'lucide-react';

interface VideoSidebarProps {
  likes: string;
  comments: string;
  youtubeId: string;
}

const VideoSidebar: React.FC<VideoSidebarProps> = ({ likes, comments, youtubeId }) => {
  const [isLiked, setIsLiked] = useState(false);

  const copyToClipboard = () => {
    const url = `https://www.youtube.com/shorts/${youtubeId}`;
    navigator.clipboard.writeText(url);
    alert('URL másolva a vágólapra!');
  };

  return (
    <div className="video-sidebar">
      <button 
        className="sidebar-button" 
        onClick={() => setIsLiked(!isLiked)}
        style={{ color: isLiked ? '#3ea6ff' : 'white' }}
      >
        <ThumbsUp size={30} fill={isLiked ? '#3ea6ff' : 'none'} />
        <span>{likes}</span>
      </button>
      
      <button className="sidebar-button">
        <ThumbsDown size={30} />
        <span>Dislike</span>
      </button>
      
      <button className="sidebar-button">
        <MessageSquare size={30} />
        <span>{comments}</span>
      </button>

      <button className="sidebar-button" onClick={copyToClipboard}>
        <Link2 size={30} />
        <span>Másol</span>
      </button>
      
      <button className="sidebar-button">
        <Share2 size={30} />
        <span>Share</span>
      </button>
      
      <button className="sidebar-button">
        <MoreVertical size={30} />
      </button>
    </div>
  );
};

export default VideoSidebar;
