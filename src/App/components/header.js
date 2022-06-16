import React from "react";
import Header_con,{HeadLogo , HeadSwitch} from "./header.style"
import Ico_moon from "../asesst/icons/Ico_moon"
import Ico_sun from "../asesst/icons/Ico_sun"
import useStore from "../store/store";

function Header (){
    const currentTheme = useStore(state=>state.currentTheme)
    const setCurrentTheme = useStore(state=>state.setCurrentTheme)
    return(
        <>
                <Header_con data-testid="header" >
    <HeadLogo>
      HOT NEWS
    </HeadLogo>
    <HeadSwitch id="switchTheme" onClick={()=>{currentTheme=="light" ?setCurrentTheme("dark") :setCurrentTheme("light")}}>
    {currentTheme=="light"?<Ico_moon /> : <Ico_sun/>}
    </HeadSwitch>
    </Header_con>
        </>
    )
}


export default Header
