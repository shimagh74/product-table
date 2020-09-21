import React from 'react';
import './ProductContent.css';
import TopHeader from '../../molecules/TopHeader/TopHeader';
import Content from '../../muscles/Content/Content';
import { connect } from 'react-redux';
import { ActionAll,ProductDataType } from '../../../core/models/models';
import { Dispatch } from 'redux';

export interface IProductContent {

    // handlerdataList : () => void;

}

const ProductContent =  (props :IProductContent) => {
    // const {
    //     handlerdataList
    // } = props;

        // const [discount,setDiscount] = useState("");
    // const [unitPrice,setUnitPrice] = useState("");
    // const [maximumReducable,setMaximumReducable] = useState("");
    // const [minimumReducable,setMinimumReducable] = useState("");

    // // useEffect(() => {
    // //     handlerdataList();
    // // }, []);

    // const onChengeDiscount = (event : React.ChangeEvent < HTMLInputElement >) => {
    //     event.preventDefault();
    //     setDiscount(event.target.value);
    // }
    // const onChengeUnitPrice = (event : React.ChangeEvent < HTMLInputElement >) => {
    //     event.preventDefault();
    //     setUnitPrice(event.target.value);
    // }
    // const onChengeMaximumReducable = (event : React.ChangeEvent < HTMLInputElement >) => {
    //     event.preventDefault();
    //     setMaximumReducable(event.target.value);
    // }
    // const onChengeMinimumReducable = (event : React.ChangeEvent < HTMLInputElement >) => {
    //     event.preventDefault();
    //     setMinimumReducable(event.target.value);
    // }

    // const onSubmit = () => {
    //     let postProductData = {
    //         discount: discount,
    //         unitPrice: unitPrice,
    //         maximumReducable: maximumReducable,
    //         minimumReducable: minimumReducable,
           
    //     }

    //     handlerAddProductData(postProductData);
    //     setDiscount("");
    //     setUnitPrice("");
    //     setMaximumReducable("");
    //     setMinimumReducable("");
    // }

    return (
        <div >
            <TopHeader textContent="محصول"/>
            <Content/>
        </div>
    )
}


// const mapDispatchToProps = (dispatch : Dispatch < ActionAll >) => ({
//     handlerAddProductData: (postProductData : ProductDataType) => dispatch(PostProductDataList(postProductData)),
// });

// export default connect(null, mapDispatchToProps)(ProductContent);
export default ProductContent;
