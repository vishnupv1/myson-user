import React, { useRef, useEffect } from "react";
import video  from "../videos/video.mp4";
const BannerVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    // Start video at 1:06 (66 seconds)
    videoElement.currentTime = 66;

    // Automatically stop video at 3:05 (185 seconds)
    const stopVideoAtEnd = () => {
      if (videoElement.currentTime >= 185) {
        videoElement.pause();
      }
    };

    videoElement.addEventListener("timeupdate", stopVideoAtEnd);

    // Clean up the event listener when the component is unmounted
    return () => {
      videoElement.removeEventListener("timeupdate", stopVideoAtEnd);
    };
  }, []);

  return (
    <div className="banner-container">
      <video ref={videoRef} width="100%" height="500px" controls autoPlay muted>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default BannerVideo;
