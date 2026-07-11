import React, { useEffect, useRef } from 'react';
import VideoSidebar from './VideoSidebar';
import VideoOverlay from './VideoOverlay';
import type { Video } from '../data/mockVideos';
import { loadYouTubeAPI } from '../utils/youtubeApi';

interface ShortVideoItemProps {
  video: Video;
  isPlaying: boolean;
}

const ShortVideoItem: React.FC<ShortVideoItemProps> = ({ video, isPlaying }) => {
  const playerRef = useRef<HTMLDivElement>(null);
  const ytPlayer = useRef<any>(null);

  useEffect(() => {
    let isMounted = true;
    loadYouTubeAPI().then(() => {
      if (!isMounted || !playerRef.current) return;
      
      ytPlayer.current = new window.YT.Player(playerRef.current, {
        height: '100%',
        width: '100%',
        videoId: video.youtubeId,
        playerVars: {
          autoplay: 0,
          controls: 0,
          loop: 1,
          playlist: video.youtubeId,
          modestbranding: 1,
          rel: 0,
          playsinline: 1,
        },
      });
    });
    return () => { isMounted = false; };
  }, [video.youtubeId]);

  useEffect(() => {
    if (ytPlayer.current && ytPlayer.current.playVideo) {
      if (isPlaying) {
        ytPlayer.current.playVideo();
      } else {
        ytPlayer.current.pauseVideo();
      }
    }
  }, [isPlaying]);

  return (
    <div className="short-video-item">
      <div className="video-wrapper">
        <div ref={playerRef} className="video-player" />
        <VideoOverlay 
          channelName={video.channelName} 
          description={video.description} 
          category={video.category}
        />
        <VideoSidebar 
          likes={video.likes} 
          comments={video.comments} 
          youtubeId={video.youtubeId}
        />
      </div>
    </div>
  );
};

export default ShortVideoItem;
