import React from "react";

export const Alert = (props) => {
    return (
        <div style={{height: '80px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            {props.alert.msg}
        </div>}
        </div>
    )
}