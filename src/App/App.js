import React from "react";
import globalStyle from "./globalCss"
import Header from "./components/header";
import Intro from "./components/Intro";
import Main from "./components/main"
import useStore from "./store/store"
import darkTheme from "./theme/darkTheme"
import {theme} from "../@stitches.config"

window.addEventListener("resize", () => {
  document.getElementById("root").width = window.innerWidth;
});

function App() {
  const currentComponent = useStore(state=>state.currentComponent)
  const currentTheme = useStore(state=>state.currentTheme)
  globalStyle()
  return	(
<>
    <div id="wrapper" className={currentTheme=="light"?theme:darkTheme}>

    <Header/>
    {currentComponent=="intro" && <Intro/>}
    {currentComponent=="main"  && <Main/> }


    </div>
</>
    )
  	
  
}

export default App;
