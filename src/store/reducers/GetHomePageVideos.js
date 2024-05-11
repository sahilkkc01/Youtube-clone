import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import parseData from "../../utils/parseData";

const API_KEY=process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

export const getHomePageVideos=createAsyncThunk(
    "youtube/app/homePageVideos",
    //getState will fetch data from api
    async(isNext,{getState})=>{

          //destructing States we get from geState
            //extracting two property form youtubeApp reducer 
        const {
            youtubeApp : {nextPageToken : nextPageTokenFormState,videos},
        } = getState();

            //nextPageToken helps in page initiation
            //axios to get data from perticular url
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResult=20&q="aryan fit tech"&key=${API_KEY}&part=snippet&type=video`);

       console.log(response.data.items)

        const items=response.data.items;

        console.log(items);

        const parsedData = await parseData(items);
        
    }
)