import { IData, IfetchData, ISingleNFT } from './interface';

export const FETCH_DATA = `FETCH_DATA`;
export const FETCH_DATA_SUCCESS = `FETCH_DATA_SUCCESS`;
export const FETCH_SINGLE_NFT = `FETCH_SINGLE_NFT`;
export const FETCH_SINGLE_NFT_SUCCESS = `FETCH_SINGLE_NFT_SUCCESS`;

export const fetchData = (payload: number, title: string) => ({
	type: FETCH_DATA,
	payload,
	title,
});

export const fetchDataSuccess = (payload: IData[]) => ({
	type: FETCH_DATA_SUCCESS,
	payload
});

export const fetchSingleNFT = (payload: string | undefined) => ({
	type: FETCH_SINGLE_NFT,
	payload
});

export const fetchSingleNFTSuccess = (payload: ISingleNFT) => ({
	type: FETCH_SINGLE_NFT_SUCCESS,
	payload
});
