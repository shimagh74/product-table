import React from 'react';
import './ListRow.css'
// import ListIcon, { ICON_TYPES } from '../../Atoms/ListIcon/ListIcon';
import {LabelType} from '../../Atoms/ListItem/ListItem';
import ListLabel from '../../molecules/ListLabel/ListLabel';
import Icon from '../../Atoms/Icon';

interface ListRowType {
    labels?: LabelType[];
    rightClickIcon?: object;
    leftClickIcon?: object;
    color?: string;
    onClick?: ClickType;
    icon?: "Trash" | "Edit";
    checked:boolean;
}
interface ClickType {
    onDelete?: () => void,
    onEdit?: () => void;
}

const ListRow = (props : ListRowType) => {
    const {onClick, labels, color, checked} = props;

    let listRow = <div className="ListRowRoot">
        <ListLabel labels={labels} color={color}/>
        {checked ? (
        <> 
         <Icon
            className="iconRow"
            icon="Trash"
            size={20}
            color="#868686"
            onClick={() => onClick !.onDelete
            ? onClick !.onDelete()
            : null}/>
        <Icon
            className="iconRow"
            icon="Edit"
            size={18}
            color="#868686"
            onClick={() => onClick !.onEdit
            ? onClick !.onEdit()
            : null}/>
        </>) : null

        }
       

    </div>

    return listRow;
}

export default ListRow;