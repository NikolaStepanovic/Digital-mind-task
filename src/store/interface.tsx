export interface IState {
	fetchData: IfetchData;
	fetchSingleNFT: ISingleNFT;
}

export interface IfetchData {
	data: IData[];
	total: number;
	limit: number;
}

export interface IData {
	Mint: string;
	Title: string;
	Properties: IProperties;
	id: string;
	Description: string;
}

export interface ISingleNFT {
	Properties: IProperties;
	Title: string;
	Description: string;
	tags: string[];
}

export interface IProperties {
	files: IFiles[];
}

export interface IFiles {
	uri: string;
}

export interface ActionType {
	payload: any;
	type: string;
	title?: string;
}
