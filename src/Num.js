import React from "react";

export default function Num(props) {
    return (
        <div className="num" style={{backgroundColor: props.isHeld ? "#59E391" : "white"}} onClick={() => props.holdDice(props.id)} > {props.value}</div>
    )
}