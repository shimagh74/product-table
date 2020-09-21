import React from 'react';
import './checkListRow.css'
import CheckBox from '../../Atoms/CheckBox';
import ListRow from '../../muscles/ListRow/ListRow';
import { LabelType } from '../../Atoms/ListItem/ListItem';

export interface IItem {
    color?: string,
    selected : boolean,
    toggleSelect?: (value : boolean) => void,
    leftClickIcon?: object,
    // rightClickIcon?: any,
    backgroundColor?: string;
    labels: LabelType[];
}

export interface CheckListRowProps {
    items : IItem;
    // newList:IItem;
}

const CheckListRow = (props : CheckListRowProps) => {
    const {
        
        selected,
        toggleSelect,
        backgroundColor,
        ...other
    } = props.items;

    const handleChange = (selected : boolean) => {
        if (toggleSelect != null) {
            toggleSelect(selected);
        }
    };

    const style = {
        backgroundColor: backgroundColor && selected
            ? backgroundColor
            : '#FFFFFF'
    };

    return (
        <div className="RowRoot" style={style}>
            <CheckBox checked={selected} onChange={() => handleChange(selected)}/>
            <ListRow {...other} checked={selected} />
        </div>
    );
}

export default CheckListRow;
