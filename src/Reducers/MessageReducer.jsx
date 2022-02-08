// import React, { useReducer } from "react";
import { Success, Primary, Secondary, Error, Info, Warning, Show } from "../Actions/types";


export const MessageReducer = (state, action) => {

    switch (action.type) {
        case Success:
            return "success";
        case Primary:
            return "primary";
        case Secondary:
            return "secondary";
        case Error:
            return "error";
        case Info:
            return "info";
        case Warning:
            return "warning";
        case Show:
            return true;
    }

}