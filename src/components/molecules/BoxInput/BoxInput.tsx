import React from 'react';
import './BoxInput.css';
import Icon from '../../Atoms/Icon';
import Input from '../../Atoms/Input';

interface InputPropsType{
    labelName?:string;
    textplaceholder?:string;
    iconName?:"filter" | "close" | "plus" | "Calendar" |"search" ;
    InputStyle?: "borderButtonWithIcon" | "borderFull" | "borderButton" | "inputDropDown";
}

const BoxInput : React.FC<InputPropsType>= ({InputStyle ,textplaceholder,iconName}) => {
    var MyInput;
    switch (InputStyle) {
        case 'borderButtonWithIcon':      
            MyInput=(
            <div className="borderButtonWithIcon">
               <Input placeholder={textplaceholder} type="text"/>
                    {iconName && <Icon icon={iconName} size={17.5} color="#868686" /> }
            </div>
        )
        break;               
        default:break;       
      }
    return (
        <div>{MyInput}</div>
        )
}
export default BoxInput;
