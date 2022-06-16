import React from "react";
import {Main_card , Main_card_text , Main_card_text_holder} from "./newsCard.style"
import re from "../modules/re";


function Card ({data }){

    let description = ""
    if(data["description"] == null){
        description = " No Description Available"
    }else if(data["description"].search("<li>") != -1){
        description =  re("<ol> || </ol> || <li> || </li> || <ul> || </ul> || </ || </l" , data["description"])
    }
    return(
        <Main_card data-testid="Card" onClick={()=>{window.open(data.url)}}>
            <Main_card_text size={"head"}> {data["title"].trim()}</Main_card_text>
            <Main_card_text_holder>
            <Main_card_text size={"subHead"}> {data["source"]["name"]}</Main_card_text>
            <Main_card_text size={"subHead"}> {data["author"] !=null ?data["author"]: "Unknown"} | {data["publishedAt"].split("T")[0]}</Main_card_text>
            </Main_card_text_holder>
            <Main_card_text as={"div"} size={"description"}>{description == "" ? data["description"]:description} </Main_card_text>
        </Main_card>
    )
}


export default Card