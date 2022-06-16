const fetching = async (query)=>{

    try{
        let resp =await fetch(`https://newsapi.org/v2/everything?q=${query}&pageSize=100&apiKey=25323ce116354595bb5fcdcc70f99bb3`)
        let data = await resp.json()
        return data
    }catch(err){
        throw new Error("error happen")
    }


}


export default fetching