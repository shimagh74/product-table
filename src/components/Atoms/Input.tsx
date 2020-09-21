import React from "react";

export interface Iinput {
    placeholder?: string;
    lable?: string;
    className?: string;
    type : "text" | "checkbox";
    value?:string | number | readonly string[] | undefined;
    handleChange?:(event: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Input : React.FC < Iinput >= ({placeholder, type, lable,className , value ,handleChange}) => {
    return (
        <div>
            <div className="lable"> {lable}</div>
            <input placeholder={placeholder} type={type} className={className} value={value} onChange={handleChange} ></input>
        </div>
    );
};

export default Input;