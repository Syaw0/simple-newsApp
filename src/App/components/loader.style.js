import { styled , keyframes } from "../../@stitches.config";

const fade = keyframes({
    from:{opacity:1} , 
    to:{opacity:0},
})

const Loader_con = styled("div" , {
width:"3.5em",
flex_r:"",
jsb_ac:"",
flexFlow:"row nowrap",
marginTop: "$4",


"& div":{
    width:"0.8em",
    height:"0.8em",
    borderRadius:"50%",
    backgroundColor:"$onBg800",
    animation:`${fade} 0.8s ease-in-out alternate infinite`,

} ,
"& div:nth-of-type(1)":{
    animationDelay:"-0.4s"
},
"& div:nth-of-type(2)":{
    animationDelay:"-0.2s"
},
})

export {Loader_con}