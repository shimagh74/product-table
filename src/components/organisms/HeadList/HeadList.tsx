import React from 'react';
import './HeadList.css'

interface HeadList {
    children : React.ReactNode;
    onSearch?: (value : string) => void;
}

const HeadList = (props : HeadList) => {
    const {children} = props;

    let headList = <div >
        <div className="listRowParent">
            {children}
        </div>
    </div>
    return headList;
}

export default HeadList;