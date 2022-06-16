import { styled } from "../../@stitches.config";
import darkTheme from "../theme/darkTheme";

const Intro_con = styled("div" , {
    width:"auto ",
    padding:"$4 $1",
    flex_c:"",
    jfc_afc:"",
    minHeight:"50vh",
    marginTop:"$4"
})


const IntroText = styled("p" , {
    
    padding:"$2 $1",
    display:"inline-block",
    headline2:"600",
    color:"$onBg",
    textAlign:"left",

    "@bp3":{
        headline4:"600"
    }
    
})

const IntroTextRed = styled("span" , {
    display:"inline-block",
    headline2_i:"600",
    color:"$error",
    textAlign:"left" ,

    "@bp3":{
        headline4_i:"600"
    }
})

const IntroButton = styled("button" , {
    padding:"$1 $2",
    flex_r:"",
    jc_ac:"",
    backgroundColor:"$primary",
    color:"$onPrimary",
    border:"none",
    borderRadius:"8px",
    alignSelf:"flex-start",
    cursor:"pointer",
    marginTop:"$4",
    button:"500",

    boxShadow:"$1dp",

    "& svg ":{
        fill:"$onPrimary",
        marginLeft:"5px",

    },

    "&:hover":{
        backgroundColor:"$onPrimary",
        color:"$primary",

        "& svg ":{
            fill:"$primary",
            
            
        },
        "&:active":{
            boxShadow:"none"
        }
    },
    
    [`.${darkTheme} &`]: { 
        border:"1px solid $onPrimary"
    }

    
})




export {Intro_con as default , IntroText , IntroTextRed ,IntroButton}