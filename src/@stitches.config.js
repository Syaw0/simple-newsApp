import { createStitches } from "@stitches/react";

export const {
    styled , 
    css , 
    keyframes,
    createTheme,
    globalCss,
    theme
}  = createStitches({
    theme:{
        colors:{
            "primary":"#D6ED7C",
            "onPrimary":"#171E00",
            "error":"#BA1B1B",
            "bg":"#FEFCF3",
            "onBg":"#1B1C17",
            "onBg300":"rgba(0,0,0,0.3)",
            "onBg500":"rgba(0,0,0,0.5)",
            "onBg800":"rgba(0,0,0,0.8)",
            "onBg900":"rgba(0,0,0,0.9)",
            
        },
        shadows:{
            "1dp":"0px 0px 2px 0px #00000024 , 0px 2px 2px 0px #0000001f , 0px 1px 3px 0px  #00000033" ,
            "8dp":"0px 8px 10px 1px #00000024 , 0px 3px 14px 3px #0000001f , 0px 4px 15px 0px  #00000033",
            "1dpw":"0px 0px 2px 0px #ffffff24 , 0px 2px 2px 0px #ffffff1f , 0px 1px 3px 0px  #ffffff33" ,
            "24dp":"0px 24px 38px 3px #00000024 , 0px 9px 46px 8px #0000001f , 0px 11px 15px 0px  #00000033"
        },
        fonts:{
            "barlow":"barlow"
        },

        fontWeights:{
            9:"900",
        },

        fontSizes:{
            "headline1":"36px",
            "headline2":"32px",
            "headline4":"24px",
            "headline5":"22px",
            "headline6":"18px",
            "subhead1":"16px",
            "subhead2":"14px",
            "subhead3":"12px",
            "button":"15px",

        },

        lineHeights:{
            "headline1":"44px",
            "headline2":"40px",
            "headline4":"32px",
            "headline5":"28px",
            "headline6":"24px",
            "subhead1":"24px",
            "subhead2":"20px",
            "subhead3":"18px",
            "button":"20px",
        },

        
        letterSpacings:{
            1:"0.1px"
        },

        transitions:{
            "coAndBg":"color 0.5s , background-color 0.5s , fill 0.5s",
            "shadowing":"box-shadow 0.5s"
        },
        space:{
            1:"8px",
            2:"16px",
            3:"24px",
            4:"32px", 
            5:"40px", 
        }
 


    } , 
    media:{
        "bp1":"(max-width:1000px)",
        "bp2":"(max-width:750px)",
        "bp3":"(max-width:550px)",

    },
    utils:{
        "headline1":(weight)=>({
            fontFamily:"$barlow" ,
            fontWeight:weight,
            fontSize:"$headline1",
            lineHeight:"$headline1",
            fontStyle:"normal"
         }),
         
         "headline1_i":(weight)=>({
            headline1:weight,
            fontStyle:"italic"
        }),

        "headline2":(weight)=>({
            fontFamily:"$barlow" ,
            fontWeight:weight,
            fontSize:"$headline2",
            lineHeight:"$headline2",
            fontStyle:"normal"
         }),
         
         "headline2_i":(weight)=>({
            headline2:weight,
            fontStyle:"italic"
        }),

        "headline4":(weight)=>({
            fontFamily:"$barlow" ,
            fontWeight:weight,
            fontSize:"$headline4",
            lineHeight:"$headline4",
            fontStyle:"normal"
         }),

         "headline4_i":(weight)=>({
            headline4:weight,
            fontStyle:"italic"
        }),


         "headline5":(weight)=>({
            fontFamily:"$barlow" ,
            fontWeight:weight,
            fontSize:"$headline5",
            lineHeight:"$headline5",
            fontStyle:"normal"
         }),

         "headline5_i":(weight)=>({
            headline5:weight,
            fontStyle:"italic"
        }),

        "headline6":(weight)=>({
            fontFamily:"$barlow" ,
            fontWeight:weight,
            fontSize:"$headline6",
            lineHeight:"$headline6",
            fontStyle:"normal"
         }),
         
         "headline6_i":(weight)=>({
            headline6:weight,
            fontStyle:"italic"
        }),


        "subhead1":(weight)=>({
            fontFamily:"$barlow" ,
            fontWeight:weight,
            fontSize:"$subhead1",
            lineHeight:"$subhead1",
            fontStyle:"normal",
            letterSpacing:"$1"
         }),

        "subhead2":(weight)=>({
            fontFamily:"$barlow" ,
            fontWeight:weight,
            fontSize:"$subhead2",
            lineHeight:"$subhead2",
            fontStyle:"normal",
            letterSpacing:"$1"
         }),
         "subhead2_i":(weight)=>({
            subhead2:weight,
            fontStyle:"italic"
        }),

        "subhead3":(weight)=>({
            fontFamily:"$barlow" ,
            fontWeight:weight,
            fontSize:"$subhead3",
            lineHeight:"$subhead3",
            fontStyle:"normal",
            letterSpacing:"$1"
         }),

         "subhead3_i":(weight)=>({
            subhead3:weight,
            fontStyle:"italic"
        }),

        "button":(weight)=>({
            fontFamily:"$barlow" ,
            fontWeight:weight,
            fontSize:"$button",
            lineHeight:"$button",
            fontStyle:"normal",
            letterSpacing:"$1"
        }),

        "flex_r":()=>({
            display:"flex",
            flexDirection:"row",
        }) , 

        "flex_c":()=>({
            display:"flex",
            flexDirection:"column",
        }) , 

        "jc_ac":()=>({
            "justify-content":"center",
            "align-items":"center",
        }),

        "jfs_afs":()=>({
            "justify-content":"flex-start",
            "align-items":"flex-start",
        }),
        "jfs_ac":()=>({
            "justify-content":"flex-start",
            "align-items":"center",
        }),
        "jsb_ac":()=>({
            "justify-content":"space-between",
            "align-items":"center",
        })
    }

})