import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { _NEVER } from "@reduxjs/toolkit/query";

export const getLocationThunk=createAsyncThunk("locationThunk",async()=>{
    if(!navigator.geolocation)
    {
        throw Error("geolocation not found")
    }
    const data=await new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition((position)=>{
            resolve({
                lat:position.coords.latitude,
                lon:position.coords.longitude
            })
        },(error)=>{
            reject(error.message)
        })
    })
    console.log(data)

    if(data.lat || data.lon)
    {
        try{
            const res=await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${data.lat}&lon=${data.lon}&format=json`)
            const apiRes=await res.json()
            data.location=apiRes.display_name
            console.log(data)
            return data
        }
        catch(error)
        {
            return {
                ...data,
                location:"Error fetching location"
            }
        }
    }
})

const locationSlice=createSlice({
    name:"location",
    initialState:{
        loading:false,
        data:{},
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getLocationThunk.pending,(state,action)=>{
            return {
                ...state,
                loading:true
            }
        })
        .addCase(getLocationThunk.fulfilled,(state,action)=>{
            return {
                ...state,
                loading:false,
                data:action.payload
            }
        })
        .addCase(getLocationThunk.rejected,(state,action)=>{
            return {
                ...state,
                loading:false,
                error:action.payload
            }
        })

    }
})

export default locationSlice.reducer