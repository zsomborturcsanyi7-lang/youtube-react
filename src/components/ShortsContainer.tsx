import React, { useEffect, useRef, useState } from 'react';
import ShortVideoItem from './ShortVideoItem';
import { mockVideos } from '../data/mockVideos';

const ShortsContainer: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(mockVideos[0]?.id || null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options = {
      root: containerRef.current,
      threshold: 0.8, // 80% visibility to trigger "active"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const videoId = entry.target.getAttribute('data-id');
          if (videoId) setActiveVideoId(videoId);
        }
      });
    }, options);

    const children = containerRef.current?.children;
    if (children) {
      Array.from(children).forEach((child) => observer.observe(child));
    }

    return () => {
      if (children) {
        Array.from(children).forEach((child) => observer.unobserve(child));
      }
    };
  }, []);

  return (
    <div className="shorts-container" ref={containerRef}>
      {mockVideos.map((video) => (
        <div key={video.id} data-id={video.id} className="video-snap-point">
          <ShortVideoItem 
            video={video} 
            isPlaying={activeVideoId === video.id} 
          />
        </div>
      ))}
    </div>
  );
};

export default ShortsContainer;
