import { useEffect } from 'react';
import './SingleNFT.scss';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { IState } from '../../store/interface';
import { fetchSingleNFT } from '../../store/action';
import Header from '../../component/Header/Header';

const SingleNFT = () => {
    let { mint } = useParams();

    const store = useSelector((state: IState) => state);
    const dispatch = useDispatch();

    const data = store.fetchSingleNFT;

    const image = data.Properties.files ? data.Properties?.files[0]?.uri : '';

    useEffect(() => {
        dispatch(fetchSingleNFT(mint));
    },
        [dispatch, mint]
    );

    return <div className='SingleNFT'>
        <Header />
        <div className='Container'>
            <div className='Container-left'>
                {image ? <img className='image' src={image} alt="" /> : <b><i><h1>no picture upload...</h1></i></b>}
            </div>
            <div className='Container-right'>
                <h1>{data.Title}</h1>
                <h3>{data.Description ? data.Description : <b><i>No description</i></b>}</h3>
                <div className='Tag-Box'>
                    {data.tags?.map((el: string, i: number) => {
                        return <div key={i} className='Tags'>{el}</div>
                    })}
                </div>
            </div>
        </div>
    </div>
}

export default SingleNFT;



