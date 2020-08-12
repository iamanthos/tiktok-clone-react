import React, { useState, useEffect } from 'react';
import Video from './Video';
import './App.css';
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([]);

  // useEffect(() => {
  //   //fires once when the component loads and when video changes but never after
  //     db.collection('videos').onSnapshot( (snapshot) => 
  //       setVideos(snapshot.docs.map( (doc) => console.log('data ' + doc.data())))
  //     );
  //   }, []);

    useEffect(() => {
    // fires once when the component loads and when video changes but never after
      db.collection("video")
      .get()
      .then(querySnapshot => {
      setVideos(querySnapshot.docs.map(doc => doc.data()))
      });
    }, []);

  // useEffect(() => {
    // db.collection("video")
    // .get()
    // .then(querySnapshot => {
    //   const data = querySnapshot.docs.map(doc => doc.data());
    //   console.log('Data '+ data);
    // });
  // }, []);

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({url, channel, description, song, likes, messages, shares}) => (
          <Video 
            url= {url}
            channel= {channel}
            description= {description}
            song={song}
            likes={likes}
            messages={messages}
            shares={shares}/>
          )
        )}
      </div>
    </div>
  );
}

export default App;
