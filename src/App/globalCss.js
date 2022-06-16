import { globalCss } from "../@stitches.config";

const globalStyle = globalCss({
    "*":{
        padding:"0",
        margin:"0",
        boxSizing:"border-box",
        transition:"$coAndBg",
    },
    body:{
        minHeight:"100vh",
        backgroundColor:"$bg"
    },
    "@import":'https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
    "#root":{
        height:"100%"
    },
    "#wrapper":{
        width:"100%",
        backgroundColor:"$bg",
        flex_c:"",
        jfs_ac:"",
        minHeight:"100vh"
    }
})

export default globalStyle