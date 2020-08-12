import React, { useRef, useState } from 'react'
import "./Video.css";
import VideoFooter from './VideoFooter';
import VideoSidebar from './VIdeoSidebar';

function Video({
    url,
    channel,
    description,
    song,
    likes,
    messages,
    shares,
}) {
    const videoRef = useRef(null);
    const [playing, setPlaying] = useState(false);
    const onVideoPress = () => {
        if(playing) {
            videoRef.current.pause();
            setPlaying(false);
        }
        else {
            videoRef.current.play();
            setPlaying(true);
        }
        
    }
    
    return (
        <div className="video">
            <video className="video__player"
            src={url}
            loop
            ref={videoRef}
            onClick={onVideoPress}
            ></video>
            <VideoFooter
                channel={channel}
                description={description}
                song={song}>
            </VideoFooter>
            <VideoSidebar 
                likes={likes} 
                messages={messages} 
                shares={shares}>
            </VideoSidebar>
        </div>
    );
}

export default Video;
