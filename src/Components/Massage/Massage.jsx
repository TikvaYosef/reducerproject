import React, { useContext } from "react";
import { success, show } from "../../Actions/MassegeAction";
import { msContext } from "../../Context";




export const Massage = () => {
    const { massage, dispatch } = useContext(msContext);

    return (
        <div>
            <center>
                <h2>{massage}</h2>
                <button type="button" onClick={() => { dispatch(success()) }}>success</button>

                <div>

                    {show.isOpen ? massage : "error not found"}

                </div>

            </center>
        </div >
    );

}

