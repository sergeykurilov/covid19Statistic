import React, {ChangeEvent} from 'react';
import "./index.scss"
import search from "../../assets/img/search.png"
import {useDispatch} from "react-redux";
import {setFilteredCountries} from "../../redux/actions";

const Index = () => {
    const dispatch = useDispatch()
    const onSearchValueChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setFilteredCountries(e.currentTarget.value))
    }
    return (
        <div className="form">
            <input type="search" onChange={onSearchValueChange} placeholder="Search" className="search-field"/>
            <button type="submit" className="search-button">
                <img src={search} alt={"search"}/>
            </button>
        </div>
    );
};

export default Index;
