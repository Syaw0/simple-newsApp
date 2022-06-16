function re (query , string){
    let array = query.split("||")
    let results = string
    for(let i =0 ; i != array.length ; i++){
        results = results.split(array[i].trim())
        results = results.join(" ")    
    }
    return results
    }


export default re