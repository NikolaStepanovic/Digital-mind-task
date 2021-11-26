import { call, put, select, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
	FETCH_DATA,
	fetchDataSuccess,
	FETCH_SINGLE_NFT,
	fetchSingleNFTSuccess,
} from '../action';
import { ActionType, IData, IfetchData, IState } from '../../store/interface';
export const getState = (state: IState) => state.fetchData;

const api = (skip: number) => {
	return axios.get(`https://test-api.solsea.io/nft-listed/?$limit=20&$skip=${skip}`);
};

const singleNFT = (mint: number) => {
	return axios.get(`https:test-api.solsea.io/nft-listed/${mint}`);
};

const searchNFT = (title: string) => {
	return axios.get(`https://test-api.solsea.io/nft-listed/?Title=${title}`);
};

function* fetchData({ payload, title }: ActionType) {
	try {
		if(title === '' && payload === 0) {
			const { data } = yield call(api, payload);
			yield put(fetchDataSuccess(data));
		} else if (title === '') {
			const state: IfetchData = yield select(getState);
			const { data } = yield call(api, payload);
			const filteredData = [...state.data, ...data.data];
			yield put(fetchDataSuccess({
				...data,
				data: filteredData,
			}));
		} else {
			const { data } = yield call(searchNFT, title as string);
			yield put(fetchDataSuccess(data));
		}
		
		
	} catch (e) {
		console.log(e);
	}
}

function* fetchSingleNFT({ payload }: ActionType) {
	try {
		const { data } = yield call(singleNFT, payload);
		yield put(fetchSingleNFTSuccess(data));
	} catch (e) {
		console.log(e);
	}
}

function* watchDataRequest() {
	yield takeEvery(FETCH_DATA, fetchData);
	yield takeEvery(FETCH_SINGLE_NFT, fetchSingleNFT);
}

export default watchDataRequest;
