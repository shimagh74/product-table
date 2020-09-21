import React from "react";

export interface ButtonPropsType {
    className:string,
    onClick:()=>void

}
const Button : React.FC < ButtonPropsType >= (props) => {
    return (
    <div {...props} className={props.className}  onClick={props.onClick}>{props.children} </div>
    );
};

export default Button;