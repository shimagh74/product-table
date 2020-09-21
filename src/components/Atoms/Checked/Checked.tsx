import React from "react";
import Icon from "../Icon";

export interface IChecked {
    type?: string;
    icon?:"Checked";
    check?:boolean,
    handleChecked?:()=>void
    handelCheckBox:()=>void
}

const Checked : React.FC < IChecked >= (props) => {
    const handleChecked=()=>{
      props.handelCheckBox()
    }
  const checkIcon= props.check ?  "Checked": "empty";
    return (
        <div onClick={() => handleChecked()}>
            <Icon icon={checkIcon} size={16} color="#868686"/>
        </div>
    );
}

export default Checked;