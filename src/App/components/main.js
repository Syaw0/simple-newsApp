import React,{useState , useEffect , memo} from "react";
import Main_con,{Main_input , Main_input_con,Main_card_con} from "./mian.style"
import Ico_search from "../asesst/icons/Ico_search";
import Card from "./newsCard";
import Error from "./error";
import Loader from "./loader"
import useStore from "../store/store";

let MemoCon = memo(Main_card_con,(pre,nex)=>{
    if(pre.data[0] == nex.data[0]){
        if(pre.data[1].length == nex.data[1].length){
            return true
        }
    }
    return false
})


function Main (){
    const getData = useStore(state=>state.getNews)
    const currentMainComponent = useStore(state=>state.currentMainComponent)
    const newsList = useStore(state=>state.news)
    const [inputValue , setInputValue] = useState("")
    const [actualNewList , setActualNewList  ] = useState([])
    const [which10Number , setWhich10Number  ] = useState(0)
    const [loadmore , setLoadmore] = useState(false)

    useEffect(()=>{
        if(newsList.length != 0){
        let sliceNews = newsList.slice(which10Number , which10Number+10)
        setActualNewList(sliceNews)
        setWhich10Number(state=>state+10)
        
        }
    },[newsList])

    useEffect(()=>{
        if(loadmore){
            if(newsList.length > actualNewList.length){
                let sliceNews = newsList.slice(which10Number , which10Number+10)
                setActualNewList(state=>{return[...state,...sliceNews]})
                setWhich10Number(state=>state+10)
                setLoadmore(false)
            }
        }
    },[loadmore])

    const handleGetData = (e)=>{
        if(inputValue.trim() == ""){
            return null
        }else{
            getData(inputValue)
            setInputValue("")
        }
    }

    return(
        <>
            <Main_con  data-testid="main_con" id="main_con">
            <Main_input_con>
                <Main_input value={inputValue} onChange={(e)=>{setInputValue(e.target.value) }} onKeyDown={(e)=>{e.key=="Enter"?handleGetData(e):null}} type="text" placeholder="SEARCH YOUR FAVORITE THINGS..." id="main_input"  disabled={currentMainComponent=="pending" ? true:false }/>
                <Ico_search event={(e)=>{ handleGetData(e)}}/>
            </Main_input_con>

            <MemoCon id="main_card_con" data={[currentMainComponent , actualNewList]} >
            {currentMainComponent.split("-")[0]=="error" && <Error status={currentMainComponent.split("-")[1]}/> }
            { currentMainComponent=="cards" && <>{actualNewList.map((v,i)=>{
                
                let author = `${v.author}`
                if(author.length <50){
                return<Card data={v} key={i}/>
                }
            })}
            <button id="loadmore_btn" disabled={actualNewList.length>= newsList.length ?true:false} onClick={()=>{setLoadmore(true)}}>{actualNewList.length>= newsList.length ? "END OF LIST":"LOAD MORE"}</button>
            </>
            }

            {currentMainComponent=="pending" && <Loader/> }
            </MemoCon>
            
            </Main_con>
        </>
    )
}


export default Main
