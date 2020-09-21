import React  from "react";
import Icon from "../../Atoms/Icon";
import './TopHeader.css'
import HandleButton from "../HandleButton/HandleButton";

export interface Iheader {
    textContent?: string
}

 const TopHeader : React.FC < Iheader >= ({textContent}) => {
    return (
        <>
            <div className="header">
                <div className="header-right">
                    <p>{textContent}</p>
                </div>
                <div className="header-left">
                    <div>
                        <HandleButton
                            ButtonStyle="bgFull"
                            color="#F49342"
                            onClick={() => console.log("object")}>
                            ذخیره کردن
                        </HandleButton>
                    </div>
                    <div>
                        <HandleButton
                            ButtonStyle="bgLess"
                            color="#FFF"
                            onClick={() => console.log("object")}>
                            ذخیره و جدید
                        </HandleButton>
                    </div>
                    <div className="icon">
                        <Icon icon="close" size={14} color="#3C4043"/>
                    </div>
                </div>
            </div>
        </>
    );
};
export default TopHeader;
