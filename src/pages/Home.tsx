import React from 'react';
import {Categories} from "../components/categories/Categories";
import {Catalog} from "../components/catalog/Catalog";
import './home.scss'




export const Home = () => {
    return (
        <div className="home-container">
                <div className="categories">
                    <Categories/>
                </div>
                <div className="catalog">
                    <Catalog/>
                </div>
        </div>
    );
};

