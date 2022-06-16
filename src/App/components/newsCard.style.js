import { styled } from "../../@stitches.config"

const Main_card = styled("div" , {
    width:"550px",
    flex_c:"",
    jc_ac:"",
    border:"1px solid $onBg300",
    padding:"$2 $2",
    borderRadius:"8px",
    cursor:"pointer",
    transition:"$shadowing",
    "@bp3":{
        width:"100%",
        padding:"$1",
    },
    "&:hover":{
        boxShadow:"$8dp",
        transition:"$shadowing"
    }

})

const Main_card_text_holder = styled("div" , {
    width:"100%" ,
    flex_r:"",
    jsb_ac:"",
    "&>*":{
        width:"50%"
    }
})

const Main_card_text  = styled("p" , {
    width:"100%",
    textAlign:"left",
    variants:{
        size:{
            "head":{
                color:"$onBg",
                headline5:"600",
                "@bp3":{
                    headline6:"600",
                }
            } , 
            "subHead":{
                subhead2:"",
                color:"$onBg500",
                paddingTop: "$1",
                "@bp3":{
                    subhead3:"",
                }
                
            } , 
            "description":{
                headline6:"500",
                color:"$onBg900",
                paddingTop: "$3",
                "@bp3":{
                    paddingTop: "$2",
                    subhead1:"500",
                }
            } , 
        }
    },
})


export {Main_card , Main_card_text , Main_card_text_holder}

