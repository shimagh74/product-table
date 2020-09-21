import { ActionTypes } from "../../constants/constant";
import { productListType,ActionAll, pricepoliticsType, dataListType, ProductDataType } from "../../models/models";

//GetproductList
export const  GetproductList = ():ActionAll =>{  
	return {
	type: ActionTypes.GET_PRODUCT_DATA,
  }
}  

export const GetProductRequest = (productListLoading:boolean):ActionAll =>{  
	return {
	type: ActionTypes.GET_PRODUCT_REQUEST,
	productListLoading:productListLoading	
  }
}

export const GetProductSuccess = (data?:productListType[] | null):ActionAll=>
{  
	return {
	type: ActionTypes.GET_PRODUCT_SUCCESS,
	data,
  }
}
export const GetProductError = (productListError:string):ActionAll =>
{  
	return {
	type: ActionTypes.GET_PRODUCT_ERROR,
	productListError:productListError
  }
}

//PRICEPOLITICS
export const Getpricepolitics = ():ActionAll =>{  
	return {
	type: ActionTypes.PRICEPOLITICS_DATA,
  }
}

export const GetPricepoliticsRequest = (pricepoliticsLoading:boolean):ActionAll =>{  
	return {
	type: ActionTypes.GET_PRICEPOLITICS_REQUEST,
	pricepoliticsLoading:pricepoliticsLoading	
  }
}

export const GetPricepoliticsSuccess = (data?:pricepoliticsType[] | null):ActionAll=>
{  
	return {
	type: ActionTypes.GET_PRICEPOLITICS_SUCCESS,
	data,
  }
}
export const GetPricepoliticsError = (pricepoliticsError:string):ActionAll =>
{  
	return {
	type: ActionTypes.GET_PRICEPOLITICS_ERROR,
	pricepoliticsError:pricepoliticsError
  }
}
//GetDataList
export const GetDataList = ():ActionAll =>{  
	return {
	type: ActionTypes.GET_DATALIST_DATA,
  }
}

export const GetDataListRequest = (dataListLoading:boolean):ActionAll =>{  
	return {
	type: ActionTypes.GET_DATALIST_REQUEST,
	dataListLoading:dataListLoading	
  }
}

export const GetDataListSuccess = (data?:dataListType[] ):ActionAll=>
{  
	return {
	type: ActionTypes.GET_DATALIST_SUCCESS,
	data,
  }
}
export const GetDataListError = (dataListError:string):ActionAll =>
{  
	return {
	type: ActionTypes.GET_DATALIST_ERROR,
	dataListError:dataListError
  }
}

//PostDataList
export const PostDataList = (postData:dataListType):ActionAll =>{  
	return {
	type: ActionTypes.POST_DATALIST_DATA,
	postData ,
  }
}

export const PostDataListRequest = (postdataListLoading:boolean):ActionAll =>{  
	return {
	type: ActionTypes.POST_DATALIST_REQUEST,
	postdataListLoading:postdataListLoading	
  }
}

export const PostDataListSuccess = (postData:dataListType):ActionAll=>
{  
	return {
	type: ActionTypes.POST_DATALIST_SUCCESS,
	postData,
  }
}
export const PostDataListError = (postdataListError:string):ActionAll =>
{  
	return {
	type: ActionTypes.POST_DATALIST_ERROR,
	postdataListError:postdataListError
  }
}
//POSTPRODUCTDATA
// export const PostProductDataList = (postProductData:ProductDataType):ActionAll =>{  
// 	return {
// 	type: ActionTypes.POST_DATA_PRODUCT,
// 	postProductData ,
//   }
// }

// export const PostProductDataListRequest = (postProductDataLoading:boolean):ActionAll =>{  
// 	return {
// 	type: ActionTypes.POST_DATA_PRODUCT_REQUEST,
// 	postProductDataLoading:postProductDataLoading	
//   }
// }

// export const PostProductDataListSuccess = (postProductData:ProductDataType):ActionAll=>
// {  
// 	return {
// 	type: ActionTypes.POST_DATA_PRODUCT_SUCCESS,
// 	postProductData,
//   }
// }
// export const PostProductDataListError = (postProductDataError:string):ActionAll =>
// {  
// 	return {
// 	type: ActionTypes.POST_DATA_PRODUCT_ERROR,
// 	postProductDataError:postProductDataError
//   }
// }

//
export const setCandidate  = (id: number, value: boolean): ActionAll => ({
    type: ActionTypes.SET_CANDIDATE,
    meta: { id, value },
});

export const setAllCandidate = (value: boolean): ActionAll => ({
    type: ActionTypes.SET_ALL_CANDIDATE,
    payload: value,
});




