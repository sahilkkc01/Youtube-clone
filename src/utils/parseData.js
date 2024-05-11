import axios from 'axios';
import React from 'react'

const API_KEY=process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const parseData = async(items) => {
  
  try{
    const videoIds=[];
    const channelIds=[];

    items.forEach((items)=>{
      channelIds.push(items.snippet.channelIds);
      videoIds.push(items.id.videoIds);
    });

    const {
      data:{item:channelsData}
    }=await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet.contentDetails&Id=${channelIds}.join(
      ","
    )}&key=${API_KEY}`);
  }catch(err){
    console.log("Error in parsing the Data");
  };

  console.log(items)
  return (
    <div>
      
    </div>
  )
}

export default parseData
