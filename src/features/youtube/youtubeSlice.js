import { createSlice } from "@reduxjs/toolkit";
import { getHomePageVideos } from "../../store/reducers/GetHomePageVideos";

const initialState={
    video:[],
    currentPlaying: null,
    searchTerm:"",
    searchResults:[],
    nextPageToker:null,
    recomendedVideo:[]
} 

const YoutubeSlice=createSlice({
    name:"youtubeApp",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getHomePageVideos.fulfilled,(state,action)=>{
            
        })
    }
})

//Exporting reducer funtions

export default YoutubeSlice.reducer;