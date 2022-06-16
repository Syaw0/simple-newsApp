import { styled } from "../../@stitches.config";

const Header_con = styled("div" , {
    width:"100%",
    
    padding:"$2 $1",
    flex_r:"",
    jc_ac:"",
    borderBottom:"1px solid $onBg300",
    position:"relative",
})

const HeadLogo = styled("p" , {
    width:"100%",
    headline2_i:"$9",
    textDecoration:"underline 3px",
    color:"$onBg",
    textAlign:"center",
    flex_r:"",
    jc_ac:"",
    cursor:"default",

    "@bp3":{
        headline4_i:"900"
    }
    
})

const HeadSwitch = styled("div" , {
    flex_r:"",
    jc_ac:"",
    position:"absolute",
    right:"8px",

    "& svg":{
        fill:"$onBg",
        stroke:"$onBg",        
        cursor:"pointer"
    }
})

export {Header_con as default , HeadLogo , HeadSwitch}