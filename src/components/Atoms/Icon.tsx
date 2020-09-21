import React from "react";
import iconPath from "../../assets/svg/iconPath";
// import iconPath from "../assets/svg/iconPath";

const defaultStyles = { display: "inline-block", verticalAlign: "middle" };
export interface IconPropsType{
    size?:number;
    color?:string;
    icon:"filter" | "close" | "plus" | "Calendar" |"search" | "Checked" | "Edit" | "Trash" |"user" | "empty" | "submited";
    className?:string;
    style?:Object;
    viewBox?:string;
    onClick?:()=>void   
}

const Icon : React.FC<IconPropsType>=({ size, color, icon, className, style, viewBox,onClick }) => {
  const styles = { ...defaultStyles, ...style };
  return (
    <div  onClick={onClick}>
    <svg
      className={className}
      style={styles}
      viewBox={viewBox}
      width={`${size}px`}
      height={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path fill={color} d={iconPath[icon]} />
    </svg>
    </div>
  );
};

export default Icon;