import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import Header from "../../component/Header/Header";
import { fetchData } from '../../store/action';
import { useDispatch, useSelector } from 'react-redux';
import { IState, IData } from '../../store/interface';
import './Explore.scss';
import { Link } from 'react-router-dom';

const Explore = () => {
    const store = useSelector((state: IState) => state);
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [title, setTitle] = useState('');

    const skip = store.fetchData?.total > store.fetchData?.limit * page ? store.fetchData?.limit * page : store.fetchData?.total;
    
    const handleScroll = useCallback((e: any) => {
            const bottom = e.target.scrollHeight - e.target.scrollTop === e.target.clientHeight;
            if (bottom && Math.floor(store.fetchData?.total / store.fetchData?.limit) > page) setPage(page + 1)
        },
        [page, store.fetchData?.total, store.fetchData?.limit],
    )

    const handleTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        if (e.target.value) setPage(0);
    }

    useEffect(() => {
        dispatch(fetchData(skip, title));
    }, [dispatch, title, skip]);

    return <>
        <Header />
        <div className="Search">
            <h3>Search title:</h3>
            <div>
                <input onChange={(e) => handleTitle(e)} className='Input' type='text' placeholder={'type title...'} />
            </div>
        </div>
        <div onScroll={handleScroll} className='Container'>
            {store.fetchData?.data?.map((el: IData, i: number) => {
                const image = el.Properties?.files ? el.Properties.files[0].uri : '';
                return <Link className='Link' key={i} to={`/nft/${el.Mint}`}><div className='Box' key={i}>
                    <h3>{el.Title}</h3>
                    {image !== '' ? <img className='image' src={image} alt='' /> : <b><i>no picture upload...</i></b>}
                    <p className='title'>{el.Description ? el.Description.substring(0, 50) : <b><i>no description...</i></b>}</p>
                </div>
                </Link>
            })}
        </div>
    </>
}

export default Explore;