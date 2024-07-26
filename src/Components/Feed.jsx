import React from 'react'
import "../styles/Feed.css"

import { Link } from 'react-router-dom'
import { API_KEY } from '../data'
import { value_converter } from '../data'
import moment from 'moment/moment'

const Feed = ({category}) => {
  const [data, setData] = React.useState([]);
  const [channelData, setChannelData] = React.useState(null);

  const fetchData  = async () => {
    const videoList_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=150&regionCode=IN&videoCategoryId=${category}&key=${API_KEY}`
    await fetch(videoList_url).then(response=>response.json()).then(data=>setData(data.items))
  } 
  const fetchOtherData = async () => {
    //Fetching channel data
    const channelData_url =  `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${data.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelData_url).then(res => res.json()).then(data=>setChannelData(data.items[0]))
  }

  React.useEffect(() => {
    fetchData();
  }, [category])
  React.useEffect(() =>{
    fetchOtherData();
  },[data])

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
        <Link to={`video/${item.snippet.categoryId}/${item.id}`} className='card'>
        <img src={item.snippet.thumbnails.medium.url} alt="" className='insideImg'/>
        <img src={channelData?channelData.snippet.thumbnails.default.url:""} className='logo' />
        <h2>{item.snippet.title}</h2>
        <h3>{item.snippet.channelTitle}</h3>
        <p>{value_converter(item.statistics.viewCount)} views &bull; {moment(item.snippet.publishedAt).fromNow()}</p>
      </Link>
        )
      })}
      
      
    </div>
    
  )
}

export default Feed