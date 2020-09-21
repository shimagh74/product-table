import React from 'react';
import './HandleButton.css';
import Button from '../../Atoms/Button';
import Icon from '../../Atoms/Icon';


interface ButtonPropsType{
    children:string;
    color:string;
    iconName?:"filter" | "close" | "plus" | "Calendar" |"search" ;
    ButtonStyle: "withIcon" | "bgFull" | "bgLess";
    onClick:()=>void
}



const HandleButton : React.FC<ButtonPropsType>= (props) => {
    var Mybutton;
    switch (props.ButtonStyle) {
        case 'withIcon':      
            Mybutton=(
            <Button {...props} className="withIcon" onClick={props.onClick}>
                  {props.iconName && <Icon icon={props.iconName} size={17.5} color={props.color} /> } 
                  <p>{props.children}</p> 
            </Button>
        )
        break;
        case 'bgFull':      
            Mybutton=(
                <Button className="bgFull" onClick={props.onClick}>
                    <p>{props.children}</p> 
                </Button>
            )
        break;    
        case 'bgLess':      
            Mybutton=(
                <Button className="bgLess" onClick={props.onClick}>
                    <p>{props.children}</p> 
                </Button>
            )
        break;                
        default:break;       
      }
    return (
        <div>{Mybutton}</div>
        )
};
export default HandleButton;
