import React, {useEffect, Dispatch, useState} from 'react';
import * as constants from '../../../core/constants/constant';
import {StateType, dataListType, ActionAll} from '../../../core/models/models';
import {connect} from 'react-redux';
import CheckListRow, {IItem} from '../checkListRow/checkListRow';
import {GetDataList, PostDataList} from '../../../core/redux/actions/Action';
import {setCandidate} from '../../../core/redux/actions/Action';
import {setAllCandidate} from '../../../core/redux/actions/Action';
import './ProductTable.css'
import HeadList from '../HeadList/HeadList';
import Input from '../../Atoms/Input';
import Icon from '../../Atoms/Icon';
import Table from '../../molecules/Table/Table';

interface AccessPageType {
    candidate?: any;
    dataList : dataListType[];
    setCandidate?: (id : number, value : boolean) => void;
    setAllCandidate?: (value : boolean) => void;
    setFilterValue?: (value : string) => void;
    deleteItem?: (id : number) => void;
    handlerdataList : () => void;
    handlerAddData : (postData : dataListType) => void;
}

interface IListType {
    headItem : IItem;
    listItems : IItem[];
}

const ProductTable = (props : AccessPageType) => {
    const {
        dataList,
        candidate,
        deleteItem,
        setCandidate,
        setFilterValue,
        setAllCandidate,
        handlerdataList,
        handlerAddData
    } = props;

    const [firstText,
        setFirstText] = useState("");
    const [secondText,
        setSecondText] = useState("");
    const [thirdText,
        setThirdText] = useState("");
    const [fourText,
        setFourText] = useState("");

    useEffect(() => {
        handlerdataList();
    }, []);

    const onChengeFirstText = (event : React.ChangeEvent < HTMLInputElement >) => {
        event.preventDefault();
        setFirstText(event.target.value);
    }
    const onChengeSecondText = (event : React.ChangeEvent < HTMLInputElement >) => {
        event.preventDefault();
        setSecondText(event.target.value);
    }
    const onChengeThirdText = (event : React.ChangeEvent < HTMLInputElement >) => {
        event.preventDefault();
        setThirdText(event.target.value);
    }
    const onChengeFourText = (event : React.ChangeEvent < HTMLInputElement >) => {
        event.preventDefault();
        setFourText(event.target.value);
    }

    const onSubmit = () => {
        let postData = {
            Rang1: firstText,
            Rang2: secondText,
            Percentage: thirdText,
            value: fourText,
            id: 4
        }
        handlerAddData(postData);
        setFirstText("");
        setSecondText("");
        setThirdText("");
        setFourText("");
    }

    const onSelectParent = (value : boolean) => {
        if (dataList && dataList.length !== 0) {
            setAllCandidate && setAllCandidate(value);
        }
    };

    const onSelectChild = (id : number) => (value : boolean) => {
        setCandidate && setCandidate(id, value);
    };

    const onMultiDelete = () => {
        //    deleteMultiItem;
    }

    const onDelete = (id : number) => () => {
        deleteItem && deleteItem(id);
    }

    const onEdit = (id : number) => () => {}

    const list : IListType = {

        headItem: {
            selected: candidate['head'],
            toggleSelect: onSelectParent,
            labels: constants.Header,
            leftClickIcon: {
                onDelete: onMultiDelete
            },
            color: '#868686'
        },

        listItems: dataList && dataList.map((item : dataListType) => ({
            selected: candidate[item.id],
            toggleSelect: onSelectChild(item.id),

            leftClickIcon: {
                onDelete: onDelete(item.id),
                onEdit: onEdit(item.id)
            },
            labels: [
                {
                    content: item.Rang1,
                    width: constants.accessListWidth[0]
                }, {
                    content: item.Rang2,
                    width: constants.accessListWidth[1]
                }, {
                    content: item.Percentage,
                    width: constants.accessListWidth[2]
                }, {
                    content: item.value,
                    width: constants.accessListWidth[3]
                }
            ],
            color: '#3C4043',
            backgroundColor: 'rgba(92, 106, 196, 0.05)'
        }))
    }

    const handleSearch = (value : string) => {
        if (dataList && dataList.length === 0) {
            setAllCandidate && setAllCandidate(true);
        }
        setFilterValue && setFilterValue(value.trim().toString());
    };
    return (
        <div className="">
            <div className="head">
                <HeadList onSearch={handleSearch}>
                    <CheckListRow items={list.headItem}/>
                </HeadList>
            </div>

            {dataList && dataList.length !== 0 && <div className="AccessList">
                <div className="AddRow">
                    <div className="first">
                        <Input
                            className="input-table"
                            type="text"
                            handleChange={onChengeFirstText}
                            value={firstText}/>
                        <div className="text-input">تا</div>
                        <Input
                            className="input-table"
                            type="text"
                            handleChange={onChengeSecondText}
                            value={secondText}/>
                    </div>
                    <div className="second">
                        <Input
                            className="input-table"
                            type="text"
                            handleChange={onChengeThirdText}
                            value={thirdText}/>
                    </div>
                    <div className="third">
                        <Input
                            className="input-table-left"
                            type="text"
                            handleChange={onChengeFourText}
                            value={fourText}/>
                        <Icon icon="submited" size={20} color="#219653" onClick={onSubmit}/>
                        <Icon icon="close" size={14} color="#868686"/>
                    </div>
                </div>
                <Table list={list.listItems}/>
            </div>}
        </div>
    );
}

const mapStateToProps = (state : StateType) => {
    return {dataList: state.Product.dataListData, candidate: state.Product.candidate}
};

const mapDispatchToProps = (dispatch : Dispatch < ActionAll >) => ({
    handlerdataList: () => dispatch(GetDataList()),
    handlerAddData: (postData : dataListType) => dispatch(PostDataList(postData)),
    setCandidate: (id : number, value : boolean) => dispatch(setCandidate(id, value)),
    setAllCandidate: (value : boolean) => dispatch(setAllCandidate(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductTable);