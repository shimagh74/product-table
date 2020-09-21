import React from "react";
import './DropDown.css';
import {productListType} from "../../../core/models/models";

export interface IdropDown {
    className?: string;
    styles?: string;
    lable?: string;
    Lists : productListType[] | null;
}

const DropDown : React.FC < IdropDown >= ({className, lable, Lists, styles}) => {
    return (
        <div className="dropdown">
            <div className="lable">{lable}</div>
            <select className={className}>
                {Lists
                    ? Lists.map((List) => {
                        return <option>{List.name}</option>
                    })
                    : null}

            </select>
        </div>
    );
};

export default DropDown;