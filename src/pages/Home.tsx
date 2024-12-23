import React, {useCallback} from 'react';
import {Categories} from "../components/categories/Categories";
import {Catalog} from "../components/catalog/Catalog";
import './home.scss'
import {setCategoryId} from "../redux/filter";
import {useAppDispatch} from "../redux/hooks";
import {useSelector} from "react-redux";
import {RootState} from "../redux/store";



export const Home:React.FC = () => {
    const dispatch = useAppDispatch();
    const categoryId = useSelector((state: RootState) => state.filter.categoryId);

    const onChangeCategory = useCallback((idx: number) => {
        dispatch(setCategoryId(idx));
    }, [dispatch]);
    return (
        <div className="home-container">
                <div className="categories">
                    <Categories value={categoryId} onChangeCategory={onChangeCategory} />
                </div>
                <div className="catalog">
                    <Catalog/>
                </div>
        </div>
    );
};

