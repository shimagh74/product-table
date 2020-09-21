import {takeEvery, put, call} from 'redux-saga/effects'
import {
    GetProductError,
    GetProductSuccess,
    GetProductRequest,

    GetPricepoliticsRequest,
    GetPricepoliticsSuccess,
    GetPricepoliticsError,

    GetDataListRequest,
    GetDataListSuccess,
    GetDataListError,

    PostDataListRequest,
    PostDataListSuccess,
    PostDataListError
} from '../actions/Action';
import {ActionTypes} from '../../constants/constant';
import { dataListType } from '../../models/models';
//GetproductList
const GetproductList = async(url : string) => {
    try {
        const response = await fetch("http://localhost:3000/productList");
        return response.json();
    } catch (e) {
        console.log(e);
    }
}
function * GetproductListItem(action : {
    type: string,
    url: string
}) {

    yield put(GetProductRequest(true))
    try {
        const result = yield call(GetproductList, action.url);
        yield put(GetProductSuccess(result));
    } catch (Error) {
        yield put(GetProductError(Error));

    }
}


//Getpricepolitics
const Getpricepolitics = async(url : string) => {
    try {
        const response = await fetch("http://localhost:3000/pricepolitics");
        return response.json();
    } catch (e) {
        console.log(e);
    }
}
function * GetpricepoliticsItem(action : {
    type: string,
    url: string
}) {

    yield put(GetPricepoliticsRequest(true))
    try {
        const result = yield call(Getpricepolitics, action.url);
        yield put(GetPricepoliticsSuccess(result));
    } catch (Error) {
        yield put(GetPricepoliticsError(Error));

    }
}

//dataListType

const GetDataList = async(url : string) => {
    try {
        const response = await fetch("http://localhost:3000/dataListType");
        return response.json();
    } catch (e) {
        console.log(e);
    }
}
function * GetDataListItem(action : {
    type: string,
    url: string
}) {

    yield put(GetDataListRequest(true))
    try {
        const result = yield call(GetDataList, action.url);
        yield put(GetDataListSuccess(result));
    } catch (Error) {
        yield put(GetDataListError(Error));

    }
}
//POST
// function PostDataList(url : string,data : object) {
//     fetch('http://localhost:3000/dataListType', {
//       method: 'post',
//       body: JSON.stringify(data)
//     }).then(function(response) {
//       return response.json();
//     }).then(function(data) {
//     });
//   }

  const PostDataList =async (postData : dataListType)=> {
      let response;
    try{
        response = Promise.resolve({
            status: 200,
            message: 'ok'
        })
    }
    catch(e){
        response = [ e , null ];
    } 
    return response ;
}
interface IResult{
    message: string;
    status: number;
}
function * PostDataListItem(action : {
    type: string,
    postData:dataListType
}) {

    yield put(PostDataListRequest(true))
    try {

        const result: IResult = yield call(PostDataList, action.postData);
        if (result.status === 200) {
            yield put(PostDataListSuccess(action.postData));
        }
    } catch (Error) {
        yield put(PostDataListError(Error));

    }
}

export function * watchFetchData() {
    yield takeEvery(ActionTypes.GET_PRODUCT_DATA, GetproductListItem);
    yield takeEvery(ActionTypes.PRICEPOLITICS_DATA, GetpricepoliticsItem);
    yield takeEvery(ActionTypes.GET_DATALIST_DATA, GetDataListItem);
    yield takeEvery(ActionTypes.POST_DATALIST_DATA, PostDataListItem);

}
