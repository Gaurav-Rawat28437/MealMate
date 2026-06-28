export const getfoodCategories=async()=>{
    try{
        const res=await fetch(import.meta.env.VITE_BE_URL+"/foodCategories")
        
        console.log(res)
        if(!res.ok){
            throw new Error("Failed to fetch food categories")
        }
        const data=res.json()
        console.log(data)
        return data

    }
    catch(error)
    {
        return error
    }
}

export const getRestaurants=async()=>{
    try{
        const res=await fetch(import.meta.env.VITE_BE_URL+"/restaurants")
        
        if(!res.ok){
            throw new Error("Failed to fetch food categories")
        }
        const data=res.json()
        console.log(data)
        return data

    }
    catch(error)
    {
        return error
    }
}
