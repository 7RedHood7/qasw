import React, {useEffect} from 'react';
import {AppDispatch, RootState} from "../../redux/store";
import {useDispatch, useSelector} from "react-redux";
import {fetchBrands} from "../../redux/brands";

export const Categories: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { brands } = useSelector((state: RootState) => state.brands);

    useEffect(() => {
            dispatch(fetchBrands());
    }, [dispatch]);

    return (
        <div className="categories_colum">
            <h1>All Brands</h1>
            <ul>
                {brands.map((brand) => (
                    <li key={brand.id}>{brand.title}</li>
                ))}
            </ul>
        </div>
    );
};