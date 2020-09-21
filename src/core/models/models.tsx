import {ActionTypes} from "../constants/constant";

export interface InewArray {
    cellContent : string;
    class_item?: string,
    onClick?: () => void;
}

export interface InputPropsType {
    labelName?: string;
    textplaceholder?: string;
    iconName?: "filter" | "close" | "plus" | "Calendar" | "search" | "Edit" | "Trash" | "user";
    InputStyle?: "borderButtonWithIcon" | "borderFull" | "borderButton" | "inputDropDown";
    handelCheckBox?: () => void
}

//fetchActionType
export interface GetProductRequest {
    type : typeof ActionTypes.GET_PRODUCT_REQUEST,
    productListLoading?: boolean

}
export interface GetProductSuccess {
    type : typeof ActionTypes.GET_PRODUCT_SUCCESS,
    data?: productListType[] | null
}
export interface GetProductError {
    type : typeof ActionTypes.GET_PRODUCT_ERROR,
    productListError?: string

}
//
export interface GetPricepoliticsRequest {
    type : typeof ActionTypes.GET_PRICEPOLITICS_REQUEST,
    pricepoliticsLoading?: boolean

}
export interface GetPricepoliticsSuccess {
    type : typeof ActionTypes.GET_PRICEPOLITICS_SUCCESS,
    data?: pricepoliticsType[] | null
}
export interface GetPricepoliticsError {
    type : typeof ActionTypes.GET_PRICEPOLITICS_ERROR,
    pricepoliticsError?: string

}
//GetDataList
export interface GetDataListRequest {
    type : typeof ActionTypes.GET_DATALIST_REQUEST,
    dataListLoading?: boolean

}
export interface GetDataListSuccess {
    type : typeof ActionTypes.GET_DATALIST_SUCCESS,
    data?: dataListType[]
}
export interface GetDataListError {
    type : typeof ActionTypes.GET_DATALIST_ERROR,
    dataListError?: string

}
//PostDataList
export interface PostDataList {
    type : typeof ActionTypes.POST_DATALIST_REQUEST
}
export interface PostDataListRequest {
    type : typeof ActionTypes.POST_DATALIST_REQUEST,
    postdataListLoading?: boolean

}
export interface PostDataListSuccess {
    type : typeof ActionTypes.POST_DATALIST_SUCCESS,
    postData : dataListType
}
export interface PostDataListError {
    type : typeof ActionTypes.POST_DATALIST_ERROR,
    postdataListError?: string

}

//
export interface setCandidate {
    type : typeof ActionTypes.SET_CANDIDATE,
    meta : {
        id: number,
        value: boolean
    }
}
export interface setAllCandidate {
    type : typeof ActionTypes.SET_ALL_CANDIDATE,
    payload : boolean

}

export interface AppAction {
    // data: productListType[] | pricepoliticsType[] | dataListType[] | null;
    productListLoading : boolean;
    pricepoliticsLoading : boolean;
    dataListLoading : boolean;
    postListLoading : boolean;
    pricepoliticsError : string;
    productListError : string;
    dataListError : string;
    postdataListError : string;
    postData : dataListType;
    data : any;
    type : string;
    payload : boolean;
    meta : {
        id: number,
        value: boolean
    }
}

export type AppActions = PostDataList | GetProductRequest | GetProductSuccess | GetProductError | GetPricepoliticsRequest | GetPricepoliticsSuccess | GetPricepoliticsError | GetDataListRequest | GetDataListSuccess | GetDataListError | setAllCandidate | setCandidate | PostDataListRequest | PostDataListSuccess | PostDataListError;

export type ActionAll = AppActions

//fetchReducertypes

export interface InitialStateType {
    productData : productListType[] | null,
    productListLoading : boolean,
    productListError : string;

    pricepoliticsData : pricepoliticsType[] | null;
    pricepoliticsLoading : boolean;
    pricepoliticsError : string;

    dataListData : dataListType[];
    dataListLoading : boolean,
    dataListError : string;

    postdataListData : string;
    postdataListLoading : boolean,
    postdataListError : string;
    

    candidate : {
        head: boolean,
        1: boolean,
        2: boolean,
        3: boolean
    }

}
export interface productListType {
    name : string
};
export interface pricepoliticsType {
    name : string
};
export interface dataListType {
    Rang1 : string,
    Rang2 : string,
    Percentage : string,
    value : string;
    id : number
};
export interface ProductDataType {
    discount : string,
    unitPrice : string,
    maximumReducable : string,
    minimumReducable : string;
    // id : number
};
//
export interface PriceStateType {
    priceError : {
        error: boolean;
        status: string | null;
    };
    loading : boolean;
}

export interface AccessStateType {
    accessID : number;
    filterValue : string;
    candidate : {
        head: boolean,
        1: boolean,
        2: boolean,
        3: boolean
    }
}

export interface ProductStateType {
    productID : number;
    filterValue : string;
    candidate : {
        head: boolean,
        1: boolean,
        2: boolean,
        3: boolean
    }

    dataListData : dataListType[]
}
export interface StateType {
    Product : ProductStateType;
    price : PriceStateType;
    accessReducer : AccessStateType;
}

export interface ActionModel < TPayload,
TMeta > {
    type: string;
    payload?: TPayload;
    error?: boolean;
    meta?: TMeta;
}

export interface StateType {
    product : ProductStateType;
    price : PriceStateType;
    access : AccessStateType;
}
