import { styled } from "../../@stitches.config";


const Error_con = styled("div" , {
    marginTop: "$5",
    width:"fit-content",
    flex_c:"",
    // border:"1px solid black",

    "ul":{
        paddingTop: "$1",
        marginLeft:"$2"
        
    },
    "&>*":{
        cursor:"default"
    }


})

const Error_con_text = styled("p" , {
    // width:"fit-content",
    // flex_c:"",

    "& span":{
        color:"$error",
    },

    variants:{
        size:{
            "head":{
                color:"$onBg",
                headline2:"800",
                "@bp3":{
                    headline4:"800",
                }
            } , 
            "subHead":{
                headline6:"600",
                color:"$onBg",
                paddingTop: "$2",
                
            } , 
            "description":{
                subhead1:"400",
                color:"$onBg900",
                
            } , 
        }
    }

})


export {Error_con, Error_con_text}