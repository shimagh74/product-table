import React from 'react';
import CheckListRow, { IItem } from '../../organisms/checkListRow/checkListRow';

export interface ITable {
list:any
}

const Table = (props : ITable) => {
    return (
        <div>
            {props.list.map((item : IItem) => {
                return (<CheckListRow items={item}/>)
            })}
        </div>
    );
}

export default Table;
