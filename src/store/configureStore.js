import {configureStore} from "@reduxjs/toolkit";
import youtubeReducer from '../features/youtube/youtubeSlice'

//Reducer is funtion which manage the state

const Store=configureStore({
         reducer:{
            youtubeApp:youtubeReducer,
         }
});

export default Store;