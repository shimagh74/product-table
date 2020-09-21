import React from 'react';
import Label, { LabelType } from '../../Atoms/ListItem/ListItem';
import './ListLabel.css'


interface ListRowType {
    labels?: LabelType[];
    color?: string,
}

const ListLabel = (props: ListRowType) => {
    const {
        labels,
        color,
    } = props;

        // var newItem =labels && labels.slice(1);

    let listLabel =
        <div className='listLabel'>
            {labels && labels.map((label: LabelType, index: number) =>
                <Label
                    color={color && color}
                    key={index}
                    {...label}
                />
            )}
        </div>

    return listLabel;
}

export default ListLabel;