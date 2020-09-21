import React, {useState} from 'react';
import './SearchPriceList.css';
import BoxInput from '../../molecules/BoxInput/BoxInput';
import HandleButton from '../../molecules/HandleButton/HandleButton';
import FilterButton from '../../molecules/FilterButton/FilterButton';


export interface SearchPriceListPropsType {
    result?: string,
    props?: string;
    // items : IItem;
}

const SearchPriceList : React.FC < SearchPriceListPropsType >= (props) => {

    const [result,setResult] = useState < string > ('');

    const handlerClick = (event : Event < HTMLInputElement >) => {
        const {value} = event.target;
        setResult(value);
    }
    interface Event < T = EventTarget > {
        target: T;
    }
    

    return (
        <div className="header-table">
            <div className="containerSearchPriceList">
                <div className="input-search-right">
                    <BoxInput
                        InputStyle="borderButtonWithIcon"
                        textplaceholder="جستجوی قیمت پله ای"
                        iconName="search"></BoxInput>

                </div>
                <div className="input-search-left">
                    <div className="input-search-left-button">
                        <HandleButton
                            ButtonStyle="withIcon"
                            iconName="plus"
                            color="#5C6AC4"
                            onClick={() => handlerClick}>
                     قیمت پله ای
                        </HandleButton>
                    </div>
                    <div className="input-search-left-filter-button">
                    <FilterButton/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchPriceList;
