// import React, { useReducer } from "react";


export const MessageReducer = (state,action)=>{

    switch (action.type) {
        case "success":
          return "success";
          case "failed":
              return "failed"
          default:
              break;
          }
          
        
}