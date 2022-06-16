import create from "zustand"
import fetching from "./fetching"
const useStore = create((set , get)=>({
    currentComponent:"intro",
    currentMainComponent:"null",
    currentTheme:"light",
    isLoading:false,
    news:[],
    getNews:async(query)=>{
        try{
            set(state => {return{...state, currentMainComponent:"pending"}})
            let data =  await fetching(query)
            if(data["articles"].length == 0){
                set(state => {return{...state, currentMainComponent:"error-notfound"}})
            }else{
            set(state=>{return{...state , news:data["articles"] , currentMainComponent:"cards"}})
            }
        }catch(err){
            
            set(state=>{return{...state , currentMainComponent:"error-network"}})
        }
        
    },
    setCurrentTheme:(value)=>{
        set(state=>{return{...state , currentTheme:value}})
    },
    setCurrentComponent:(value)=>{
        set(state=>{return{...state, currentComponent:value}})
    }
}))




export default useStore
