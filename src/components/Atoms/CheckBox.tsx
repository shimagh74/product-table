import React from 'react';

interface CheckBoxProps {
    checked: boolean | undefined,
    onChange: (value: boolean | undefined) => void;
}

const CheckBox = (props: CheckBoxProps) => {
    const { checked, onChange } = props;

    const handleChange = () => {
        if (onChange != null) {
            onChange(checked);
        }
    }
    return(
        <input
            type="checkbox"
            id='checkBox'
            name="checkBox"
            value="checkBox"
            checked={checked}
            onChange={() => handleChange()}
        />
    )
}

export default CheckBox;

