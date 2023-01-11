import React from "react";

export default function Itemdiv(props) {

    return (
        <div className="Itemdiv">
            <div className="card">
                <img src={props.img} alt="" />
                <p>{props.title}</p>
                <p>&#8377;{props.price * 40}/-</p>
            </div>
        </div>
    )
};