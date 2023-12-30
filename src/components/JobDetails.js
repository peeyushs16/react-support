import React from "react";


export const JobDetail = (props) =>{
    return(
      <div>
        <h1>{props.salary} - {props.position} - {props.company}</h1>
      </div>
    )
}