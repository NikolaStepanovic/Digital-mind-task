import {
	FETCH_DATA,
	FETCH_DATA_SUCCESS,
	FETCH_SINGLE_NFT,
	FETCH_SINGLE_NFT_SUCCESS,
} from './action';
import { IState, ActionType } from '../store/interface';

const initialState: IState = {
	fetchData: {
		data: [],
		limit: 0,
		total: 0
	},
	fetchSingleNFT: {
		Properties: {
			files: []
		},
		Title: '',
		Description: '',
		tags: []
	},
};

const Reducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state
			};
		case FETCH_DATA_SUCCESS:
			return {
				...state,
				fetchData: {
					data: action.payload.data,
					total: action.payload.total,
					limit: action.payload.limit
				}
			};
		case FETCH_SINGLE_NFT:
			return {
				...state,
			};
		case FETCH_SINGLE_NFT_SUCCESS:
			return {
				...state,
				fetchSingleNFT: action.payload,
			};
		default:
			return state;
	}
};

export default Reducer;
