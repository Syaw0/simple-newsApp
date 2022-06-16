import React from "react";
import { Error_con , Error_con_text } from "./error.style";

function Error (props){
    return(
        <Error_con id="error_con">
                {props.status == "network" && 
                <>
                <Error_con_text size={"head"}>Something <span>wrong</span></Error_con_text>
            <Error_con_text size={"subHead"}>If you see this error <br></br>it could be because of:</Error_con_text>
            <ul>
                <li><Error_con_text size={"description"}>your network is <span>down</span></Error_con_text></li>
                <li><Error_con_text size={"description"}>api`s <span>crushed</span></Error_con_text></li>
            </ul>
                </>}

                {props.status == "notfound" && <>
                <Error_con_text size={"head"}><span>Nothing found</span></Error_con_text>
                <Error_con_text size={"subHead"}>try other hot words like:</Error_con_text>
                <Error_con_text size={"description"}>bitcoin , NBA , USA , Rap , etc...</Error_con_text>
                </>}
        </Error_con>
    )
}

export default Error