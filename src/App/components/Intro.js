import React from "react";
import Intro_con,{IntroText , IntroTextRed , IntroButton} from "./Intro.style"
import Ico_arrowR from "../asesst/icons/Ico_arrowR"
import useStore from "../store/store";

function Intro (){
    const setCurrentComponent = useStore(state=>state.setCurrentComponent)

    return(
        <>
             <Intro_con data-testid="intro"  id="intro">
      <IntroText>
      Discover <IntroTextRed>HOT NEWS</IntroTextRed> easily <br></br>
      just search your favorite things <br></br>
      and wait :)
      </IntroText>
      <IntroButton id="getStart_Btn" onClick={()=>{setCurrentComponent("main")}}>Get Start <Ico_arrowR/></IntroButton>
    </Intro_con>
        </>
    )
}


export default Intro
