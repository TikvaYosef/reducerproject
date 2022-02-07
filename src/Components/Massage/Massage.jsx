import React, { useReducer } from "react";
import { success, failed } from "../../Actions/MassegeAction";
import { MessageReducer } from "../../Reducers/MessageReducer";




export const Massage = () => {
    const [massage, dispatch] = useReducer(MessageReducer, "massege");

    return (
        <div>
            <center>
            <h2>{massage}</h2>
            <button type="button" onClick={() => { dispatch(success()) }}>success</button>
            <button type="button" onClick={() => { dispatch(failed()) }}>failed</button>
            </center>
        </div>
    );

}