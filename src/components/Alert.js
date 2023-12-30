import React from "react";

export const Alert = (props) => {
    return (
        props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
            {props.alert.msg}
        </div>
    )
}