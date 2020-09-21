import React, {useEffect, useState} from "react";
import './Content.css';
import DropDown from "../../Atoms/DropDown/DropDown";
import Input from "../../Atoms/Input";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppState} from "../../../core/redux/store/store";
import {productListType, pricepoliticsType} from "../../../core/models/models";
import CheckBox from "../../Atoms/CheckBox";
import {GetproductList} from '../../../core/redux/actions/Action';
import {Getpricepolitics} from '../../../core/redux/actions/Action';

export interface IContent {
    selected?: boolean,
    toggleSelect?: (value : boolean | undefined) => void
}

export interface LinkStateProps {
    data1 : productListType[] | null;
    data2 : null | pricepoliticsType[];

}

export interface LinkDispatchProps {
    handlerproductList : () => void;
    handlerpricepolitics : () => void;
}

type props = LinkStateProps & LinkDispatchProps & IContent;

export const Content : React.FC < props >= ({
    handlerproductList,
    data1,
    data2,
    handlerpricepolitics,
    selected,
    toggleSelect
}) => {

    const handleChange = (selected : boolean | undefined) => {
        if (toggleSelect != null) {
            toggleSelect(selected);
        }
    };
    const [check,setCheck] = useState(false);




    const handelCheckBox = () => {
        setCheck(!check)
    }
    useEffect(() => {
        handlerproductList();
    }, []);
    useEffect(() => {
        handlerpricepolitics();
    }, []);

    return (
        <div className="content">
            <div className="content-item">
                <DropDown className="Frame" lable="انتخاب محصول" Lists={data1}/>
                <DropDown className="Frame" lable="سیاست قیمت گذاری" Lists={data2}/>
                <Input
                    className="Frame"
                    type="text"
                    lable="تخفیف"
                  
                    />
            </div >
            <div className="content-item">
                <Input className="Frame" type="text" lable="قیمت واحد"/>

                <Input className="Frame" type="text" lable="حداکثر قابل کاهش"/>

                <Input className="Frame" type="text" lable="حداکثر قابل افزایش"/>
            </div>
            <div className="check">
                <CheckBox checked={selected} onChange={handleChange}/>
                <div className="text">امکان تغییر قیمت واحد در فاکتور</div>
            </div>
            <div className="content-item">
                <Input className="Frame" type="text" lable="ارزش ریالی هر امتیاز "/>
                <DropDown className="Frame" lable="سیاست گرد کردن" Lists={data2}/>
                <Input className="Frame" type="text" lable="حداقل میزان سفارش"/>
            </div>
            <div className="check">

                <CheckBox checked={selected} onChange={handleChange}/>
                <div className="text">الزام در استفاده از امتیاز</div>
            </div>
        </div>
    );
};
const mapStateToProps = (state : AppState) : LinkStateProps => {

    return {data1: state.Product.productData, data2: state.Product.pricepoliticsData}
}

const mapDispatchToProps = (dispatch : Dispatch) : LinkDispatchProps => {
    return {
        handlerproductList: () => dispatch(GetproductList()),
        handlerpricepolitics: () => dispatch(Getpricepolitics())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Content);
