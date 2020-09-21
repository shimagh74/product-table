import React from "react";
import './product.css';
import TopHeader from "../molecules/TopHeader/TopHeader";
import Content from "../muscles/Content/Content";
import SearchPriceList from "../organisms/SearchPriceList/SearchPriceList";
// import ProductTable from "../organisms/ProductTable/ProductTable";
import ProductContent from "../organisms/ProductContent/ProductContent";
import ProductTable from "../organisms/ProductTable/ProductTable";

interface IProduct {
    onClose ?: () => void
}

const Product : React.FC < IProduct > = () => {
    return (
        <div className="productPage">
            <ProductContent/>
            {/* <TopHeader textContent="محصول"/> */}
            <div className="content">
                {/* <Content/> */}
                <SearchPriceList/>
                 <ProductTable/>  
            </div>
        </div>
    )
};

export default Product;
