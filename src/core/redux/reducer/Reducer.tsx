import {ActionTypes} from "../../constants/constant";
import {InitialStateType} from "../../models/models";
import {AppAction} from "../../models/models";

const initialState : InitialStateType = {
    productListLoading: false,
    productData: [],
    productListError: "",

    pricepoliticsLoading: false,
    pricepoliticsData: [],
    pricepoliticsError: "",

    dataListLoading: false,
    dataListData: [],
    dataListError: "",

    postdataListData : "",
    postdataListLoading : false,
    postdataListError : "",

    candidate: {
        head: false,
        1: false,
        2: false,
        3: false
    }

}

export const Product = (state = initialState, action : AppAction) : InitialStateType => {
    switch (action.type) {
        case ActionTypes.GET_PRODUCT_REQUEST:
            return {
                ...state,
                productListLoading: true
            };
        case ActionTypes.GET_PRODUCT_SUCCESS:
            return {
                ...state,
                productData: action.data == null
                    ? []
                    : action.data,
                productListLoading: false
            };
        case ActionTypes.GET_PRODUCT_ERROR:
            return {
                ...state,
                productListLoading: false,
                productListError: ""
            };
        case ActionTypes.GET_PRICEPOLITICS_REQUEST:
            return {
                ...state,
                pricepoliticsLoading: true
            };
        case ActionTypes.GET_PRICEPOLITICS_SUCCESS:
            return {
                ...state,
                pricepoliticsData: action.data == null
                    ? []
                    : action.data,
                pricepoliticsLoading: false
            };
        case ActionTypes.GET_PRICEPOLITICS_ERROR:
            return {
                ...state,
                pricepoliticsLoading: false,
                pricepoliticsError: ""
            };
        case ActionTypes.GET_DATALIST_REQUEST:
            return {
                ...state,
                dataListLoading: true
            };
        case ActionTypes.GET_DATALIST_SUCCESS:
            return {
                ...state,
                dataListData: action.data == null
                    ? []
                    : action.data,
                dataListLoading: false
            };
        case ActionTypes.GET_DATALIST_ERROR:
            return {
                ...state,
                dataListLoading: false,
                dataListError: ""
            };
            case ActionTypes.POST_DATALIST_REQUEST:
            return {
                ...state,
                postdataListLoading: true
            };
        case ActionTypes.POST_DATALIST_SUCCESS:
            return {
                ...state,
                dataListData: [
                    ...state.dataListData, action.postData,
                ]
            };
        case ActionTypes.POST_DATALIST_ERROR:
            return {
                ...state,
                postdataListLoading: false,
                postdataListError: ""
            };
            
        case ActionTypes.SET_CANDIDATE:
            return {
                ...state,
                candidate: {
                    ...state.candidate,
                    head: false,
                    [action.meta !.id]: !action.meta !.value
                }
            };

        case ActionTypes.SET_ALL_CANDIDATE:
            return {
                ...state,
                candidate: {
                    head: !action.payload,
                    1: !action.payload,
                    2: !action.payload,
                    3: !action.payload
                }
            };
        default:
            return state;
    }
};
