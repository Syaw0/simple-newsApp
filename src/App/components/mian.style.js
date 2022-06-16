import { styled } from "../../@stitches.config";
import darkTheme from "../theme/darkTheme";
const Main_con = styled("div" , {
    flex_c:"",
    jc_ac:"",
    marginTop: "$4",
    width:"100%",
    "& button":{
        padding:"$1 $2",
        border:"1px solid $onBg500",
        backgroundColor:"transparent",
        subhead1:"600",
        color:"$onBg",
        cursor:"pointer",
        "&:disabled":{
            backgroundColor:"transparent",
            border:"none",
            cursor:"default",
            "&:hover":{
                color:"inherit",
                backgroundColor:"inherit"
            },
            [`.${darkTheme} &`]:{
                color:"$onBg",
                backgroundColor:"inherit"
            }
        },
        "&:hover":{
            color:"$bg",
            backgroundColor:"$onBg"
        }
    },

    
})

const Main_input_con = styled("div" , {
    padding:"$1 $2",
    flex_c:"",
    jc_ac:"",
    position:"relative",
    width:"fit-content",
    "& svg":{
        fill:"none",
        stroke:"$onBg800",
        position:"absolute",
        right:"$3",
        cursor:"pointer",

    },
    "@bp3":{
        width:"100%"
    }
})

const Main_input = styled("input" , {
    minWidth:"500px",
    padding:"$1 $2",
    borderRadius:"8px",
    border:"1px solid $onBg800",
    color:"$onBg",
    subhead1:"700",
    letterSpacing:"0.5px",
    backgroundColor:"transparent",
    "&:focus":{
        outline:"none"
    },

    "&::placeholder":{
        color:"$onBg500",
        subhead2_i:"500"
    },
    "&:disabled":{
        backgroundColor:"rgba(213,213,213,0.4)",
        border:"1px solid $onBg500",
        cursor:"not-allowed",
        "& ~ svg ":{
            cursor:"not-allowed",
            opacity:"0.5"
        },
        [`.${darkTheme} &`]:{
            backgroundColor:"rgba(213,213,213,0.1)",
        }
    },

    "@bp3":{
        minWidth:"100%",
        subhead2:"700",
        letterSpacing:"0.3px",

        "&::placeholder":{
            color:"$onBg500",
            subhead3_i:"500"
        },

    }
})

const Main_card_con = styled("div"  ,{
    width:"100%",
    flex_c:"",
    jc_ac:"",
    marginTop: "$4",
    padding:"$1 $2",
    "&>*":{
        marginBottom: "$4",
        
    }
})



export {Main_con as default , Main_input , Main_input_con , Main_card_con }