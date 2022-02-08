import React,{useContext} from "react";
import { Massage } from "../Massage/Massage";
import {msContext} from "../../Context";
import {show} from "../../Actions/MassegeAction";


export const Home = () => {
    const {massage , dispatch} = useContext(msContext);
    
    return (
        <div>
            <Massage />
            <button type="button" onClick={()=>{dispatch(show({text:""}))}}></button>
            
      
        </div>
    )
}