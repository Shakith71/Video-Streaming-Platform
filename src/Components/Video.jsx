import React from 'react'
import '../styles/Video.css'
import PlayVideo from '../Components/PlayVideo'
import Recommended from '../Components/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
  const {videoId, categoryId} = useParams();
  return (
    <div className="play-container">
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
  )
}

export default Video