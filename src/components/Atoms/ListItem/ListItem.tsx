import React from "react";
import './ListItem'
export interface LabelType {
    content: string | number;
    width: string;
    onClick? : () => void;
    color?: string;
    newList?:string
}

const Label = (props: LabelType) => {
    const {
        content,
        width,
        onClick,
        color
    } = props;

    const style = { width, color: color ? color : '#3C4043' };
    return(
        <div
            style={style}
            className = "listItem"
            onClick={() => onClick ? onClick() : null}
        >
            { content }
        </div>
    )
}

export default Label;