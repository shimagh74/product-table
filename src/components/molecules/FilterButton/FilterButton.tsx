import React from 'react';
import './FilterButton.css';
import Icon from '../../Atoms/Icon';

const FilterButton : React.FC = () => {
    return (
        <div >
            <div className="filter-button">
                <Icon icon="filter" size={16} color="#868686"/>
                <p>فیلتر</p>
            </div>
        </div>
    )
}
export default FilterButton;
